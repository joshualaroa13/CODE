import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../App.vue'
import Shop from '../views/Shop.vue'
import Start from '../views/StartPage.vue'
import How from '../views/HowToOrder.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/start',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: 'shop',
    name: 'Shop',
    component: Shop
  },
  {
    path: '/home',
    name: 'Start',
    component: Start
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop
  },
  {
    path: '/howtoorder',
    name: 'HowToOrder',
    component: How
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
