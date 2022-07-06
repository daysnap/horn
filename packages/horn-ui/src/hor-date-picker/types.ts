import type { DatePickerColumnType, PickerOption } from 'vant';
import { ExtractPropTypes, PropType } from "vue";
export const datePickerProps = {
  value: Array<string>,
  minDate: {
    type: Date,
  },
  maxDate: {
    type: Date,
  },
  columnsType: { type: Array as PropType<DatePickerColumnType[]>, default: () => ['year', 'month', 'day'] },
  formatter: {
    type: Function as PropType<(type: string, val: PickerOption) => PickerOption>,
    default: (type: string, val: PickerOption) => {
      if (type === 'year') {
        val.text += '年';
      }
      if (type === 'month') {
        val.text += '月'
      }
      if (type === 'day') {
        val.text += '日'
      }
      return val
    },
  },
  filter: {
    type: Function as PropType<(columnType: string, options: PickerOption[]) => PickerOption[]>
  }
}
export type DatePickerProps = ExtractPropTypes<typeof datePickerProps>