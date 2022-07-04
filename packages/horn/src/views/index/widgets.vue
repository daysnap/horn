
<template>
  <hor-view
    :use-nav-bar="false"
    :left-arrow="false">
    <van-grid 
      :column-num="3" 
      square>
      <van-grid-item 
        v-for="value in arrComponents" 
        :key="value" 
        icon="photo-o"
        :text="value" 
      />
    </van-grid>
  </hor-view>
</template>

<route>{ meta: { title: '部件', icon: 'apps-o', depth: 1 } }</route>

<script setup lang="ts">

  import * as HorUi from '@daysnap/horn-ui'

  defineOptions({ name: 'index-widgets' })

  const arrComponents = computed(() => {
    return Object.keys(HorUi).filter(item => item.startsWith('Hor'))
  })

</script>

<style lang="scss" scoped>

</style>
