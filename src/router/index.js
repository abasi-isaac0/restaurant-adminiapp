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
    path: '/orders',
    name: 'Orders',
    // route level code-splitting
    // this generates a separate chunk (order.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "order" */ '../views/orders.vue')
  },
  {
  path: '/Message',
    name: 'Message',
    // route level code-splitting
    // this generates a separate chunk (Message.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Message" */ '../views/Message.vue')
  },
  {
    path: '/Subscribers',
    name: 'Subscribers',
    // route level code-splitting
    // this generates a separate chunk (Subscribers.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Subscribers" */ '../views/Subscribers.vue')
  },
  {
    path: '/Registration',
    name: 'Registration',
    // route level code-splitting
    // this generates a separate chunk (Subscribers.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "cocktail" */ '../views/Registration.vue')
  }
  
  

]

const router = new VueRouter({
  routes
})

export default router
