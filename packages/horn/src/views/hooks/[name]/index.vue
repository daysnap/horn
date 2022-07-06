<template>
  <hor-view :title="humps.pascalize(name)">
    <hor-skeleton :error="refError" :error-btn-visible="false" v-if="refError" />
    <hor-hook calss="content" v-else />
  </hor-view>
</template>

<route>{ meta: { depth: 2 } }</route>

<script setup lang="ts">
  import humps from 'humps'

  const props = defineProps<{ name: string }>()
  const refError = ref<any>()
  const HorHook = defineAsyncComponent(() =>
    import(
      `../../../../node_modules/@daysnap/horn-use/src/${humps.camelize(props.name)}/index.md`
    ).catch((err) => (refError.value = err)),
  )
</script>
