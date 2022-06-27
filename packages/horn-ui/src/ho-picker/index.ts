
import Component from './index.vue'
import { withInstall } from '../utils'

export const HoPicker = withInstall<typeof Component>(Component)

export type HoPickerInstance = InstanceType<typeof HoPicker>
