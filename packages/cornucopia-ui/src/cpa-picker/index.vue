
<template>
  <van-popup></van-popup>
  <van-button/>
  <van-field :label="d"/>
  <Button type="prr"></Button>
</template>

<script setup lang="ts">

  import { Popup as VanPopup, Picker as VanPicker, Button } from 'vant'

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
