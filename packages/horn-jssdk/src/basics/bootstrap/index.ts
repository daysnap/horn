import { BaseActions, FailCallbackResult, withBasics } from 'src/core'

export interface BootstrapOptions {
  success?: (result: any) => void
  fail?: (err: FailCallbackResult) => void
}

export const bootstrap = <T extends BootstrapOptions = BootstrapOptions>(options?: T) =>
  withBasics<T, BootstrapOptions>(BaseActions.BOOTSTRAP)(options)
