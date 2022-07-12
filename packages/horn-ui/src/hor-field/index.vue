<template>
  <div class="hor-field">
    <span>hor-field</span>
  </div>
</template>

<script setup lang="ts">
  import { horFieldProps } from './types'

  defineOptions({ name: 'HorField' })
  // 如果定义属性 这里传 horFieldProps， 在 types 里完善类型
  defineProps(horFieldProps)
</script>

<style lang="scss">
  @import '../styles/define.scss';
</style>
