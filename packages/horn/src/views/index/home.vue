<template>
  <hor-view :use-nav-bar="false" :left-arrow="false">
    <br />
    <hor-icon name="hor-keyboard" />
    <br />
    <van-button @click="$router.push('/setting')">设置</van-button>

    {{ t('name') }}

    <br />

    首页首页首页首页首页首页首页首页首页首页首页首页首页首页 首页
    首页首页首页首页首页首页首页首页首页首页首页首页首页首页
    首页首页首页首页首页首页首页首页首页首页首页首页首页首页
    首页首页首页首页首页首页首页首页首页首页首页首页首页首页
    首页首页首页首页首页首页首页首页首页首页首页首页首页首页
    首页首页首页首页首页首页首页首页首页首页首页首页首页首页
    首页首页首页首页首页首页首页首页首页首页首页首页首页首页
    首页首页首页首页首页首页首页首页首页首页首页首页首页首页
    首页首页首页首页首页首页首页首页首页首页首页首页首页首页 首页 首页 首页 首页 首页 首页 首页 首页
  </hor-view>
</template>

<route>{ meta: { title: '首页', icon: 'home-o', depth: 1  } }</route>

<script setup lang="ts">
  import { useKeepAliveIncludes } from '@daysnap/horn-use'
  import { HorIcon } from '@daysnap/horn-ui'

  defineOptions({ name: 'index-home' })
  useKeepAliveIncludes()

  const { t } = useI18n()
</script>

<style lang="scss" scoped></style>
