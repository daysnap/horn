<template>
  <div class="test">
    <div
      class="dragSort"
      :class="['item' + '-' + index, 'item']"
      v-for="(item, index) in arr"
      :key="index"
    >
      <div class="123">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { onMounted } from 'vue'
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
  const useDragSort = (dom: any) => {
    dom.style.position = 'relative'
    const childrens = dom.children
    let dragDom
    let clientX
    let clientY
    Array.prototype.map.call(childrens, (item) => {
      console.dir(item)
      item.style.top = item.clientHeight + 'px'
      item.style.left = item.clientWidth + 'px'
      const touchstart = function (e) {
        item.style.position = 'absolute'
        dragDom = item
        console.log(e)
      }
      item.addEventListener('touchstart', touchstart)
      const touchmove = function (e) {
        clientX = e.targetTouches[0].clientX
        clientY = e.targetTouches[0].clientY
        dragDom.style.left = clientX - dragDom.offsetWidth / 2 + 'px'
        dragDom.style.top = clientY - dragDom.offsetHeight / 2 + 'px'
        console.dir(dragDom)
      }
      item.addEventListener('touchmove', touchmove)
    })
  }
  onMounted(() => {
    useDragSort(document.getElementsByClassName('test')[0])
  })
</script>
<style lang="scss">
  @import 'src/assets/scss/define';
  .test {
    display: flex;
    flex-wrap: wrap;
    .item {
      width: 33%;
      height: j(130);
      flex-grow: unset;
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
