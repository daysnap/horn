<template>
  <router-view v-slot="{ Component }">
    <transition :name="transitionName">
      <keep-alive max="10" :include="includes" exclude="index">
        <component :is="Component" />
      </keep-alive>
    </transition>
  </router-view>
</template>

<script setup lang="ts">
  import { useKeepAliveIncludes, useTransitionNameByDepth } from '@daysnap/horn-use'

  const [includes] = useKeepAliveIncludes(false)

  const transitionName = useTransitionNameByDepth({
    enterClass: 'slide-left',
    leaveClass: 'slide-right',
  })
</script>

<style lang="scss">
  @import 'src/assets/scss/common.scss';
  html,
  body {
    @extend %w100;
    @extend %h100;
    background-color: $color-background;
  }
  #app {
    @extend %w100;
    @extend %h100;
    @extend %oh;
    font-size: 13px;
  }
  .van-grid-item {
    span {
      @include twno(1);
    }
  }

  .hor-view {
    background-color: $color-background;
  }
</style>
