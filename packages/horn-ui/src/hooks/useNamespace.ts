import { parsePath } from '@daysnap/horn-shared'
import Locale from '../locale'

interface UseNamespaceOptions {
  i18n?: Record<string, any>
}

let uid = 0
export const useNamespace = ({ i18n }: UseNamespaceOptions = {}) => {
  const prefix = `hor-${uid++}`
  if (i18n) {
    const messages: Record<string, any> = {}

    Object.keys(i18n).forEach((key) => {
      messages[key] = { [prefix]: i18n[key] }
    })

    Locale.add(messages)
  }
  const t = (path: string) => {
    const messages = Locale.messages()
    return parsePath(messages, `${prefix}.${path}`) || parsePath(messages, `hor.${path}`)
  }
  return { t }
}
