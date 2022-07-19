<template>
  <div class="test">
    <div
      class="dragSort item"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      v-for="(item, index) in arr"
      :key="index"
    >
      请选择图片
      <div :class="['item' + '-' + index, 'drag']">
        {{ item.name }}
      </div>
    </div>
    <div class="dragSort item x" :style="`top: ${y}px; left: ${x}px`"></div>
  </div>
</template>
<script setup lang="ts">
  // import { onMounted } from 'vue'
  import { useDragSort } from '@daysnap/horn-use'
  const arr = [
    {
      name: 'ww',
    },
    {
      name: 'hh',
    },
    {
      name: 'bb',
    },
    {
      name: '99',
    },
    {
      name: '88',
    },
    {
      name: '77',
    },
  ]

  const { x, y, handleTouchEnd, handleTouchMove, handleTouchStart } = useDragSort({})

  // onMounted(() => {
  //   const domList = document.getElementsByClassName('drag')
  //   useDragSort(domList, (startIndex, endIndex) => {})
  // })
</script>
<style lang="scss">
  @import 'src/assets/scss/define';
  .test {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    .item {
      width: j(125);
      height: j(130);
      flex-grow: unset;
      position: relative;
      &.x {
        background-color: #ddd;
        position: absolute;
      }
    }
    .drag {
      width: j(125);
      height: j(130);
      position: absolute;
      top: 0;
      left: 0;
    }
    .item-1 {
      background-color: #00fdfb;
    }
    .item-2 {
      background-color: #ffd200;
    }
    .item-3 {
      background-color: #fb5911;
    }
    .item-4 {
      background-color: #2cf698;
    }
    .item-5 {
      background-color: #5da6fb;
    }
    .item-0 {
      background-color: #9fff10;
    }
  }
</style>
