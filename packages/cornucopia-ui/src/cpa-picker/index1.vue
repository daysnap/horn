
<template>
  <van-popup
    round
    @update:show="hide"
    :show="visible"
    position="bottom"
  >
    <van-picker
      @cancel="hide"
      @confirm="confirm"
    ></van-picker>
  </van-popup>
</template>

<script setup lang="ts">
  // import { Popup as VanPopup, Picker as VanPicker, Button as VanButton } from 'vant'
  import { ref } from 'vue'
  import { } from 'vant'

  defineOptions({
    name: 'CpaPicker',
  })

  let resolve: (res?: any) => void
  let reject: (reason?: any) => void

  const visible = ref(false)

  interface ShowOptions {
    beforeClose?: (action: string) => boolean | Promise<boolean>
  }

  let options: ShowOptions

  const show = <T = any>(opt: ShowOptions) => {
    options = opt
    return new Promise<T>((_resolve, _reject) => {
      // 处理某事
      visible.value = true
      resolve = _resolve
      reject = _reject
    })
  }

  const confirm = async () => {
    const result = await options?.beforeClose?.('confirm') ?? true
    if (!result) {
      return
    }
    console.log('22')
    resolve?.()
    visible.value = false
  }

  const hide = async () => {
    const result = await options?.beforeClose?.('cancel') ?? true
    if (!result) {
      return
    }
    console.log('11')
    reject?.()
    visible.value = false
  }

  export interface CpaPickerInstance {
    show: typeof show
    hide: typeof hide
  }

  defineExpose<CpaPickerInstance>({
    show,
    hide
  })

</script>

<style lang="scss" scoped>
  @import "../styles/define";

</style>
