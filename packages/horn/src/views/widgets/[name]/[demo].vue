<template>
  <hor-view :title="humps.pascalize(name)">
    <hor-skeleton :error="refError" :error-btn-visible="false" v-if="refError" />
    <hor-hook v-else />
  </hor-view>
</template>

<route>{ meta: { depth: 3 } }</route>

<script setup lang="ts">
  import humps from 'humps'
  import { HorSkeleton } from '@daysnap/horn-ui'

  const props = defineProps<{
    name: string
    demo: string
  }>()
  const refError = ref<any>()
  const HorHook = defineAsyncComponent(() =>
    import(`../../../../node_modules/@daysnap/horn-ui/src/${props.name}/demo/${props.demo}`).catch(
      (err) => (refError.value = err),
    ),
  )
</script>
