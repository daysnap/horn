import { ExtractPropTypes } from 'vue'
import { horHeaderProps } from '../hor-header'

export const horViewProps = {
  ...horHeaderProps,
}

export type HorViewProps = ExtractPropTypes<typeof horViewProps>