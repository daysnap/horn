import { ExtractPropTypes, PropType } from 'vue'
import { BadgeProps } from 'vant'
import { makeStringProp, makeBooleanProp, numericProp } from '../utils'

export const horIconProps = {
  dot: makeBooleanProp(false),
  tag: makeStringProp<keyof HTMLElementTagNameMap>('i'),
  name: makeStringProp(''),
  size: numericProp,
  badge: numericProp,
  color: makeStringProp(''),
  badgeProps: Object as PropType<Partial<BadgeProps>>,
  // classPrefix: makeStringProp(''),
}

export type HorIconProps = ExtractPropTypes<typeof horIconProps>
