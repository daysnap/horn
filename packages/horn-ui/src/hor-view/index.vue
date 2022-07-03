<template>
  <div class="hor-view">
    <slot name="nav-bar">
      <hor-header
        @click-right="$emit('click-right')"
        @click-left="$emit('click-left')"
      >
        <template #left>
          <slot name="left"></slot>
        </template>
        <template #title>
          <slot name="title"></slot>
        </template>
        <template #right>
          <slot name="right"></slot>
        </template>
      </hor-header>
    </slot>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
  import { HorHeader } from '../hor-header'
  import { horViewProps, HorViewProps } from './types'

  defineOptions({ name: 'HorView' })
  // 如果定义属性 这里传 horViewProps， 在 types 里完善类型
  defineProps(horViewProps)
  defineEmits(['click-left', 'click-right'])

</script>

<style lang="scss" scoped>
  @import "../styles/define.scss";
</style>
