import { createRouter, createWebHistory } from 'vue-router'
import ShiftsListPage from '../views/ShiftsListPage.vue'
import ShiftSignUpPage from '../views/ShiftSignUpPage.vue'


const routes = [
  {
    path: '/',
    name: 'ShiftsListPage',
    component: ShiftsListPage
  },
  {
    path: '/shift/:id',
    name: 'ShiftSignUpPage',
    component: ShiftSignUpPage
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
