import { ExtractPropTypes, PropType } from 'vue'

export const cellProps = {
  label: [String, Number],
  value: Object as PropType<any>,
  direction: {
    type: String,
    default: 'row',
  },
}

export type Props = ExtractPropTypes<typeof cellProps>
