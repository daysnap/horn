
<template>
  <router-view v-slot="{ Component, route }">
      <transition :name="transitionName">
    <!-- <keep-alive :include="includes"> -->
          <component :is="Component"/>
    <!-- </keep-alive> -->
      </transition>
  </router-view>
</template>

<script setup lang="ts">

  import { useKeepAliveIncludes, useTransitionNameByDepth } from '@daysnap/horn-use'

  const [ includes ] = useKeepAliveIncludes(false)

  const transitionName = useTransitionNameByDepth({ 
    toClass: 'slide-left',
    fromClass: 'slide-right',
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
  }
</style>