<template>
  <hor-view class="setting">
    <hor-cell label="" value=""></hor-cell>
  </hor-view>
</template>

<route>{ meta: { title: '设置', depth: 2 } }</route>

<script setup lang="ts"></script>

<style lang="scss" scoped>
  @import 'src/assets/scss/define';
  .setting {
    z-index: 9;
  }
</style>
