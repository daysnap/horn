
<template>
  <p>hor-cell</p>
  <br>
  <button @click="$router.push('/widgets/details')">去详情</button>
  <br>
  <button @click="$router.replace('/widgets/details')">去详情replace</button>
  <input type="text" v-model="name">
  <br>
  <p>name1: {{ name }}</p>
</template>

<route>{ meta: { title: 'hor-cell', depth: 2 } }</route>

<script setup lang="ts">
  import { useKeepAliveIncludes } from '@daysnap/horn-use'
  defineOptions({ name: 'widgets-list' })
  const name = ref('')
  useKeepAliveIncludes()
</script>

<style lang="scss" scoped>

</style>