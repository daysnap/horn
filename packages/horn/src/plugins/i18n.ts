import { createI18n } from 'vue-i18n'
import { Plugin } from 'vue'

const messages = Object.fromEntries(
  Object.entries(import.meta.globEager('../../locales/*.yml')).map(([key, value]) => {
    return [key.slice(14, -4), value.default]
  }),
)

export default {
  install(app) {
    const i18n = createI18n({
      legacy: false,
      locale: 'zh-CN',
      messages,
    })

    app.use(i18n)
  },
} as Plugin
