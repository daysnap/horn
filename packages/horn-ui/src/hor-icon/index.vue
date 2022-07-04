<template>
  <div class="hor-icon">
    hor-icon
  </div>
</template>

<script setup lang="ts">
  import { horIconProps, HorIconProps } from './types'
  
  defineOptions({ name: 'HorIcon' })
  // 如果定义属性 这里传 horIconProps， 在 types 里完善类型
  defineProps()
</script>

<style lang="scss" scoped>
  @import "../styles/define.scss";
</style>
