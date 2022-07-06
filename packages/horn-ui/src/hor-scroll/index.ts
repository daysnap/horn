import Component from "./index.vue"
import { withInstall } from "../utils"
export const HorScroll = withInstall< typeof Component >(Component)
export type HorScollInstance = InstanceType<typeof HorScroll>
declare module 'vue' {
  export interface GlobalComponents {
    HorScroll: typeof HorScroll;
  }
}