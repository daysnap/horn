// import Locale from '../locale'
import { Locale } from 'vant'
import { parsePath } from '@daysnap/horn-shared'

interface UseNamespaceOptions {
  i18n?: Record<string, any>
}
console.log('11111')

export const useNamespace = ({ i18n }: UseNamespaceOptions = {}) => {
  if (i18n) {
    const messages: Record<string, any> = {}

    Object.keys(i18n).forEach((key) => {
      messages[key] = i18n[key]
    })

    Locale.add(messages)
  }
  const t = (path: string) => {
    const messages = Locale.messages()
    return parsePath(messages, path)
  }
  return { t }
}
