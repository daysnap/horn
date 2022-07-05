import { computed, ComputedRef, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const data = ref<{ name: string, depth: number }[]>()

type UseKeepAliveIncludesOptions = {
  name?: string // 须跟 component > name 一致
  depth?: number
} | boolean

type UseKeepAliveIncludesResult = [ ComputedRef<string[]>, typeof data ]

export const useKeepAliveIncludes = (
  options?: UseKeepAliveIncludesOptions
) : UseKeepAliveIncludesResult => {

  if (typeof data.value === 'undefined') {
    const route = useRoute()
    data.value = []
    
    watch(
      () => ({ ...route }),
      (to, from) => {
        const toDepth = to.meta?.depth as number
        const fromDepth = from.meta?.depth as number
        if (toDepth < fromDepth && data.value) {
          const index = data.value
            .findIndex(item => item.name === to.name)
          // todo fix keepalive + transition 动画被缓存的奇怪 BUG
          setTimeout(() => 
            data.value = data.value?.slice(0, index + 1)
          )
        }
      },
      { deep: true }
    )
  }

  if (typeof options !== 'boolean') {
    const { meta, ...rest } = useRoute()
    let { depth, name } = Object.assign({}, rest, meta, options)
    if (name && depth) {
      data.value.push({ name, depth })
    }
  }

  return [
    computed(() => data.value!!.map(item => item.name)), 
    data
  ]
}