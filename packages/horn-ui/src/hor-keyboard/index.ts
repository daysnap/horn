import Component from './index.vue'
import { withInstall } from '../utils'
export const HorKeyboard = withInstall<typeof Component>(Component)
export type HorKeyboardInstance = InstanceType<typeof HorKeyboard>
declare module 'vue' {
  export interface GlobalComponents {
    HorKeyboard: typeof HorKeyboard
  }
}
