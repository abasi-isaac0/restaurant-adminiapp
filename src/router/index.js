import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
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
    path: '/orders',
    name: 'Orders',
    // route level code-splitting
    // this generates a separate chunk (order.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "order" */ '../views/orders.vue')
  },
  {
    path: '/weekends',
    name: 'Weekends',
    // route level code-splitting
    // this generates a separate chunk (weekends.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "weekends" */ '../views/Weekends.vue')
  },
  {
    path: '/Cocktails',
    name: 'Cocktails',
    // route level code-splitting
    // this generates a separate chunk (weekends.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "cocktail" */ '../views/Cocktails.vue')
  }
  
  

]

const router = new VueRouter({
  routes
})

export default router
