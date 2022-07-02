import Component from './index.vue'
import { withInstall } from '../utils'

export * from './types'
export const HorTest = withInstall<typeof Component>(Component)
export type HorTestInstance = InstanceType<typeof HorTest>

declare module 'vue' {
  export interface GlobalComponents {
    HorTest: typeof HorTest;
  }
}
