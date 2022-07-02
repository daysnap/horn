import Component from './index.vue'
import { withInstall } from '../utils'

export * from './types'
export const HorHeader = withInstall<typeof Component>(Component)
export type HorHeaderInstance = InstanceType<typeof HorHeader>

declare module 'vue' {
  export interface GlobalComponents {
    HorHeader: typeof HorHeader;
  }
}
