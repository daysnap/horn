import Component from './index.vue'
import { withInstall } from '../utils'

export * from './types'
export const HorIcon = withInstall<typeof Component>(Component)
export type HorIconInstance = InstanceType<typeof HorIcon>

declare module 'vue' {
  export interface GlobalComponents {
    HorIcon: typeof HorIcon
  }
}
