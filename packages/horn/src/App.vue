
<template>
  <router-view v-slot="{ Component, route }">
    <!-- <transition name=""> -->
      <keep-alive :include="includeList">
          <component :is="Component"/>
      </keep-alive>
    <!-- </transition> -->
  </router-view>
  <p>includeList: {{ includeList }}</p>
  <p>pageStack: {{ pageStack }}</p>
</template>


<script setup lang="ts">

  import { RouteLocationNormalizedLoaded } from 'vue-router'

  const pageStack = ref<RouteLocationNormalizedLoaded[]>([])
  const includeList = computed(() => {
    return pageStack.value
      .filter(item => item.meta?.keepAlive && item.name)
      .map(item => item.name!!) as string[]
  })
  const route = useRoute()
  // A -> B  => to: B, from: A, pageStack: [A, B]
  // B -> C  => to: C, from: B, pageStack: [A, B, C]
  // C -> B  => to: B, from: C, pageStack: [A, B]
  // B -> A  => to: A, from: B, pageStack: [A]
  watch(
    () => ({ ...route }),
    (to, from) => {
      const toIndex = pageStack.value.findIndex(item => item.fullPath === to.fullPath)
      if (toIndex === -1) {
        const { name, meta, fullPath } = to
        pageStack.value.push({ name, meta, fullPath } as any)
      }
      const fromIndex = pageStack.value.findIndex(item => item.fullPath === from.fullPath)
      if (toIndex > -1 && fromIndex > -1) {
        // 返回
        pageStack.value = pageStack.value.slice(0, fromIndex)
      }
    },
    { deep: true }
  )
  

</script>

<style lang="scss" scoped>
  @import 'src/assets/scss/define.scss';

  .view-wrap{
  }
</style>