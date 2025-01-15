import { createRouter, createWebHistory } from 'vue-router'
import ShiftsListPage from '../views/ShiftsListPage.vue'
import ShiftDetailPage from '../views/ShiftDetailPage.vue'


const routes = [
  {
    path: '/',
    name: 'ShiftsListPage',
    component: ShiftsListPage
  },
  {
    path: '/shift/:id',
    name: 'ShiftDetailPage',
    component: ShiftDetailPage
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
