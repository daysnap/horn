<template>
  <van-popup
    round
    :show="visible"
    position="bottom"
  >
    <van-date-picker
        title="选择日期"
        :columns-type="computedProps.columnsType"
        @confirm="confirm"
        @cancel="hide"
    />
  </van-popup>
</template>

<script setup lang="ts">

  import { computed, defineProps, ref } from 'vue'
  import { useVisible } from '@daysnap/horn-use'
  import { datePickerProps , DatePickerProps } from './types'
  
  defineOptions({
    name: 'HorDatePicker',
  })

  const props = defineProps(datePickerProps);

  const dynamicProps = ref<Partial<DatePickerProps>>();

  const computedProps = computed<DatePickerProps>(() =>
      Object.assign({}, props, dynamicProps.value)
  )
  const {
    show,
    hide,
    confirm,
    visible,
  } = useVisible<
      Partial<DatePickerProps>
    >({
      showCallback: options => {
        dynamicProps.value = options
      },
      confirmCallback:(res)=>{
        return res
      }
  })
  defineExpose({
    show,
    hide,
    confirm,
  })
</script>

<style scoped>

</style>