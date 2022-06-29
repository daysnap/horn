
<template>
  <router-view></router-view>
  <van-tabbar
    fixed
    route
    class="main-tab-bar"
  >
    <van-tabbar-item
      v-for="(item) in arrTabBar"
      :key="item.path"
      replace
      :to="item.path"
      :icon="item.meta?.icon"
    >{{ item.meta?.title }}</van-tabbar-item>
  </van-tabbar>
</template>

<script setup lang="ts">
  import TabBarRoutes from 'src/router/modules/tabbar'

  const arrTabBar = computed(() => {
    const { children, path } = TabBarRoutes[0]
    return children?.map(item => {
      const { path: itemPath } = item
      return Object.assign({}, item, {
        path: itemPath.startsWith('/')
          ? itemPath
          : `${path}${path.endsWith('/') ? '' : '/'}${itemPath}`
      })
    })
  })
</script>

<style lang="scss" scoped>
  @import "src/assets/scss/define";
  .main-tab-bar{
    //background-color: $color-background-light;
    //&:after{
    //  border-width: 1px 0 0 0;
      //border-color: $border-color;
    //}
    .van-tabbar-item{
      color: #999;
    }
    .van-tabbar-item--active{
      color: $color-primary;
    }
  }
</style>
