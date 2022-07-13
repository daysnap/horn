import { ExtractPropTypes } from 'vue'
import { makeNumericProp, makeBooleanProp, makeStringProp } from '../utils'
export const horFieldProps = {
  label: makeNumericProp(''),
  required: makeBooleanProp(false),
  direction: makeStringProp<'row' | 'column'>('row'),
  placeholder: makeStringProp('请输入'),
  maxlength: makeNumericProp('999'),
  modelValue: makeStringProp(''),
  unit: makeStringProp(''),
}

export type HorFieldProps = ExtractPropTypes<typeof horFieldProps>
