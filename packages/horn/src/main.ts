import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'amfe-flexible'

const app = createApp(App)

;((s) => Object.values(s).forEach((it) => it.default && app.use(it.default)))(
  import.meta.globEager('./plugins/*.ts'),
)

app.use(router).mount('#app')
