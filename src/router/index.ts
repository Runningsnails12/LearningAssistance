import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import {
  LoginPage,
  HomePage
} from '../pages'

const routes: RouteRecordRaw[] = [
  {
    name: 'home',
    path: '/',
    component: HomePage
  },
  {
    name: 'login',
    path: '/login',
    component: LoginPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router