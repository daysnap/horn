import { ExtractPropTypes, InputHTMLAttributes } from 'vue'
import { pick } from '@daysnap/horn-shared'
import { makeNumericProp, makeBooleanProp, makeStringProp } from '../utils'
import { horCellProps } from '../hor-cell'

const cellProps = pick(horCellProps, ['label', 'required', 'direction', 'icon'])

export const horFieldProps = {
  ...cellProps,
  clearable: makeBooleanProp(false),
  placeholder: makeStringProp('请输入'),
  maxlength: makeNumericProp('999'),
  modelValue: makeStringProp(''),
  unit: makeStringProp(''),
  type: makeStringProp<InputHTMLAttributes['type']>(''),
  disabled: makeBooleanProp(false),
  fractionDigits: makeNumericProp('2'),
  pattern: {
    type: [Function, Object],
  },
}

export type HorFieldProps = ExtractPropTypes<typeof horFieldProps>
