import Vue from 'vue'
import VueRouter from 'vue-router'
import Vaccinations from "../views/Vaccinations.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Vaccinations',
    component: Vaccinations
  },
  {
    path: '/orders',
    name: 'VaccineOrders',
    component: () => import('../views/VaccineOrders.vue')
  },
  {
    path: "/orders/:producer",
    name: "VaccineOrdersByProducer",
    component: () => import("../views/VaccineProducer.vue")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
