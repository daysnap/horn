import { parsePath } from '@daysnap/horn-shared'
import Locale from '../locale'

interface UseNamespaceOptions {
  i18n?: Record<string, any>
  name?: string
}

export const useNamespace = ({ i18n, name = '' }: UseNamespaceOptions = {}) => {
  let prefix = `hor`
  if (name) {
    prefix += `-${name}`
  }

  if (i18n) {
    const messages: Record<string, any> = {}

    Object.keys(i18n).forEach((key) => {
      messages[key] = { [prefix]: i18n[key] }
    })

    Locale.add(messages)
  }

  const t = (path: string) => {
    const messages = Locale.messages()
    let result = parsePath(messages, `${prefix}.${path}`)
    if (!result && prefix !== 'hor') {
      result = parsePath(messages, `hor.${path}`)
    }
    return result
  }
  return { t }
}
