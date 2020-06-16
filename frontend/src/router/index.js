import Vue from 'vue'
import VueRouter from 'vue-router'
import { i18n } from '../plugins/i18n'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: `/${i18n.locale}`
  },
  {
    path: '/:lang',
    component: {
      render (c) {
        return c('router-view')
      }
    },
    children: [
      {
        path: '',
        name: 'login',
        component: () => import('../views/login.vue')
      },
      {
        path: 'register',
        name: 'register',
        component: () => import('../views/register.vue')
      },
      {
        path: 'home',
        name: 'home',
        props: false,
        component: () => import('../views/home.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
