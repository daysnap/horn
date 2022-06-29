import { Plugin } from 'vue'
import * as HorUi from '@daysnap/horn-ui'

export default {
  install (app) {
    console.log('HorUi => ', HorUi)
    Object.values(HorUi).forEach(item => {
      if (item.install) {
        console.log('item.name => ', item.name)
      }
      item.install && app.use(item)
    })
  }
} as Plugin
