import Vue from 'vue'
import Vuex from 'vuex'
import vaccinations from "../../resources/vaccinations.json"
import antiqua from "../../resources/antiqua.json"
import solarBuddhica from "../../resources/solarBuddhica.json"
import zerpfy from "../../resources/zerpfy.json"

Vue.use(Vuex)


const today = new Date("2021-04-12T11:10:06.473587Z")
// 86400000 milliseconds in a day
const thirtyDays = (86400000 * 30)

const expiredVaccines = (orders) => {
  return orders.filter((vaccine) => {
    return (
      new Date(vaccine.arrived)
      <= new Date(today - thirtyDays)
    )
  })
}
const expiredInjections = (expiredVaccines) => {
  return expiredVaccines.reduce((accumulator, vaccine) => {
    return (accumulator + vaccine.injections)
  }, 0)
}

export default new Vuex.Store({
  state: {
    vaccinations,
    antiqua: {
      allOrders: antiqua,
      expired: expiredInjections(expiredVaccines(antiqua))
    },
    solarbuddhica: {
      allOrders: solarBuddhica,
      expired: expiredInjections(expiredVaccines(solarBuddhica))
    },
    zerpfy: {
      allOrders: zerpfy,
      expired: expiredInjections(expiredVaccines(zerpfy))
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
