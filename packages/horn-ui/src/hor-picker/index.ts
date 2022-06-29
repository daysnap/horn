import Component from './index.vue'
import { withInstall } from '../utils'

export const HorPicker = withInstall<typeof Component>(Component)

export type HorPickerInstance = InstanceType<typeof HorPicker>
