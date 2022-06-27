
import Component from './index.vue'
import { withInstall } from '../utils'

export const CpaPicker = withInstall<typeof Component>(Component)

export type CpaPickerInstance = InstanceType<typeof CpaPicker>
