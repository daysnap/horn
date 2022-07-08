import { ExtractPropTypes } from 'vue'
import { makeNumericProp, makeStringProp } from '../utils'

export const horCellProps = {
  label: makeNumericProp(''),
  value: makeNumericProp(''),
  direction: makeStringProp<'row' | 'column'>('row'),
  arrow: {
    type: Boolean,
    default: false,
  },
  required: {
    type: Boolean,
    default: false,
  },
  alignItemCenter: {
    type: Boolean,
    default: false,
  },
  ellipsis: {
    type: Boolean,
    default: false,
  },
  lineClamp: makeNumericProp(''),
}

export type Props = ExtractPropTypes<typeof horCellProps>
