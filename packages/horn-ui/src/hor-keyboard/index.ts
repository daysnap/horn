import Component from './index.vue'
import { withInstall } from '../utils'
import { KeyBoard } from './function-call'
export const HorKeyboard = withInstall<typeof Component>(Component)
export type HorKeyboardInstance = InstanceType<typeof HorKeyboard>
export { KeyBoard }
declare module 'vue' {
  export interface GlobalComponents {
    HorKeyboard: typeof HorKeyboard
  }
}
