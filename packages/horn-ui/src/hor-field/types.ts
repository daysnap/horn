import { ExtractPropTypes } from 'vue'
import { pick } from '@daysnap/horn-shared'
import { makeNumericProp, makeBooleanProp, makeStringProp } from '../utils'
import { horCellProps } from '../hor-cell'

const cellProps = pick(horCellProps, ['label', 'required', 'direction'])

export const horFieldProps = {
  ...cellProps,
  clearable: makeBooleanProp(false),
  placeholder: makeStringProp('请输入'),
  maxlength: makeNumericProp('999'),
  modelValue: makeStringProp(''),
  unit: makeStringProp(''),
  type: makeStringProp(''),
  disabled: makeBooleanProp(false),
}

export type HorFieldProps = ExtractPropTypes<typeof horFieldProps>
