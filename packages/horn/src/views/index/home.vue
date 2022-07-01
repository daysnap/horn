
<template>
  <p>home</p>
  <input type="text" v-model="age">
  <br>
  <p>age => {{ age }}</p>
  <button @click="$router.push('/widgets/list')">去列表</button>
</template>

<route>{ meta: { title: '首页', icon: 'home-o' } }</route>

<script setup lang="ts">
  import { useKeepAliveIncludes } from '@daysnap/horn-use'

  useKeepAliveIncludes()

  const age = ref<string>('')
  defineOptions({
    name: 'index-home'
  })
</script>

<style lang="scss" scoped>

</style>
