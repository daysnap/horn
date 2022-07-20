import Component from './index.vue'
import { withInstall } from '../utils'

export * from './types'
export const HorBmap = withInstall<typeof Component>(Component)
export type HorBmapInstance = InstanceType<typeof HorBmap>

declare module 'vue' {
  export interface GlobalComponents {
    HorBmap: typeof HorBmap
  }
}
