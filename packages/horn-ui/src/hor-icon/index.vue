<template>
  <van-icon
    :dot="dot"
    :tag="tag"
    :name="computedIcon.name"
    :size="size"
    :badge="badge"
    :color="color"
    :badge-props="badgeProps"
    :class-prefix="computedIcon.classPrefix"
  />
</template>

<script setup lang="ts">
  import { horIconProps } from './types'
  import { computed } from 'vue'

  defineOptions({ name: 'HorIcon' })
  // 如果定义属性 这里传 horIconProps， 在 types 里完善类型
  const props = defineProps(horIconProps)

  const computedIcon = computed(() => {
    const [classPrefix, ...rest] = props.name.split('-')
    if (classPrefix === 'hor') {
      // hor-icon
      return { classPrefix: `hor-icon`, name: rest.join('-') }
    }
    if (classPrefix === 'icon') {
      // 业务 icon
      return { classPrefix: `icon`, name: rest.join('-') }
    }
    return { classPrefix: '', name: props.name }
  })
</script>

<style lang="scss">
  @import '../styles/define.scss';
  @import './iconfont';
</style>
