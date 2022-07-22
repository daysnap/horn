<template>
  <div class="hor-check-list-popup">
    <span>hor-check-list-popup</span>
  </div>
</template>

<script setup lang="ts">
  import { horCheckListPopupProps } from './types'

  defineOptions({ name: 'HorCheckListPopup' })
  // 如果定义属性 这里传 horCheckListPopupProps， 在 types 里完善类型
  defineProps(horCheckListPopupProps)
</script>

<style lang="scss">
  @import '../styles/define.scss';
</style>
