<template>
  <hor-view :title="humps.pascalize(name)">
    <hor-skeleton :error-btn-visible="false" :error="refError" v-if="refError" />
    <service-content v-else />
  </hor-view>
</template>

<route>{ meta: { depth: 2 } }</route>

<script setup lang="ts">
  import humps from 'humps'

  const props = defineProps<{
    name: string
    group: string
  }>()

  const refError = ref<any>()
  const ServiceContent = defineAsyncComponent(() =>
    import(
      `../../../../node_modules/@daysnap/horn-jssdk/src/${props.group}/${props.name}/index.md`
    ).catch((err) => (refError.value = err)),
  )
</script>
