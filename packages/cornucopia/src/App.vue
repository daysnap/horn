
<template>
  <van-button>主要按钮</van-button>
  <van-field
    :label="label"
  ></van-field>
  <van-field
    label="姓名"
  ></van-field>
  <cpa-picker/>
</template>

<script setup lang="ts">
  import { CpaPicker } from '@daysnap/cornucopia-ui'
  console.log('CpaPicker => ', CpaPicker.name)
  let label = '姓名'
</script>

<style lang="scss" scoped>

</style>
