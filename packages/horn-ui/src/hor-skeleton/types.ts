import { ExtractPropTypes } from 'vue'

export const horSkeletonProps = {
  error: {},
  errorBtnText: {
    type: String,
    default: '',
  },
  errorBtnVisible: {
    type: Boolean,
    default: true,
  },
  loading: {
    type: Boolean,
    default: true,
  },
  emptyPrompt: {
    type: String,
    default: '',
  },
}

export type HorSkeletonProps = ExtractPropTypes<typeof horSkeletonProps>
