import { Ref, PropType, ExtractPropTypes } from 'vue'

export const horPullRefreshProps = {
  refList: Object as PropType<Ref<any>>,
}

export type HorPullRefreshProps = ExtractPropTypes<typeof horPullRefreshProps>
