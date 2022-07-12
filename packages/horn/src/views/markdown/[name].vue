<template>
  <hor-view>
    <hor-skeleton :error-btn-visible="false" :error="refError" v-if="refError" />
    <markdown-content v-else />
  </hor-view>
</template>

<route>{ meta: { title: '详情', depth: 2  } }</route>

<script setup lang="ts">
  const props = defineProps<{
    name: string
  }>()

  const refError = ref<any>()
  const MarkdownContent = defineAsyncComponent(() =>
    import(`./components/${props.name}.md`).catch((err) => (refError.value = err)),
  )
</script>
