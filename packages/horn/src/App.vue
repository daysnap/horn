
<template>
  <router-view v-slot="{ Component, route }">
    <!-- <transition name=""> -->
      <keep-alive :include="includeList">
          <component :is="Component"/>
      </keep-alive>
    <!-- </transition> -->
  </router-view>
  <p>includeList: {{ includeList }}</p>
  <p>pageStack: {{ routeStack }}</p>
</template>


<script setup lang="ts">
  import { useRouteStack } from '@daysnap/horn-use'
  const routeStack = useRouteStack()
  const includeList = computed(() => {
    return routeStack.value
      .filter(item => item.meta?.keepAlive && item.name)
      .map(item => item.name!!) as string[]
  })

</script>

<style lang="scss" scoped>
  @import 'src/assets/scss/define.scss';

  .view-wrap{
  }
</style>