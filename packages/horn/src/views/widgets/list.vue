
<template>
  <p>hor-cell</p>
  <br>
  <button @click="$router.push('/widgets/details')">去详情</button>
  <input type="text" v-model="name">
  <br>
  <p>name: {{ name }}</p>
</template>

<route>{ meta: { title: 'hor-cell', keepAlive: true } }</route>

<script setup lang="ts">
  defineOptions({ name: 'widgets-list' })
  const name = ref('')
</script>

<style lang="scss" scoped>

</style>