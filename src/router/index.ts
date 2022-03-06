import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import {
  MainPage,
  LoginPage,
  HomePage,
  CoursePage,
  ToolPage
} from '../pages'

const routes: RouteRecordRaw[] = [
  {
    name: 'main',
    path: '/',
    component: MainPage,
    redirect: { name: 'home' },
    children: [
      {
        name: 'home',
        path: '/home',
        component: HomePage,
        meta: {
          id:0
        }
      },{
        name: 'course',
        path: '/course',
        component: CoursePage,
        meta: {
          id:1
        }
      },{
        name: 'tool',
        path: '/tool',
        component: ToolPage,
        meta: {
          id:2
        }
      },
    ]
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