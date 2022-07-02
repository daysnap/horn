<template>
  <van-nav-bar
    fixed
    placeholder
    @click-left="$emit('click-right', $event)"
  >
    <template #left>
      <slot name="left">
        <van-icon v-if="leftArrow" name="arrow-left" size="18"/>
      </slot>
    </template>
    <template #title>
      <span>{{ title ?? $route.meta?.title }}</span>
    </template>
    <template #right>
      <slot name="right"></slot>
    </template>
  </van-nav-bar>
</template>

<script setup lang="ts">
  import { horHeaderProps } from './types'
  defineOptions({ name: 'HorHeader' })
  // 如果定义属性 这里传 headerProps， 在 types 里完善类型
  defineProps(horHeaderProps)
  defineEmits(['click-left', 'click-right'])
</script>

<style lang="scss" scoped>
  @import "../styles/define.scss";
</style>
