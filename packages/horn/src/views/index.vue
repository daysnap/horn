
<template>
  <div class="view-wrap">
    <!-- <hor-header></hor-header> -->
  <router-view v-slot="{ Component }">
    <keep-alive :include="['index-home', 'index-widgets']">
      <component :is="Component" />
    </keep-alive>
  </router-view>
  <br>
  <br>
  <input type="text" v-model="age">
  <br>
  <p>age => {{ age }}</p>

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
  </div>
</template>

<route>{ redirect: '/home', meta: { depth: 1 } }</route>

<script setup lang="ts">
  import { useKeepAliveIncludes } from '@daysnap/horn-use'

  defineOptions({ name: 'index' })

  const age = ref<string>('')

  console.log('index => ', 111)

  const [ includes ] = useKeepAliveIncludes({ name: 'index' })

  const router = useRouter()

  const TabBarRoutes = computed(() => {
    const { options } = router
    const { routes } = options
    return routes.find(item => item.path === '/')
  })

  const arrTabBar = computed(() => {
    if (!TabBarRoutes.value) {
      return
    }
    const { children, path } = TabBarRoutes.value
    return children?.map(item => {
      const { path: itemPath } = item
      return Object.assign({}, item, {
        path: itemPath.startsWith('/')
          ? itemPath
          : `${path}${path.endsWith('/') ? '' : '/'}${itemPath}`
      })
    }) ?? []
  })

</script>

<style lang="scss" scoped>
  @import "src/assets/scss/define";

  .view-wrap{
    // transform: translate3d(-20%,0,0)
  }
  :deep {
    .van-tabbar--fixed{
      // background-color: red !important;
    }
  }

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
