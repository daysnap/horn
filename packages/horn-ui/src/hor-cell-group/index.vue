<template>
  <div class="hor-cell-group">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
  import { horCellGroupProps } from './types'

  defineOptions({ name: 'HorCellGroup' })
  // 如果定义属性 这里传 horCellGroupProps， 在 types 里完善类型
  defineProps(horCellGroupProps)
</script>

<style lang="scss">
  @import '../styles/define.scss';

  @include b(cell-group) {
    @extend %bw05;
    @extend %bwb;
    @extend %bwt;

    .#{$namespace}-cell {
      &:last-child {
        @extend %bwbn;
      }
      &:after {
        left: j(16);
        right: j(16);
      }
    }
  }
</style>
