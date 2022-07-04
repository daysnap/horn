
<template>
  <hor-view :title="title">
    <hor-skeleton 
      :error="refError"
      :error-btn-visible="false"
      v-if="refError"
    />
    <hor-widget
      calss="content"
      v-else
    />
  </hor-view>
</template>

<route>{ meta: { depth: 2 } }</route>

<script setup lang="ts">
  import humps from 'humps'
  import { HorSkeleton } from '@daysnap/horn-ui'

  const { name } = defineProps<{ name: string }>()
  const refError = ref<any>()
  const HorWidget = defineAsyncComponent(() => 
    import(`../../../node_modules/@daysnap/horn-ui/src/${name}/index.md`)
      .catch(err => refError.value = err)
  )
  const title = computed(() => humps.pascalize(name))
</script>

<style lang="scss" scoped>
  @import "src/assets/scss/define";
  .content{
    padding: 0 16px;
  }
</style>