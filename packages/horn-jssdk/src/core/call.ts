import { log, nf } from 'src/utils'
import { DsBox } from './ds-box'
import { Code } from './code'
import { Services } from './services'
import { BaseActions, PolymerizeActions, SDKActions } from './actions'

export interface FailCallbackResult {
  code?: number
  message?: string
}

export type PromisifySuccessResult<
  P,
  T extends { success?: (...args: any[]) => void }
> = P extends { success: any }
  ? void
  : P extends { fail: any }
    ? void
    : Promise<Parameters<Exclude<T['success'], undefined>>[0]>

export type Options<T> =  {
  success? (data: T): void
  fail? (err: FailCallbackResult): void
  service: Services
  action: BaseActions | PolymerizeActions | SDKActions
  [props: string]: any
}

/**
 * jssdk 核心 无需直接调用
 */
export const core = <T>(options: Options<T>): void => {
  const {
    success = nf,
    fail = nf,
    service,
    action,
    ...params
  } = options
  DsBox.call<T>(
    res => {
      log(service, action, '请求返回 => ', res)
      const { code, data } = res
      code === Code.SUCCESS ? success(data) : fail(res)
    },
    err => {
      log(service, action, '请求错误 => ', err)
      fail(err)
    },
    service,
    action,
    params
  )
}

/**
 * 包装函数
 */
export const call = <
  T extends Options<any>,
  P extends Partial<Options<any>>
>(
  options: T
): PromisifySuccessResult<T, P> => {
  const {
    success,
    fail,
  } = options

  if (success || fail) {
    core(options)
    return
  }

  return new Promise((success, fail) =>
    core(Object.assign({}, options, { success, fail }))
  ) as any
}
