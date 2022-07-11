<template>
  <hor-view :title="title" :left-arrow="false">
    <template #right>
      <popover-menus />
    </template>

    <router-view v-slot="{ Component }">
      <keep-alive :include="includes">
        <component :is="Component" />
      </keep-alive>
    </router-view>

    <van-tabbar fixed route placeholder v-model="current" class="main-tab-bar">
      <van-tabbar-item
        v-for="item in arrTabBar"
        :key="item.path"
        replace
        :to="item.path"
        :icon="item.meta?.icon"
      >
        {{ item.meta?.title }}
      </van-tabbar-item>
    </van-tabbar>
  </hor-view>
</template>

<route>{ redirect: '/home', meta: { depth: 1 } }</route>

<script setup lang="ts">
  import { useKeepAliveIncludes } from '@daysnap/horn-use'
  import PopoverMenus from './components/popover-menus.vue'

  defineOptions({ name: 'index' })

  const [includes] = useKeepAliveIncludes({ name: 'index' })

  const router = useRouter()
  const route = useRoute()
  const arrTabBar = computed(() => {
    const { options } = router
    const { routes } = options
    const tabBarRoutes = routes.find((item) => item.path === '/')
    const { children, path = '' } = tabBarRoutes || {}
    return (
      children?.map((item) => {
        const { path: itemPath } = item
        return Object.assign({}, item, {
          path: itemPath.startsWith('/')
            ? itemPath
            : `${path}${path.endsWith('/') ? '' : '/'}${itemPath}`,
        })
      }) ?? []
    )
  })

  const current = ref(arrTabBar.value.findIndex((item) => item.path === route.path))
  const title = computed(() => arrTabBar.value[current.value]?.meta?.title ?? '')
</script>

<style lang="scss">
  @import 'src/assets/scss/define';
  .main-tab-bar {
    .van-tabbar-item {
      color: #999;
    }
    .van-tabbar-item--active {
      color: $color-primary;
    }
  }
</style>
