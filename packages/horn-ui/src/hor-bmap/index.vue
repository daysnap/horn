<template>
  <div class="hor-bmap">
    <span>hor-bmap</span>
  </div>
</template>

<script setup lang="ts">
  import { horBmapProps } from './types'

  defineOptions({ name: 'HorBmap' })
  // 如果定义属性 这里传 horBmapProps， 在 types 里完善类型
  defineProps(horBmapProps)
</script>

<style lang="scss">
  @import '../styles/define.scss';
</style>
