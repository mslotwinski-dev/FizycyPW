import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Books from '../views/Books.vue'
import Notes from '../views/Notes.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/ksiazki',
    name: 'books',
    component: Books,
  },
  {
    path: '/notatki',
    name: 'notes',
    component: Notes,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
