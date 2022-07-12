<template>
  <hor-view :use-nav-bar="false" :left-arrow="false">
    <hor-cell-group class="mt10" v-for="(menus, index) in menuGroups" :key="index">
      <hor-cell
        v-for="(item, i) in menus"
        :key="i"
        v-bind="item"
        arrow
        @click="handleTransfer(item)"
      ></hor-cell>
    </hor-cell-group>
  </hor-view>
</template>

<route>{ meta: { title: '首页', icon: 'home-o', depth: 1  } }</route>

<script setup lang="ts">
  import { useKeepAliveIncludes, useTransfer } from '@daysnap/horn-use'
  import { version } from '../../../package.json'

  defineOptions({ name: 'index-home' })
  useKeepAliveIncludes()

  const { t } = useI18n()
  const handleTransfer = useTransfer()
  const menuGroups = computed(() => [
    [
      { label: t('scan'), icon: 'scan' },
      { label: t('github'), icon: 'link-o' },
    ],
    [
      { label: t('version'), icon: 'hor-version', value: version, path: '/markdown/version' },
      { label: t('about'), icon: 'info-o', path: '/markdown/about' },
      { label: t('setting'), icon: 'setting-o', path: '/setting' },
    ],
  ])
</script>

<i18n>
zh-CN:
  scan: 扫一扫
  github: Github
  setting: 设置
  version: 版本
  about: 关于我们
en-US:
  scan: Scan
  github: Github
  setting: Setting
  version: Version
  about: About
</i18n>

<style lang="scss" scoped>
  .mt10 {
    margin-top: 10px;
  }
</style>
