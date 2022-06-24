
<template>
  <van-button @click="handleClick">主要按钮</van-button>
  <van-field
    :label="label"
  ></van-field>
  <van-field
    label="姓名"
  ></van-field>
  <cpa-picker ref="refCpaPicker"/>
</template>

<script setup lang="ts">
  import { CpaPicker, CpaPickerInstance } from '@daysnap/cornucopia-ui'
  console.log('CpaPicker => ', CpaPicker.name)
  let label = '姓名'
  const refCpaPicker = ref<CpaPickerInstance>()
  const handleClick = () => {
    refCpaPicker.value?.show({
      value: [
        {
          value: '333',
          text: '温州',
        }
      ],
      columns: [
        { text: '杭州', value: '111' },
        { text: '宁波', value: '222' },
        { text: '温州', value: '333' },
      ],
      beforeClose: (action) => {
        console.log('action => ', action)
        return action === 'confirm'
      },
    }).then((res) => {

    }).catch(err => {

    })
  }
</script>

<style lang="scss" scoped>

</style>
