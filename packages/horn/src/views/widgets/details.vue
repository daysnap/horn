
<template>
  <div class="view-wrap">
    <p>hor-cell</p>
    <br>
    <button @click="$router.replace('/widgets/list')">返回</button>
  </div>
</template>

<route>{ meta: { title: 'hor-cell', depth: 3 } }</route>

<script setup lang="ts">
  defineOptions({ name: 'widgets-details' })
</script>

<style lang="scss" scoped>
  .view-wrap{
    background-color: burlywood;
  }
</style>