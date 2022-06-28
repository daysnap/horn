
<template>

</template>

<script lang="ts">
  // import { defineComponent } from 'vue'

  export default defineComponent({
    setup () {
      const isContentShown = ref(false)
      const open = (s: { s: string }) => (isContentShown.value = true)
      return {
        isContentShown,
        open
      }
    }
  })

</script>

<style lang="scss" scoped>

</style>
