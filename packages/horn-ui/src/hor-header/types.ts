import { ExtractPropTypes } from 'vue'

export const horHeaderProps = {
  title: String,
  leftArrow: {
    type: Boolean,
    default: true,
  },
  useLeftEvent: {
    type: Boolean,
    default: true,
  },
}

export type HorHeaderProps = ExtractPropTypes<typeof horHeaderProps>