import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = (s => [
  ...Object.values(s).map(it => it.default).flat(),
  { path: '/:catchAll(.*)*', name: '404', redirect: '/' },
])(import.meta.globEager('./modules/*.ts'))

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
