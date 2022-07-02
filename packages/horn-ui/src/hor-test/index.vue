<template>
  <div class="hor-test">
    hor-test
  </div>
</template>

<script setup lang="ts">
  import { testProps, TestProps } from './types'
  defineOptions({ name: 'HorTest' })
  defineProps()
</script>

<style lang="scss" scoped>
  @import "../styles/define.scss";
</style>
