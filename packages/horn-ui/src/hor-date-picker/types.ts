import type { DatePickerProps, DatePickerColumnType } from 'vant';
export const datePickerProps = {
  minDate: {
    type:[Date , undefined],
    default: undefined
  },
  maxDate: {
    type:[Date , undefined],
    default: undefined
  },
  columnsType: { type: ():Array<DatePickerColumnType> => [], default: 'date' },
}