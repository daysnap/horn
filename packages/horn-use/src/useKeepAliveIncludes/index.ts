import { computed, ComputedRef, ref } from 'vue'
import { useRoute, onBeforeRouteLeave, NavigationGuard } from 'vue-router'

const data = ref<{ name: string, depth: number }[]>([])

type UseKeepAliveIncludesOptions = {
  name?: string // 须跟 component > name 一致
  depth?: number
  leaveGuard?: NavigationGuard
} | boolean

type UseKeepAliveIncludesResult = [ ComputedRef<string[]>, typeof data ]

export const useKeepAliveIncludes = (
  options?: UseKeepAliveIncludesOptions
) : UseKeepAliveIncludesResult => {

  if (typeof options !== 'boolean') {
    const { meta, ...rest } = useRoute()
    let { depth, name, leaveGuard } = Object.assign({}, rest, meta, options)
    if (name && depth) {
      data.value.push({ name, depth })
      if (!leaveGuard) {
        leaveGuard = ((to, from, next) => {
          const toDepth = to.meta?.depth as number
          const fromDepth = from.meta?.depth as number
          if (toDepth < fromDepth) {
            const index = data.value.findIndex(item => item.name === to.name)
            if (index > -1) {
              data.value = data.value.slice(0, index + 1)
            }
          }
          next()
        }) 
      }
      onBeforeRouteLeave(leaveGuard)
    }
  }
  
  return [
    computed(() => data.value.map(item => item.name)), 
    data
  ]
}