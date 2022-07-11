// 这里暂时不要 因为 horn-ui 依赖于 vant 所以国际化这块继承了他的功能
import { Locale as VantLocale } from 'vant'
import zhCN from './lang/zh-CN'
import enUS from './lang/en-US'

type Message = Record<string, any>
type Messages = Record<string, Message>

VantLocale.add({
  'zh-CN': {
    hor: zhCN,
  },
  'en-US': {
    hor: enUS,
  },
})

export const Locale = {
  messages() {
    return VantLocale.messages()
  },

  use(newLang: string, newMessage?: Message) {
    return VantLocale.use(newLang, newMessage)
  },

  add(newMessages: Messages = {}) {
    return VantLocale.add(newMessages)
  },
}

export default Locale
