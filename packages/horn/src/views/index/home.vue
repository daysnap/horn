
<template>
  <hor-view
    :use-nav-bar="false"
    :left-arrow="false">
    首页首页首页首页首页首页首页首页首页首页首页首页首页首页
    首页
    首页首页首页首页首页首页首页首页首页首页首页首页首页首页
    首页首页首页首页首页首页首页首页首页首页首页首页首页首页
    首页首页首页首页首页首页首页首页首页首页首页首页首页首页
    首页首页首页首页首页首页首页首页首页首页首页首页首页首页
    首页首页首页首页首页首页首页首页首页首页首页首页首页首页
    首页首页首页首页首页首页首页首页首页首页首页首页首页首页
    首页首页首页首页首页首页首页首页首页首页首页首页首页首页
    首页首页首页首页首页首页首页首页首页首页首页首页首页首页
    首页
    首页
    首页
    首页
    首页
    首页
    首页
    首页
  </hor-view>
</template>

<route>{ meta: { title: '首页', icon: 'home-o', depth: 1  } }</route>

<script setup lang="ts">
  import { useKeepAliveIncludes } from '@daysnap/horn-use'

  defineOptions({ name: 'index-home' })
  useKeepAliveIncludes()
</script>

<style lang="scss" scoped>

</style>
