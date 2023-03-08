import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/assets/css/index.scss'
import router from './router'

// Create your Vue 3 app
const app = createApp(App).use(router)
// Choice #1: register all components. Impacts global bundle size
app.use(ElementPlus, {
  // options
})

app.mount('#app')
