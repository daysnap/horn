<template>
  <van-nav-bar
    fixed
    placeholder
    @click-right="$emit('click-right', $event)"
    @click-left="handleClickLeft"
  >
    <template #left>
      <slot name="left">
        <van-icon v-if="leftArrow" name="arrow-left" size="18"/>
      </slot>
    </template>
    <template #title>
      <span v-if="!title" v-once v-html="$route.meta?.title"></span>
      <span v-else v-html="title"></span>
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
  const props = defineProps(horHeaderProps)
  const emits = defineEmits(['click-left', 'click-right'])
  
  const handleClickLeft = () => {
    emits('click-left')
    if (props.useLeftEvent) {
      window.history.back()
    }
  }
</script>