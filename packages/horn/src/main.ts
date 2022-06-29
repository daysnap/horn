import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

// ;(s => Object.values(s).forEach(it => app.use(it.default)))(import.meta.globEager('./plugins/*.ts'))

app
  .use(router)
  .mount('#app')
