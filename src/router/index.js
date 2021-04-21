import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../App.vue'
import Shop from '../views/Shop.vue'
import Start from '../views/StartPage.vue'
import How from '../views/HowToOrder.vue'
import Size from '../views/SizeChart.vue'
import Contact from '../views/Contact.vue'
import Prod from '../views/ProductDetail.vue'
Vue.use(VueRouter)

const routes = [
   {
    path: '/',
    name: 'Home',
    component: Start
  },
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
  },
  {
    path: '/sizechart',
    name: 'SizeChart',
    component: Size
  }
  ,
  {
    path: '/contactus',
    name: 'Contact',
    component: Contact
  }

  ,
  {
    path: '/product-details',
    name: 'Prod',
    component: Prod
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
