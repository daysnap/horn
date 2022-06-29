import type {  DatePickerColumnType } from 'vant';
import {ExtractPropTypes, PropType} from "vue";
import {pickerProps} from "@/hor-picker/types";
export const datePickerProps = {
  minDate: {
    type:[Date ],
  },
  maxDate: {
    type:[Date ],
  },
  columnsType: { type: Array as PropType<DatePickerColumnType[]>, default: ()=>['year', 'month'] },
}
export type DatePickerProps = ExtractPropTypes<typeof datePickerProps>