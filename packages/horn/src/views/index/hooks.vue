<template>
  <hor-view :use-nav-bar="false" :left-arrow="false">
    <hor-cell
      v-for="(name, index) in arrData"
      :key="index"
      :label="name"
      @click="$router.push(`/hooks/${humps.decamelize(name, { separator: '-' })}`)"
    ></hor-cell>
  </hor-view>
</template>

<route>{ meta: { title: 'Hooks', icon: 'aim' } }</route>

<script setup lang="ts">
  import humps from 'humps'
  import * as HorUse from '@daysnap/horn-use'

  defineOptions({ name: 'index-hooks' })

  const arrData = computed(() => {
    return Object.keys(HorUse).filter((item) => item.startsWith('use'))
  })
</script>
