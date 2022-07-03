
<template>
  <hor-view
    :use-nav-bar="false"
    :left-arrow="false">
    服务
  </hor-view>
</template>

<route>{ meta: { title: '服务', icon: 'smile-comment-o' } }</route>

<script setup lang="ts">
  defineOptions({
    name: 'index-services'
  })
</script>

<style lang="scss" scoped>

</style>
