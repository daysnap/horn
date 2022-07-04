
<template>
  <hor-view 
    :title="title"
    :left-arrow="false"
  >
    <template #right>
      <van-popover 
        class="popover"
        v-model:show="showPopover" 
        placement="bottom-end"
        theme="dark"
        :offset="[10, 10]"
        :actions="[
          { text: '扫一扫', icon: 'scan' },
          { text: 'Github', icon: 'link-o' },
        ]">
        <template #reference>
          <van-icon name="ellipsis" size="24"/>
        </template>
      </van-popover>
    </template>

    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
    
    <van-tabbar
      fixed
      route
      placeholder
      v-model="current"
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
  </hor-view>
</template>

<route>{ redirect: '/home', meta: { depth: 1 } }</route>

<script setup lang="ts">
  import { useKeepAliveIncludes } from '@daysnap/horn-use'

  defineOptions({ name: 'index' })
  const [ includes ] = useKeepAliveIncludes({ name: 'index' })
  const router = useRouter()
  const route = useRoute()
  
  const showPopover = ref(false);

  const arrTabBar = computed(() => {
    const { options } = router
    const { routes } = options
    const tabBarRoutes = routes.find(item => item.path === '/')
    const { children, path = '' } = tabBarRoutes || {}
    return children?.map(item => {
      const { path: itemPath } = item
      return Object.assign({}, item, {
        path: itemPath.startsWith('/')
          ? itemPath
          : `${path}${path.endsWith('/') ? '' : '/'}${itemPath}`
      })
    }) ?? []
  })

  const current = ref(arrTabBar.value.findIndex(item => item.path === route.path))

  const title = computed(() => 
    arrTabBar.value[current.value]?.meta?.title ?? ''
  )

</script>

<style lang="scss">
  .popover{
    .van-popover__arrow{
      right: 10px !important;
    }
  }
</style>

<style lang="scss">
  @import "src/assets/scss/define";

  .index-wrap{
    
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
