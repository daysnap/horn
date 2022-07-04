<template>
  <div class="hor-view">
    <slot name="nav-bar" v-if="useNavBar">
      <hor-header
        :use-left-event="useLeftEvent"
        :left-arrow="leftArrow"
        :title="title"
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
  import { horViewProps } from './types'

  defineOptions({ name: 'HorView' })
  // 如果定义属性 这里传 horViewProps， 在 types 里完善类型
  defineProps(horViewProps)
  defineEmits(['click-left', 'click-right'])
</script>

<style lang="scss" scoped>
  @import "../styles/define.scss";
  
  @include b(view) {
    @extend %h100;
    @extend %oya;
    @extend %df;
    @extend %fdc;
    @extend %df1;
  }
</style>
