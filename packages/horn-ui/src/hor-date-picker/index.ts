import Component from './index.vue'
import { withInstall } from '../utils'
export * from './types'
export const HorDatePicker = withInstall<typeof Component>(Component)
export type HorDatePickerInstance = InstanceType<typeof HorDatePicker>

declare module 'vue' {
  export interface GlobalComponents {
    HorDatePicker: typeof HorDatePicker
  }
}
