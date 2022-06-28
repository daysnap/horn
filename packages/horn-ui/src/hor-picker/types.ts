import { PickerOption, PickerColumn } from 'vant'
import { ExtractPropTypes } from 'vue'
import { makeArrayProp } from '../utils'

export const pickerProps = {
  title: String,
  value: [String, Number, Object],
  filterable: {
    type: Boolean,
    default: false,
  },
  columns: makeArrayProp<PickerOption | PickerColumn>(),
}

export type PickerProps = ExtractPropTypes<typeof pickerProps>