import Component from './index.vue'
import { withInstall } from '../utils'

export * from './types'
export const HorView = withInstall<typeof Component>(Component)
export type HorViewInstance = InstanceType<typeof HorView>

declare module 'vue' {
  export interface GlobalComponents {
    HorView: typeof HorView
  }
}
