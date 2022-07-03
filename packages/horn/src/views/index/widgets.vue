
<template>
  <div>
    <hor-header :left-arrow="false"/>
    <p>123123123</p>
    <p>123123123</p>
    <p>123123123</p>
    <p>123123123</p>
    <p>123123123</p>
    <p>123123123</p>
    <p>123123123</p>
    <p>123123123</p>
    <br/>
    <br/>
    <van-button @click="$router.push('/widgets/list')">去列表</van-button>
  </div>
</template>

<route>{ meta: { title: '部件', icon: 'apps-o', depth: 1 } }</route>

<script setup lang="ts">
  import { useKeepAliveIncludes } from '@daysnap/horn-use'

  defineOptions({ name: 'index-widgets' })
  // useKeepAliveIncludes()

</script>

<style lang="scss" scoped>

</style>
