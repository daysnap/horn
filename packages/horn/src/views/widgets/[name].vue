
<template>
  <hor-view :title="title">
    <p>props {{ props }}</p>
    <hor-cell-md></hor-cell-md>
  </hor-view>
</template>

<route>{ meta: { depth: 2 } }</route>

<script setup lang="ts">
  import humps from 'humps'
  import HorCellMd from '@daysnap/horn-ui/src/hor-cell/index.md'

  const props = defineProps<{ name: string }>()
  
  const title = computed(() => humps.pascalize(props.name))
</script>

<style lang="scss" scoped>
  @import "src/assets/scss/define";
</style>