<template>
  <van-popup round @click-overlay="hide" :show="visible" position="bottom">
    <van-date-picker
      :modelValue="computedProps.value"
      title="选择日期"
      :columns-type="computedProps.columnsType"
      @confirm="confirm"
      @cancel="hide"
      :formatter="computedProps.formatter"
      :min-date="computedProps.minDate"
      :max-date="computedProps.maxDate"
      :filter="computedProps.filter"
    />
  </van-popup>
</template>

<script setup lang="ts">
  import { computed, defineProps, ref } from 'vue'
  import { datePickerProps, DatePickerProps } from './types'
  import { PickerConfirmEventParams } from 'vant'
  import { useVisible } from '@daysnap/horn-use'
  defineOptions({
    name: 'HorDatePicker',
  })

  const props = defineProps(datePickerProps)

  const dynamicProps = ref<Partial<DatePickerProps>>()

  const computedProps = computed<DatePickerProps>(() =>
    Object.assign({}, props, dynamicProps.value),
  )
  const { show, hide, confirm, visible } = useVisible<
    Partial<DatePickerProps>,
    PickerConfirmEventParams & { value: any }
  >({
    showCallback: (options) => {
      dynamicProps.value = options
    },
    confirmCallback: (res) => {
      return res
    },
  })
  defineExpose({
    show,
    hide,
    confirm,
  })
</script>

<style scoped></style>
