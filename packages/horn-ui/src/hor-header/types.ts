import { ExtractPropTypes } from 'vue'

export const horHeaderProps = {
  title: String,
  leftArrow: {
    type: Boolean,
    default: true,
  },
  useLeftEvent: {
    type: Boolean,
    value: true,
  },
}

export type HorHeaderProps = ExtractPropTypes<typeof horHeaderProps>