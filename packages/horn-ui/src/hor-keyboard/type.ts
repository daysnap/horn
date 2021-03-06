import { ExtractPropTypes, PropType } from 'vue'
type KeyboardType = 'vin' | 'lic' | 'idNum' | 'phone' | 'num' | 'full'
export const horKeyboardProps = {
  value: {
    type: String,
    default: '',
  },
  type: {
    type: String as PropType<KeyboardType>,
    default: 'full',
  },
  maxlength: {
    type: [String, Number],
    default: 999,
  },
  placeholder: { default: '请输入' },
  disabledKey: {
    type: Array as PropType<Array<string>>,
    default: () => [],
  },
}
export type HorKeyboardProps = ExtractPropTypes<typeof horKeyboardProps>
