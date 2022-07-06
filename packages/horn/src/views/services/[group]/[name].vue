<template>
  <hor-view :title="name">
    <hor-skeleton 
      :error-btn-visible="false"
      :error="refError"
      v-if="refError"
    />
    <hor-service v-else/>
  </hor-view>
</template>

<route>{ meta: { depth: 2 } }</route>

<script setup lang="ts">
  const { name, group } = defineProps<{
    name: string
    group: string
  }>()

  const refError = ref<any>()
  const HorService = defineAsyncComponent(() => 
    import (`../../../../node_modules/@daysnap/horn-jssdk/src/${group}/${name}/index.md`)
      .catch(err => refError.value = err)
  )
</script>