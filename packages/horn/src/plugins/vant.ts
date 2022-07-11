import { Locale } from 'vant'
import enUS from 'vant/es/locale/lang/en-US'
import zhCN from 'vant/es/locale/lang/zh-CN'

Locale.add(enUS)

const locale = window.localStorage.getItem(`$$LOCALE`) || 'zh-CN'

Locale.use(locale, locale === 'zh-CN' ? zhCN : enUS)
