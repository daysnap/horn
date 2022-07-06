import { useRouter } from 'vue-router'

interface TransferOptions {
  disabled?: boolean
  replace?: boolean
  query?: Record<string, any>
  params?: Record<string, any>
  path?: string
  fn?(options: TransferOptions, event?: any): void
  [prop: string]: any
}

export const useTransfer = () => {
  const router = useRouter()
  return (options: TransferOptions = {}, event?: any) => {
    const { disabled, path, replace = false, fn, ...rest } = options
    if (disabled) {
      return
    }
    if (path) {
      router.push({ path, replace, ...rest })
      return
    }
    if (fn) {
      fn(options, event)
      return
    }
  }
}
