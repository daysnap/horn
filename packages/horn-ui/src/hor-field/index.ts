import Component from './index.vue'
import { withInstall } from '../utils'

export * from './types'
export const HorField = withInstall<typeof Component>(Component)
export type HorFieldInstance = InstanceType<typeof HorField>

declare module 'vue' {
  export interface GlobalComponents {
    HorField: typeof HorField
  }
}
