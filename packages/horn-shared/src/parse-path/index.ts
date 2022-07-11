export const parsePath = (obj: any, path: string) => {
  path.split('.').forEach((key) => {
    obj = obj[key] ?? ''
  })
  return obj
}
