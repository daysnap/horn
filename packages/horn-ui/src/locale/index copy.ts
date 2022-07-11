// 这里暂时不要 因为 horn-ui 依赖于 vant 所以国际化这块继承了他的功能
import { ref, reactive } from 'vue'
import deepmerge from 'deepmerge'
import defaultMessages from './lang/zh-CN'

type Message = Record<string, any>
type Messages = Record<string, Message>

const lang = ref('zh-CN')
const messages = reactive<Messages>({
  'zh-CN': defaultMessages,
})

export const Locale = {
  messages() {
    return messages[lang.value]
  },

  use(newLang: string, newMessage?: Message) {
    lang.value = newLang
    if (newMessage) {
      this.add({ [newLang]: newMessage })
    }
  },

  add(newMessages: Messages = {}) {
    deepmerge(messages, newMessages)
  },
}

export default Locale
