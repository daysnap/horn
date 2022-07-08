import { ExtractPropTypes } from 'vue'
import { makeBooleanProp, makeNumericProp, makeStringProp } from '../utils'

export const horCellProps = {
  label: makeNumericProp(''),
  value: makeNumericProp(''),
  direction: makeStringProp<'row' | 'column'>('row'),
  arrow: makeBooleanProp(false),
  required: makeBooleanProp(false),
  alignItemCenter: makeBooleanProp(false),
  ellipsis: makeBooleanProp(false),
  lineClamp: makeNumericProp(''),
  icon: makeStringProp(''),
  clickable: makeBooleanProp(false),
}

export type Props = ExtractPropTypes<typeof horCellProps>
