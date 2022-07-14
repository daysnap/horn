import { isEmpty } from '../is'

/**
 * 为空则返回默认
 * '' 、undefined 、null 则取默认值
 */
export const reserve = (val: any, defaultVal?: any) => {
  return isEmpty(val) ? defaultVal : val
}
