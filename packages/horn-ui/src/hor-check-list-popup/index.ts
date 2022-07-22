import Component from './index.vue'
import { withInstall } from '../utils'

export * from './types'
export const HorCheckListPopup = withInstall<typeof Component>(Component)
export type HorCheckListPopupInstance = InstanceType<typeof HorCheckListPopup>

declare module 'vue' {
  export interface GlobalComponents {
    HorCheckListPopup: typeof HorCheckListPopup
  }
}
