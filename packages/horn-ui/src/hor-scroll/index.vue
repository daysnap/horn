<template>
  <hor-pull-refresh class="hor-scroll" @refresh="emit('refresh', $event)" :refList="refList">
    <hor-list :finished="finished" ref="refList" @load="emit('load', $event)">
      <slot></slot>
    </hor-list>
  </hor-pull-refresh>
</template>

<script setup lang='ts'>
import { HorPullRefresh } from '../hor-pull-refresh';
import { HorList } from '..//hor-list';
import { ref } from 'vue';
const refList = ref();
defineProps({
  finished: {
    type: Boolean,
    default: false,
  }
})
const emit = defineEmits(['refresh', 'load'])
</script>

<style lang='scss' scoped>
@import "../styles/define.scss";

@include b(scroll) {
  @extend %df1;
  @extend %h100;
  @extend %oya;
}
</style>