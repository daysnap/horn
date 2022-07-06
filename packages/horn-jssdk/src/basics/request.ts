import { BaseActions, FailCallbackResult, withBasics } from 'src/core'

export interface RequestOptions<T = any> {
  url: string
  data?: any
  header?: { [props: string]: any }
  timeout?: number
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
  success?: (result: T) => void
  fail?: (err: FailCallbackResult) => void
}

/**
 * 发起 HTTP、HTTPS 网络请求
 */
export const request = <P = any, T extends RequestOptions<P> = RequestOptions<P>>(options: T) =>
  withBasics<T, RequestOptions<P>>(BaseActions.REQUEST)(options)
