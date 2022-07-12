<template>
  <hor-view :title="humps.pascalize(name)">
    <hor-skeleton :error="refError" :error-btn-visible="false" v-if="refError" />
    <widget-content v-else />
  </hor-view>
</template>

<route>{ meta: { depth: 3 } }</route>

<script setup lang="ts">
  import humps from 'humps'

  const props = defineProps<{
    name: string
    demo: string
  }>()
  const refError = ref<any>()
  const WidgetContent = defineAsyncComponent(() =>
    import(
      `../../../../node_modules/@daysnap/horn-ui/src/${props.name}/demos/${props.demo}.vue`
    ).catch((err) => (refError.value = err)),
  )
</script>
