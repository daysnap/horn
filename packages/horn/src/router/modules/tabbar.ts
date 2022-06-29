import { RouteRecordRaw } from 'vue-router'

export default [
  {
    path: '/',
    redirect: '/home',
    component: () => import('src/views/main/index.vue'),
    children: [
      {
        path: 'home',
        component: () => import('src/views/home/index.vue'),
        meta: { title: '首页', icon: 'wap-home-o' },
      },
      {
        path: 'services',
        component: () => import('src/views/services/index.vue'),
        meta: { title: '服务', icon: 'smile-comment-o' },
      },
      {
        path: 'widgets',
        component: () => import('src/views/widgets/index.vue'),
        meta: { title: '部件', icon: 'apps-o' },
      },
    ]
  }
] as Array<RouteRecordRaw>
