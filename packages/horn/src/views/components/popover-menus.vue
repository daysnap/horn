<template>
  <van-popover
    class="popover"
    v-model:show="popoverVisible"
    placement="bottom-end"
    theme="dark"
    @select="handleTransfer"
    :offset="[10, 10]"
    :actions="popoverActions"
  >
    <template #reference>
      <hor-icon name="ellipsis" size="24" />
    </template>
  </van-popover>
  <p>{{ t('scan') }}</p>
</template>

<script setup lang="ts">
  import { useTransfer } from '@daysnap/horn-use'

  const { t, availableLocales, locale, messages } = useI18n()

  const popoverVisible = ref(false)
  const handleTransfer = useTransfer()
  const popoverActions = ref([
    { text: t('scan'), icon: 'scan' },
    { text: t('github'), icon: 'link-o' },
    {
      text: t('i18n'),
      icon: 'setting-o',
      fn: () => {
        console.log(availableLocales, locale, messages)
        locale.value =
          availableLocales[(availableLocales.indexOf(locale.value) + 1) % availableLocales.length]
      },
    },
    { text: t('setting'), icon: 'setting-o', path: '/setting' },
  ])
</script>

<i18n>
{
  "zh": {
    "scan": "扫一扫",
    "github": "Github",
    "i18n": "English",
    "setting": "设置",
  },
  "en": {
    "scan": "Scan",
    "github": "Github",
    "i18n": "中文",
    "setting": "Set up",
  },
}
</i18n>

<style lang="scss">
  .popover {
    .van-popover__arrow {
      right: 10px !important;
    }
  }
</style>
