import { watch, ref } from 'vue'
import { useRoute, _RouteLocationBase } from 'vue-router'

// todo 后续需要补充 replace 逻辑
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
      const toIndex = stack.value.findIndex((item) => item.fullPath === to.fullPath)
      if (toIndex === -1) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { matched, ...rest } = to
        stack.value.push(rest)
      }

      const fromIndex = stack.value.findIndex((item) => item.fullPath === from.fullPath)
      if (toIndex > -1 && fromIndex > -1) {
        // 返回：B -> A
        stack.value = stack.value.slice(0, toIndex + 1)
      }
    },
    { deep: true },
  )

  return stack
}
