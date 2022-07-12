<template>
  <hor-view>
    <div class="c-h10"></div>
    <hor-cell
      v-for="(item, index) in menus"
      :key="index"
      @click="handleTransfer(item)"
      v-bind="item"
    ></hor-cell>

    <van-action-sheet
      cancel-text="取消"
      close-on-click-action
      :actions="actions"
      @select="handleChangeLanguage"
      v-model:show="visible"
    />
  </hor-view>
</template>

<route>{ meta: { title: '设置', depth: 2 } }</route>

<script setup lang="ts">
  import { useTransfer } from '@daysnap/horn-use'
  import { Locale } from '@daysnap/horn-ui'

  const { t, locale } = useI18n()
  const handleTransfer = useTransfer()
  const menus = computed(() => [
    {
      label: t('language.label'),
      value: t('language.value'),
      arrow: true,
      fn: () => {
        visible.value = true
      },
    },
  ])

  const actions = [
    { name: '中文', value: 'zh-CN' },
    { name: 'English', value: 'en-US' },
  ]
  const visible = ref(false)
  const handleChangeLanguage = (item: typeof actions[0]) => {
    locale.value = item.value
    Locale.use(item.value)
    window.localStorage.setItem(`$$LOCALE`, item.value)
  }
</script>

<i18n>
zh-CN:
  language:
    label: 语言
    value: 中文
en-US:
  language:
    label: Language
    value: English
</i18n>

<style lang="scss" scoped>
  @import 'src/assets/scss/define';
</style>
