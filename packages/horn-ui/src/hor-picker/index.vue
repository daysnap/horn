
<template>
  <van-popup
    round
    :show="visible"
    @click-overlay="hide"
    position="bottom"
  >
    <van-picker
      :title="computedProps.title"
      :modelValue="computedValues"
      :columns="computedColumns"
      @cancel="hide"
      @confirm="confirm"
    ></van-picker>
    <input
      v-if="computedFilterable"
      placeholder="输入关键词进行筛选"
      class="hor-picker-filter"
      type="text"
      v-model="keyword"
    />
  </van-popup>
</template>

<script setup lang="ts">

  import { PickerColumn, PickerConfirmEventParams } from 'vant'
  import { ref, computed } from 'vue'
  import { useVisible } from '@daysnap/horn-use'
  import { horPickerProps, HorPickerProps } from './types'
  import { Numeric } from '../utils'

  defineOptions({ name: 'HorPicker' })

  const props = defineProps(horPickerProps)

  const dynamicProps = ref<Partial<HorPickerProps>>()

  const computedProps = computed<HorPickerProps>(() =>
    Object.assign({}, props, dynamicProps.value)
  )
  const computedValues = computed(() => {
    const { value } = computedProps.value
    let values: Numeric[] = []
    if (Array.isArray(value)) {
      values = value.map(item =>
        typeof item === 'object' ? item.value : value
      )
    } else {
      const item = typeof value === 'object' ? value.value : value
      if (item) {
        values = [item]
      }
    }
    return values
  })

  const computedFilterable = computed(() => {
    const { filterable, columns } = computedProps.value
    const item = columns[0]
    return filterable && !Array.isArray(item) && !Array.isArray(item.children)
  })

  const keyword = ref<string>('')
  const computedColumns = computed(() => {
    let { columns = [], filterable } = computedProps.value
    if (filterable && keyword.value.length) {
      columns = (columns as PickerColumn).filter(item =>
        item?.text?.toString().includes(keyword.value)
      )
    }
    if (!columns.length) {
      columns = [{ text: '暂无数据', value: 'ERR_NO_DATA' }]
    }
    return columns
  })

  const {
    show,
    hide,
    confirm,
    visible,
  } = useVisible<
    Partial<HorPickerProps>,
    PickerConfirmEventParams & { value: any }
  >({
    showCallback: options => {
      keyword.value = ''
      dynamicProps.value = options
    },
    confirmCallback: (res: PickerConfirmEventParams) => {
      let { value, columns } = computedProps.value
      let { selectedOptions, selectedValues } = res
      if (selectedValues[0] === 'ERR_NO_DATA') {
        const selected = (columns as PickerColumn)?.find(item =>
          item.value === value
        )
        selectedOptions = []
        selectedValues = []
        if (selected) {
          selectedOptions = [selected]
          selectedValues = [selected.value ?? '']
        }
      } else {
        if (selectedOptions.length === 1 && !Array.isArray(value)) {
          if (typeof value === 'object') {
            value = selectedOptions[0]
          } else {
            value = selectedValues [0]
          }
        } else {
          value = selectedOptions
        }
      }
      return { selectedOptions, selectedValues, value }
    },
  })

  defineExpose({
    show,
    hide,
    confirm,
  })

</script>

<style lang="scss" scoped>
  @import "../styles/define.scss";

  @include b(picker-filter) {
    @extend %bsb;
    @extend %w100;
    border: none;
    padding: 0 j(16);
    height: j(40);
    font-size: j(14);
    background-color: transparent;
  }
</style>
