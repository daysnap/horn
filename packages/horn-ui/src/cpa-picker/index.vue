
<template>
  <van-popup
    round
    :show="visible"
    @click-overlay="hide"
    position="bottom"
  >
    <van-picker
      :title="computedProps.title"
      :modelValue="computedProps.value"
      :columns="computedProps.columns"
      @cancel="hide"
      @confirm="confirm"
    ></van-picker>
    <input
      v-if="computedProps.filterable"
      placeholder="输入关键词进行筛选"
      class="cpa-picker-filter"
      type="text"
      v-model="keyword"
    />
  </van-popup>
</template>

<script setup lang="ts">
  // import { Popup as VanPopup, Picker as VanPicker, Button as VanButton } from 'vant'
  import { ref, reactive, computed } from 'vue'
  import { PickerColumn, PickerProps, PickerConfirmEventParams } from 'vant'
  import { useVisible, UseVisibleShowOptions } from '../hooks'

  defineOptions({
    name: 'CpaPicker',
  })

  const props = defineProps({
    title: String,
    value: {
      default: '',
    },
    filterable: {
      type: Boolean,
      default: false,
    },
    columns: {
      type: Array,
      default: () => []
    }
  })

  const keyword = ref<string>('')

  export interface CpaPickerProps {
    columns?: PickerColumn,
    value?: any,
    filterable?: boolean
  }
  const dynamicProps = ref<CpaPickerProps>()

  const computedProps = computed(() => {
    let { value, columns, ...rest } = Object.assign({}, props, dynamicProps.value)
    if (!Array.isArray(value)) {
      value = typeof value === 'object' ? value.value : value
      value = value ? [value] : []
    }
    return { value, columns, ...rest }
  })

  const {
    show,
    hide,
    confirm,
    visible,
  } = useVisible<
    CpaPickerProps,
    PickerConfirmEventParams
  >({
    showCallback: options => {
      dynamicProps.value = options
    },
    hideCallback: () => {
      console.log('hideCallback')
    },
    confirmCallback: res => {
      console.log('confirmCallback => ', res)
    },
  })

  export interface CpaPickerInstance {
    show: typeof show
    hide: typeof hide
    confirm: typeof confirm
  }

  defineExpose<CpaPickerInstance>({
    show,
    hide,
    confirm,
  })

</script>

<style lang="scss" scoped>
  @import "../styles/define";
  .cpa-picker-filter{
    @extend %bsb;
    @extend %w100;
    border: none;
    padding: 0 j(16);
    height: j(40);
    font-size: j(14);
    background-color: transparent;
  }
</style>
