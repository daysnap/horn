import  Component  from "./index.vue"
import { withInstall } from "../utils"
export const HorList = withInstall<typeof Component>(Component)
export type HorListInstance = InstanceType<typeof HorList>
declare module 'vue' {
  export interface GlobalComponents {
    HorList: typeof HorList;
  }
}