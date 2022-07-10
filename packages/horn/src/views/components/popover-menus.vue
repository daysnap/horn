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
</template>

<script setup lang="ts">
  import { useTransfer } from '@daysnap/horn-use'

  const { t } = useI18n()
  const popoverVisible = ref(false)
  const handleTransfer = useTransfer()
  const popoverActions = computed(() => [
    { text: t('scan'), icon: 'scan' },
    { text: t('github'), icon: 'link-o' },
    { text: t('setting'), icon: 'setting-o', path: '/setting' },
  ])
</script>

<!-- <i18n>
zh:
  scan: 扫一扫
  github: Github
  setting: 设置
en:
  scan: Scan
  github: Github
  setting: 设置
</i18n> -->

<style lang="scss">
  .popover {
    .van-popover__arrow {
      right: 10px !important;
    }
  }
</style>
