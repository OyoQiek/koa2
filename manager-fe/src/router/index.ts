import { createWebHistory, createRouter, RouteRecordRaw } from 'vue-router'
import { App } from 'vue'

const routes: Array<RouteRecordRaw> = [
  {
    name: 'home',
    path: '/',
    meta: {
      title: '首页'
    },
    component: () => import('@/components/Home.vue'),
    redirect: '/welcome',
    children: [
      {
        name: 'welcome',
        path: '/welcome',
        meta: {
          title: '欢迎页'
        },
        component: () => import('@/views/Welcome.vue')
      }
    ]
  },
  {
    name: 'login',
    path: '/login',
    meta: {
      title: '登录页'
    },
    component: () => import('@/views/Login.vue')
  }
]

const _router = createRouter({
  history: createWebHistory(),
  routes
})

export const setRouter = (app: App) => {
  app.use(_router)
}

export default _router