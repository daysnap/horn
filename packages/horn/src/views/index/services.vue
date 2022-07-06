
<template>
  <hor-view
    :use-nav-bar="false"
    :left-arrow="false">
    服务
  </hor-view>
</template>

<route>{ meta: { title: '服务', icon: 'smile-comment-o' } }</route>

<script setup lang="ts">
  defineOptions({ name: 'index-services' })
  const arrData = computed(() => {
    const data = import.meta.glob(`../../../node_modules/@daysnap/horn-jssdk/src/**/*.md`)
    console.log('data => ', data)
    return Object.keys(data).map(item => {
      return item.substring(item.indexOf('@daysnap/horn-jssdk/src') + 1)
    })
  })

  console.log('arrData => ', arrData.value)
</script>

<style lang="scss" scoped>

</style>
