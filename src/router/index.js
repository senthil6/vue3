import { createRouter, createWebHistory } from 'vue-router'
import homePanel from '../components/layout/homePanel.vue'
import aboutPanel from '../components/layout/aboutPanel.vue'
import adminPage from '../components/layout/adminPage.vue'

const routes = [
  {
    path: '/',
    name: 'Header',
    component: homePanel
  },
  {
    path: '/aboutPanel',
    name: 'About',
    component: aboutPanel
  },
  {
    path: '/adminPage',
    name: 'Admin',
    component: adminPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
