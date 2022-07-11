// 这里暂时不要 因为 horn-ui 依赖于 vant 所以国际化这块继承了他的功能
import { Locale as VantLocale } from 'vant'
import zhCN from './lang/zh-CN'

type Message = Record<string, any>
type Messages = Record<string, Message>

VantLocale.add({
  'zh-CN': {
    hor: zhCN,
  },
})

export const Locale = {
  messages() {
    return VantLocale.messages()
  },

  async use(lng: string) {
    let vant, horn
    if (lng === 'en-US') {
      vant = (await import('vant/es/locale/lang/en-US')).default
      horn = { hor: (await import('./lang/en-US')).default }
    }
    return VantLocale.use(lng, Object.assign({}, vant, horn))
  },

  add(newMessages: Messages = {}) {
    return VantLocale.add(newMessages)
  },
}

export default Locale
