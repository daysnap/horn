import { watch, ref } from 'vue'
import { useRoute, _RouteLocationBase } from 'vue-router'

/**
 * A       => to: A, from:  , pageStack: [A]
 * A -> B  => to: B, from: A, pageStack: [A, B]
 * B -> C  => to: C, from: B, pageStack: [A, B, C]
 * C -> B  => to: B, from: C, pageStack: [A, B]
 * B -> A  => to: A, from: B, pageStack: [A]
 */
const stack = ref<_RouteLocationBase[]>([])
export const useRouteStack = () => {
  const route = useRoute()
  watch(
    () => ({ ...route }),
    (to, from) => {
      const toIndex = stack.value
        .findIndex(item => 
          item.fullPath === to.fullPath
        )
      if (toIndex === -1) {
        const { matched, ...rest } = to
        stack.value.push(rest)
      }
      
      const fromIndex = stack.value
        .findIndex(item => 
          item.fullPath === from.fullPath
        )
      if (toIndex > -1 && fromIndex > -1) {
        // 返回：B -> A
        stack.value = stack.value.slice(0, fromIndex)
      }
    },
    { deep: true }
  )
  return stack
}