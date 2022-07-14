import { regMobileNumber, regEmail, regIDCard } from '../regular'

/**
 * 校验是否是函数
 */
export const isFunction = (val: unknown): val is Function => typeof val === 'function'

/**
 * 校验是否是字符串
 */
export const isString = (val: unknown): val is String => typeof val === 'string'

/**
 * 校验是否是数组
 */
export const isArray = <T = any>(val: unknown): val is Array<T> => Array.isArray(val)

/**
 * 校验是否是对象
 */
export const isObject = (val: unknown): val is Record<string, any> =>
  Object.prototype.toString.call(val) === '[object Object]'

/**
 * 校验是否是日期
 */
export const isDate = (val: unknown): val is Date => val instanceof Date

/**
 * 校验是否是 null
 */
export const isNull = (val: unknown) => val === null

/**
 * 校验是否是 undefined
 */
export const isUndefined = (val: unknown): val is undefined => typeof val === 'undefined'

/**
 * 校验是否为空
 */
export const isEmpty = (val: unknown): boolean => val === '' || isNull(val) || isUndefined(val)

/**
 * 校验是否是 promise
 */
export const isPromise = <T = any>(val: unknown): val is Promise<T> =>
  val instanceof Promise || !!(val as any).then || !!(val as any).catch

/**
 * 校验是否是手机号码
 */
export const isMobileNumber = (val: string | number) => regMobileNumber.test(val.toString())

/**
 * 校验是否是邮箱
 */
export const isEmail = (val: string) => regEmail.test(val.toString())

/**
 * 校验是否是身份证
 */
export const isIDCard = (val: string) => regIDCard.test(val)
