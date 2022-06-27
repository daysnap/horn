
<template>

  <van-button @click="handleClick">选择省份</van-button>

  <p>city => {{ city }}</p>

  <cpa-picker
    ref="refCpaPicker"
  />

</template>

<script setup lang="ts">
  import { CpaPicker, CpaPickerInstance } from '@daysnap/horn-ui'
  console.log('CpaPicker => ', CpaPicker.name)

  let label = '姓名'

  const city = ref('111')

  const refCpaPicker = ref<CpaPickerInstance>()
  const handleClick = () => {
    refCpaPicker.value?.show({
      value: city.value,
      columns: [
        { text: '杭州', value: '111' },
        { text: '宁波', value: '222' },
        { text: '温州', value: '333' },
      ],
      filterable: true,
    }).then((res) => {
      const { selectedOptions, selectedValues, value } = res
      city.value = value
      console.log('value => ', value)
      console.log('selectedOptions => ', selectedOptions)
      console.log('selectedValues => ', selectedValues)
    }).catch(err => {

    })
  }


  const fun = <T> (): Promise<T> => Promise.resolve({} as T)

  fun<{ x: string }>().then((res) => {

  })

</script>

<style lang="scss" scoped>

</style>
