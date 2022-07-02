
<template>
  <hor-header :left-arrow="false"/>
  <br/>
  <br/>
  <van-button @click="$router.push('/widgets/list')">去列表</van-button>
</template>

<route>{ meta: { title: '首页', icon: 'home-o' } }</route>

<script setup lang="ts">
  import { useKeepAliveIncludes } from '@daysnap/horn-use'

  defineOptions({ name: 'index-home' })
  useKeepAliveIncludes()
</script>

<style lang="scss" scoped>

</style>
