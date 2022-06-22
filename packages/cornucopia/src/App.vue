
<template>
  <van-button>主要按钮</van-button>
  <cpa-picker/>
</template>

<script setup lang="ts">
  // import CpaPicker from '@daysnap/cornucopia-ui/src/cpa-picker/index.vue'
  import { CpaPicker } from '@daysnap/cornucopia-ui'
  console.log('CpaPicker => ', CpaPicker)

  const data = () => {
    console.log('dddasdadadasdadadaddas')
    return Object.assign({ a: 1, b: 2 }, { x: 1, s: 2 })
  }
  console.log('data => ', data())
</script>

<style lang="scss" scoped>

</style>
