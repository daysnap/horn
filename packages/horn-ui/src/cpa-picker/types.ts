import { PickerOption, PickerColumn } from 'vant'
import { ExtractPropTypes, PropType } from 'vue'
import { makeArrayProp } from '../utils'

export const cpaPickerProps = {
  title: String,
  value: {
    type: [String, Number, Object],
  },
  filterable: {
    type: Boolean,
    default: false,
  },
  columns: makeArrayProp<PickerOption | PickerColumn>(),
}

export type CpaPickerProps = ExtractPropTypes<typeof cpaPickerProps>