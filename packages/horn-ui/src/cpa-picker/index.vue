
<template>
  <van-picker
    v-model="selectedValues"
    title="标题"
    :columns="columns"
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
  import { ref, PropType, reactive } from 'vue'
  import { PickerColumn, PickerOption } from 'vant'
  import { useVisible, UseVisibleShowOptions } from '../hooks'

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
  const selectedValues = ref(['Wenzhou']);

  const {
    show,
    hide,
    confirm,
    visible,
  } = useVisible<{
    columns?: PickerColumn,
    value?: any,
  }>({
    showCallback: (options) => {
      attrs.value = options
      options = reactive({})
      console.log('回调了')
    },
    hideCallback: () => {
      console.log('hideCallback')
    },
    confirmCallback: (res, index) => {
      console.log('res => ', res, index)
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
