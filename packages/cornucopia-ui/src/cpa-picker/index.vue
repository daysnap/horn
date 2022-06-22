
<template>
  <van-button1>哈哈</van-button1>
</template>

<script setup lang="ts">
  import { Button as VanButton1 } from 'vant'
  import { default } from 'unplugin-vue-define-options/vite'

  const data = () => {
    console.log('DDDDDDXXXXXXXX')
    return Object.assign({ a: 1, b: 2 }, { x: 1, s: 2 })
  }
  console.log('data => ', data())
</script>

<style lang="scss" scoped>

</style>
