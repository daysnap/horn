import Component from './index.vue'
import { withInstall } from '../utils'
export const HorPullRefresh = withInstall<typeof Component>(Component)
export type HorPullRefreshInstance = InstanceType<typeof HorPullRefresh>

declare module 'vue' {
  export interface GlobalComponents {
    HorPullRefresh: typeof HorPullRefresh
  }
}
