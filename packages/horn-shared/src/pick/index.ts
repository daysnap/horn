export function pick<T extends object, K extends keyof T>(obj: T, fields: K[] = []): Pick<T, K> {
  const clone = {} as Pick<T, K>

  fields.forEach((key) => (clone[key] = obj[key]))

  return clone
}
