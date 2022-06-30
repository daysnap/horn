import Component from './index.vue'
import { withInstall } from '../utils'

export const HorCell = withInstall<typeof Component>(Component)

declare module 'vue' {
  export interface GlobalComponents {
    HorCell: typeof HorCell;
  }
}
