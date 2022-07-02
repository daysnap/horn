import type {  DatePickerColumnType,PickerOption } from 'vant';
import {ExtractPropTypes, PropType} from "vue";
import {pickerProps} from "@/hor-picker/types";
export const datePickerProps = {
  value: Array<string>,
  minDate: {
    type:[Date ],
  },
  maxDate: {
    type:[Date ],
  },
  columnsType: { type: Array as PropType<DatePickerColumnType[]>, default: ()=>['year', 'month'] },
  formatter:{
    type: Function as PropType<(type:string, val:PickerOption)  =>PickerOption>,
    default:(type:string, val:PickerOption) => {
      if (type === 'year') {
          val.text += '年';
      }
      if (type === 'month') {
          val.text += '月'
      }
      if (type === 'day') {
          val.text +=  '日'
      }
      return val
    },
  }
}
export type DatePickerProps = ExtractPropTypes<typeof datePickerProps>