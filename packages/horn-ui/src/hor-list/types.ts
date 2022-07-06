import { ExtractPropTypes } from 'vue'

export const horListProps = {
  finished: {
    type: Boolean,
    default: false,
  },
}
export type HorListProps = ExtractPropTypes<typeof horListProps>
