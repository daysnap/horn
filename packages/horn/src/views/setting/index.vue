<template>
  <hor-view>
    <div class="c-h10"></div>
    <hor-cell
      v-for="(item, index) in menus"
      :key="index"
      @click="handleTransfer(item)"
      v-bind="item"
    ></hor-cell>

    <p>locale => {{ locale }}</p>
  </hor-view>
</template>

<route>{ meta: { title: '设置', depth: 2 } }</route>

<script setup lang="ts">
  import { useTransfer } from '@daysnap/horn-use'

  const { t, availableLocales, locale, messages } = useI18n()
  const handleTransfer = useTransfer()
  const menus = computed(() => [
    {
      label: t('language.label'),
      value: t('language.value'),
      arrow: true,
      fn: () => {
        console.log(availableLocales, locale, messages)
        locale.value =
          availableLocales[(availableLocales.indexOf(locale.value) + 1) % availableLocales.length]
      },
    },
  ])
</script>

<!-- <i18n>
zh:
  language: 
    label: 语言
    value: 中文
en:
  language: 
    label: Language
    value: English
</i18n> -->

<style lang="scss" scoped>
  @import 'src/assets/scss/define';
</style>
