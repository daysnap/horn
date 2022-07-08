export const parseType = (value: any) => {
  if (Array.isArray(value)) {
    return value.map((item) => item?.name).join(' , ')
  }
  return value?.name
}
