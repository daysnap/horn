import Component from './index.vue'
import { withInstall } from '../utils'

export * from './types'
export const HorSkeleton = withInstall<typeof Component>(Component)
export type HorSkeletonInstance = InstanceType<typeof HorSkeleton>

declare module 'vue' {
  export interface GlobalComponents {
    HorSkeleton: typeof HorSkeleton;
  }
}
