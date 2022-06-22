
<template>
  <van-popup></van-popup>
  <van-button>312321</van-button>
  <van-field :label="d"/>
  <VanButton>12312</VanButton>
</template>

<script setup lang="ts">

  import { Popup as VanPopup, Picker as VanPicker, Button as VanButton } from 'vant'

  const d: string = 'ss'

  defineOptions({
    name: 'CpaPicker',
  })


  const show = () => {

  }

  defineExpose({

  })

</script>

<style lang="scss" scoped>
  @import "../styles/define";

</style>
