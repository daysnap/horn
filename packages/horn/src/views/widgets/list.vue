
<template>
  <div class="view-wrap list-wrap">
    <hor-header/>
    <p>hor-cell</p>
    <br>
    <button @click="$router.push('/widgets/details')">去详情1</button>
    <br>
    <button @click="$router.replace('/widgets/details')">去详情replace</button>
    <input type="text" v-model="name">
    <br>
    <p>name1: {{ name }}</p>
  </div>
</template>

<route>{ meta: { title: 'hor-cell', depth: 2 } }</route>

<script setup lang="ts">
  import { useKeepAliveIncludes } from '@daysnap/horn-use'
  defineOptions({ name: 'widgets-list' })
  const name = ref('')
  useKeepAliveIncludes()

  onActivated(() => {
    console.log('激活')
  })

  onDeactivated(() => {
    console.log('卸载')
  })

  onUnmounted(() => {
    console.log('销毁')
  })
  console.log('111')
</script>

<style lang="scss" scoped>
  .list-wrap{
    background-color: red;
  }
</style>