import { createRouter, createWebHashHistory } from 'vue-router'
import routes from '~pages'

console.log('routes => ', routes)

// const routes: Array<RouteRecordRaw> = (s => [
//   ...Object.values(s).map(it => it.default).flat(),
//   { path: '/:catchAll(.*)*', name: '404', redirect: '/' },
// ])(import.meta.globEager('./modules/*.ts'))

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...routes, { path: '/:catchAll(.*)*', name: '404', redirect: '/' }],
})

export default router
