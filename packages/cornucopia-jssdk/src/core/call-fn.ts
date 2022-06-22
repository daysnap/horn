import { core, Options } from './call'

export type AnyOne<T> = T & { [prop: string]: any }

type BaseOptions<T> = Pick<Options<T>, 'service' | 'action' | 'fail' | 'success'>

/**
 * 函数重载包装 callFn，少用
 * 使用方不会调用这个
 */
export function callFn<T>(options: AnyOne<Required<BaseOptions<T>>>): void;
export function callFn<T>(options: AnyOne<Required<Omit<BaseOptions<T>, 'fail'>>>): void; // success
export function callFn<T>(options: AnyOne<Required<Omit<BaseOptions<T>, 'success'>>>): void; // fail
export function callFn<T>(options: AnyOne<Required<Omit<BaseOptions<T>, 'success' | 'fail'>>>): Promise<T>;
export function callFn<T>(options: any): any {
  const { success, fail } = options

  if (success || fail) {
    core<T>(options)
    return
  }
  return new Promise<T>((success, fail) =>
    core<T>(Object.assign({}, options, { success, fail }))
  )
}
