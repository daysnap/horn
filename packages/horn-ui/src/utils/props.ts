import { PropType } from 'vue'

export const numericProp = [Number, String];

export const makeArrayProp = <T>() => ({
    type: Array as PropType<T[]>,
    default: () => []
})

export const makeNumericProp = <T>(defaultVal: T) => ({
    type: numericProp,
    default: defaultVal,
  });
  