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
    path: '/antiqua',
    name: 'Antiqua',
    component: () => import('../views/AntiquaVaccines.vue')
  },
  {
    path: "/solar-buddhica",
    name: "SolarBuddhica",
    component: () => import("../views/SolarBuddhicaVaccines.vue")
  },
  {
    path: "/zerpfy",
    name: "Zerpfy",
    component: () => import("../views/ZerpfyVaccines.vue")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
