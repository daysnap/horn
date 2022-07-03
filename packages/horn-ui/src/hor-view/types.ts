import { ExtractPropTypes } from 'vue'
import { horHeaderProps } from '../hor-header'

export const horViewProps = {
  ...horHeaderProps,
  useNavBar: {
    type: Boolean,
    default: true,
  },
}

export type HorViewProps = ExtractPropTypes<typeof horViewProps>