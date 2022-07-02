import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

interface UseTransitionNameByDepthOptions {
  toClass: string
  fromClass: string
  deep?: boolean
}

export const useTransitionNameByDepth = (
  {
    toClass,
    fromClass,
    deep = false
  }: UseTransitionNameByDepthOptions
) => {
  const name = ref<string>('')
  const route = useRoute()

  watch(
    () => ({ ...route }),
    (to, from) => {
      const { depth: td, toClass: tc } = to.meta || {}
      const { depth: fd = td, fromClass: fc } = from.meta || {}
      name.value = 
        (
          typeof td === 'undefined'
          || typeof fd === 'undefined' 
          || td === fd
        )
        ? ''
        : td > fd
        ? tc ?? toClass
        : fc ?? fromClass
    },
    { deep }
  )

  return name
}
