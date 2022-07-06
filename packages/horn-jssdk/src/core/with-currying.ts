import { call, Options } from './call'
import { Services } from './services'
import { BaseActions, PolymerizeActions, SDKActions } from './actions'

type WithCurryingOptions = Omit<Options<any>, 'service' | 'action'>

type MergeOptions<T> = T & Pick<Options<any>, 'service' | 'action'>

export const withCurrying =
  <T extends WithCurryingOptions, P extends WithCurryingOptions>(
    service: Options<any>['service'],
  ) =>
  (action: Options<any>['action']) =>
  (options: T) =>
    call<MergeOptions<T>, MergeOptions<P>>(Object.assign({ service, action }, options))

export const withBasics = <T extends WithCurryingOptions, P extends WithCurryingOptions>(
  action: BaseActions,
) => withCurrying<T, P>(Services.BASICS)(action)

export const withPolymerize = <T extends WithCurryingOptions, P extends WithCurryingOptions>(
  action: PolymerizeActions,
) => withCurrying<T, P>(Services.POLYMERIZE)(action)

export const withSDK = <T extends WithCurryingOptions, P extends WithCurryingOptions>(
  action: SDKActions,
) => withCurrying<T, P>(Services.SDK)(action)
