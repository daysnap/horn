<template>
  <van-list
    class="hor-list"
    ref="refList"
    v-model:loading="loading"
    :finished="props.finished"
    finished-text="没有更多了"
    loading-text="加载中，请稍后..."
    v-model:error="error"
    :error-text="errorText"
    @load="handleLoad"
  >
    <slot></slot>
  </van-list>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { horListProps } from './types'

  defineOptions({
    name: 'HorList',
  })
  const props = defineProps(horListProps)

  const refList = ref()
  const loading = ref(false)
  const error = ref(false)
  const errorText = ref('')
  const emits = defineEmits(['load'])
  const handleLoad = () => {
    emits('load', (err?: string) => {
      error.value = !!err
      errorText.value = err ? `${err},请点击重新加载` : ''
      loading.value = false
    })
  }
  const resetError = () => {
    error.value = false
    errorText.value = ''
    refList.value.check()
  }
  defineExpose({
    resetError,
  })
</script>

<style lang="scss" scoped></style>
