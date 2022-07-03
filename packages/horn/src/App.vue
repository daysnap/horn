
<template>
  <router-view v-slot="{ Component }">
    <transition :name="transitionName">
      <keep-alive max="10" :include="includes">
        <component :is="Component"/>
      </keep-alive>
    </transition>
  </router-view>
</template>

<script setup lang="ts">

  import { useKeepAliveIncludes, useTransitionNameByDepth } from '@daysnap/horn-use'

  const [ includes ] = useKeepAliveIncludes(false)

  const transitionName = useTransitionNameByDepth({ 
    enterClass: 'slide-left',
    leaveClass: 'slide-right',
  })

</script>

<style lang="scss">
  @import 'src/assets/scss/common.scss';
  html,
  body{
    @extend %w100;
    @extend %h100;
  }
  #app {
    @extend %w100;
    @extend %h100;
    @extend %oh;
  }
  .view-wrap{
    @extend %pa;
    @extend %w100;
    @extend %h100;
    @extend %t0;
    @extend %b0;
    bottom: 40%;
  }
</style>