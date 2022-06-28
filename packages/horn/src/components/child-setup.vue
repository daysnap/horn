
<template>

</template>

<script setup lang="ts">
  const isContentShown = ref(false)
  const open = (s: { s: string }) => (isContentShown.value = true)

  defineExpose({
    open,
  })
</script>

<style lang="scss" scoped>

</style>
