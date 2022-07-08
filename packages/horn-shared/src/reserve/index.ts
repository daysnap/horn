export const reserve = (value: any, defaultVal?: any) => {
  return typeof value === 'undefined' || [null, ''].includes(value) ? defaultVal : value
}
