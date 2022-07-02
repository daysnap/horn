import Component from './index.vue'
import { withInstall } from '../utils'

export * from './types'
export const HorPicker = withInstall<typeof Component>(Component)
export type HorPickerInstance = InstanceType<typeof HorPicker>

declare module 'vue' {
  export interface GlobalComponents {
    HorPicker: typeof HorPicker;
  }
}
