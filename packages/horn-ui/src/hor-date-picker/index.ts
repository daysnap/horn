import Component from './index.vue'
import { withInstall } from '../utils'
export const HorDatePicker = withInstall<typeof Component>(Component)
export type HorDatePickerInstance = InstanceType<typeof HorDatePicker>
