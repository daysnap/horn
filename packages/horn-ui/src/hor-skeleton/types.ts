import { ExtractPropTypes } from 'vue'

export const horSkeletonProps = {
  error: {},
  errorBtnText: {
    type: String,
    default: '刷新',
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
    default: '暂无数据...',
  },
}

export type HorSkeletonProps = ExtractPropTypes<typeof horSkeletonProps>