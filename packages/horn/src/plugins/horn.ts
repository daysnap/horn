import { Locale } from '@daysnap/horn-ui'

const locale = window.localStorage.getItem(`$$LOCALE`) || 'zh-CN'

Locale.use(locale)
