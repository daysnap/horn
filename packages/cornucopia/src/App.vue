
<template>
  <van-button>主要按钮</van-button>
  <van-field :label="label"></van-field>
  <cpa-picker/>
</template>

<script setup lang="ts">
  import { CpaPicker } from '@daysnap/cornucopia-ui'
  console.log('CpaPicker => ', CpaPicker.name)

  const label: any = 'dd'
  const data = () => {
    console.log('dddasdadadasdadadaddas')
    return Object.assign({ a: 1, b: 2 }, { x: 1, s: 2 })
  }
  console.log('data => ', data())
</script>

<style lang="scss" scoped>

</style>
