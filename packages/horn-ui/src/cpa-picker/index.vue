
<template>
  <van-picker
    v-model="selectedValues"
    title="标题"
    :columns="columns"
    @confirm="confirm"
  />
  <p>{{ selectedValues }}</p>
  <van-popup
    round
    :show="visible"
    @click-overlay="hide"
    position="bottom"
  >
    <van-picker
      :modelValue="selectedValues"
      :columns="columns"
      @cancel="hide"
      @confirm="confirm"
    ></van-picker>
  </van-popup>
</template>

<script setup lang="ts">
  // import { Popup as VanPopup, Picker as VanPicker, Button as VanButton } from 'vant'
  import { ref, reactive } from 'vue'
  import { PickerColumn, PickerProps, PickerConfirmEventParams } from 'vant'
  import { useVisible, UseVisibleShowOptions } from '../hooks'
  import { Numeric } from 'vant/es/utils'

  defineOptions({
    name: 'CpaPicker',
  })

  const attrs = ref<any>({
    value: [],
    columns: [],
  })
  const columns = [
    { text: '杭州', value: 'Hangzhou' },
    { text: '宁波', value: 'Ningbo' },
    { text: '温州', value: 'Wenzhou' },
    { text: '绍兴', value: 'Shaoxing' },
    { text: '湖州', value: 'Huzhou' },
  ];
  const selectedValues = ref(['Ningbo']);

  export interface CpaPickerProps {
    value: [],
    title: string,
  }

  defineProps<{
    value: [],
    title: string,
  }>()

  const {
    show,
    hide,
    confirm,
    visible,
  } = useVisible<{
    columns?: PickerColumn,
    value?: any,
  }, PickerConfirmEventParams>({
    showCallback: (options) => {
      attrs.value = options
      options = reactive({})
      console.log('回调了')
    },
    hideCallback: () => {
      console.log('hideCallback')
    },
    confirmCallback: (res) => {
      console.log('confirmCallback')
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

</style>
