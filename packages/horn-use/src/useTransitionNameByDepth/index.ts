import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

interface UseTransitionNameByDepthOptions {
  enterClass: string
  leaveClass: string
  deep?: boolean
}

export const useTransitionNameByDepth = (
  {
    enterClass,
    leaveClass,
    deep = false
  }: UseTransitionNameByDepthOptions
) => {
  const name = ref<string>('')
  const route = useRoute()

  watch(
    () => ({ ...route }),
    (to, from) => {
      const { depth: td, enterClass: ec } = to.meta || {}
      const { depth: fd = td, leaveClass: lc } = from.meta || {}
      name.value = 
        (
          typeof td === 'undefined'
          || typeof fd === 'undefined' 
          || td === fd
        )
        ? ''
        : td > fd
        ? ec ?? enterClass
        : lc ?? leaveClass
    },
    { deep }
  )

  return name
}
