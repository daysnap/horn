<template>
  <hor-view class="setting">
    <hor-cell @click="handlePicker" label="选择城市" value="" direction="row"></hor-cell>
    <hor-picker ref="refHorPicker"></hor-picker>
  </hor-view>
</template>

<route>{ meta: { title: '设置', depth: 2 } }</route>

<script setup lang="ts">
  import { HorPickerInstance } from '@daysnap/horn-ui'
  const refHorPicker = ref<HorPickerInstance>()
  const handlePicker = () => {
    refHorPicker.value?.show()
  }
</script>

<style lang="scss" scoped>
  @import 'src/assets/scss/define';
  .setting {
    z-index: 9;
  }
</style>
