import Component from './index.vue'
import { withInstall } from '../utils'

export * from './types'
export const HorCellGroup = withInstall<typeof Component>(Component)
export type HorCellGroupInstance = InstanceType<typeof HorCellGroup>

declare module 'vue' {
  export interface GlobalComponents {
    HorCellGroup: typeof HorCellGroup
  }
}
