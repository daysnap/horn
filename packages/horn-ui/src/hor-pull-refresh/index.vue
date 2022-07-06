<template>
    <van-pull-refresh
      v-model="refreshing"
      pulling-text="↓ 下拉即可刷新"
      loosing-text="↑ 释放即可刷新"
      loading-text="加载中..."
      :success-text="refreshErrorText || '刷新成功'"
      @refresh="handleRefresh"
    >
      <slot></slot>
    </van-pull-refresh>
</template>

<script setup lang='ts'>
import { ref , useSlots } from 'vue';

  
const refreshing = ref(false);
const refreshErrorText = ref('');
const emit = defineEmits(['refresh']);
const defaultSlot = useSlots();
const handleRefresh = ()=>{
  emit('refresh' , ( err: string) => {
      refreshErrorText.value = err || ''
      refreshing.value = false;
      // console.log((defaultSlot.default?.()[0]))
      // defaultSlot.default?.()
  })
}
</script>

<style lang='scss' scoped>

</style>