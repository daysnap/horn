<template>
  <hor-view :title="humps.pascalize(name)">
    <hor-skeleton :error="refError" :error-btn-visible="false" v-if="refError" />
    <hook-content calss="content" v-else />
  </hor-view>
</template>

<route>{ meta: { depth: 2 } }</route>

<script setup lang="ts">
  import humps from 'humps'

  const props = defineProps<{
    name: string
    demo: string
  }>()
  const refError = ref<any>()
  const HookContent = defineAsyncComponent(() =>
    import(
      `../../../../node_modules/@daysnap/horn-use/src/${props.name}/demo/${props.demo}.vue`
    ).catch((err) => (refError.value = err)),
  )
</script>
