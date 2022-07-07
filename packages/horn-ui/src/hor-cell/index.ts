import Component from './index.vue'
import { withInstall } from '../utils'

export * from './types'
export const HorCell = withInstall<typeof Component>(Component)
export type HorCellInstance = InstanceType<typeof HorCell>

declare module 'vue' {
  export interface GlobalComponents {
    HorCell: typeof HorCell
  }
}
