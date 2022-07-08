import { PropType } from 'vue'

export const numericProp = [Number, String]

export const makeArrayProp = <T>() => ({
  type: Array as PropType<T[]>,
  default: () => [],
})

export const makeNumericProp = <T>(defaultVal: T) => ({
  type: numericProp,
  default: defaultVal,
})

export const makeNumberProp = <T>(defaultVal: T) => ({
  type: Number,
  default: defaultVal,
})

export const makeStringProp = <T>(defaultVal: T) => ({
  type: String as unknown as PropType<T>,
  default: defaultVal,
})

export const makeBooleanProp = <T>(defaultVal: T) => ({
  type: Boolean,
  default: defaultVal,
})
