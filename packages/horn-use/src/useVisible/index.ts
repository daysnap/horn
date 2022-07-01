
import { ref } from 'vue'

export interface UseVisibleOptions<T> {
  showCallback?: (options?: T) => void | Promise<void>,
  hideCallback?: () => void | Promise<void>,
  confirmCallback?: (...args: any[]) => any | Promise<any>,
}

export interface UseVisibleShowOptions {
  beforeClose?: (action: string, ...args: any[]) => boolean | Promise<boolean>
}

export const useVisible = <T extends {}, P = any>(
  options: UseVisibleOptions<T> = {}
) => {

  const { showCallback, hideCallback, confirmCallback } = options

  const visible = ref(false)
  let resolve: (value?: any) => void
  let reject: (reason?: any) => void
  let beforeClose: UseVisibleShowOptions['beforeClose']

  // 显示
  const show = <R = P>(options?: UseVisibleShowOptions & T) => {
    return new Promise<R> (async (_resolve, _reject) => {
      beforeClose = options?.beforeClose
      await showCallback?.(options)
      visible.value = true
      resolve = _resolve
      reject = _reject
    })
  }

  // 隐藏
  const hide = async (reason?: any) => {
    const result = await beforeClose?.('cancel', reason) ?? true
    if (!result) {
      return
    }
    await hideCallback?.()
    reject?.(reason)
    visible.value = false
  }

  // 确认
  const confirm = async (...args: any[]) => {
    const result = await beforeClose?.('confirm', ...args) ?? true
    if (!result) {
      return
    }
    const value = await confirmCallback?.(...args)
    resolve?.(value)
    visible.value = false
  }

  return {
    visible,
    show,
    confirm,
    hide,
  }
}
