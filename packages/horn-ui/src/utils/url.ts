
// 动态获取src
export const url = (url: string, base?: string) =>
  new URL(url, base).toString()