<template>
  <hor-view :title="humps.pascalize(name)">
    <hor-skeleton :error-btn-visible="false" :error="refError" v-if="refError" />
    <hor-widget v-else />
  </hor-view>
</template>

<route>{ meta: { depth: 2 } }</route>

<script setup lang="ts">
  import humps from 'humps'

  const props = defineProps<{ name: string }>()
  const refError = ref<any>()
  const HorWidget = defineAsyncComponent(() =>
    import(`../../../../node_modules/@daysnap/horn-ui/src/${props.name}/index.md`).catch(
      (err) => (refError.value = err),
    ),
  )
</script>
