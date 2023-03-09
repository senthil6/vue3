import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import '@/assets/css/index.scss'
import '@/assets/css/tachyons.css'

// Create your Vue 3 app
const app = createApp(App).use(router)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
// Choice #1: register all components. Impacts global bundle size
app.use(ElementPlus, {
  // options
})

app.mount('#app')
