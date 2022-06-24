import { config } from 'src/config'

// 日志
export const log = (...args: any[]) => {
  const { log } = config
  if (log) {
    if (typeof log === 'function') {
      log(...args)
    } else {
      console.log(...args)
    }
  }
}

// 空函数
export const nf = () => {}
