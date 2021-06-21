import Vue from 'vue'
import Vuex from 'vuex'
import vaccinations from "../../resources/vaccinations.json"
import antiqua from "../../resources/antiqua.json"
import solarBuddhica from "../../resources/solarBuddhica.json"
import zerpfy from "../../resources/zerpfy.json"

Vue.use(Vuex)


const today = new Date("2021-04-12T11:10:06.473587Z")
// 86400000 milliseconds in a day
const lastThirtyDays = (observationDate) => {
  return new Date(observationDate - (86400000 * 30))
}

const fulfilledOrders = (orders) => {
  return orders.filter(fulfilled)
}
const pendingOrders = (orders) => {
  return orders.filter((order) => {
    return (!fulfilled(order))
  })
}
const fulfilled = (order) => {
  return vaccinations.some((vaccination) => {
    return (vaccination.sourceBottle === order.id)
  })
}

export default new Vuex.Store({
  state: {
    vaccinations,
    antiqua: {
      fulfilledOrders: fulfilledOrders(antiqua),
      pendingOrders: pendingOrders(antiqua)
    },
    solarbuddhica: {
      fulfilledOrders: fulfilledOrders(solarBuddhica),
      pendingOrders: pendingOrders(solarBuddhica)
    },
    zerpfy: {
      fulfilledOrders: fulfilledOrders(zerpfy),
      pendingOrders: pendingOrders(zerpfy)
    },
    date: {
      today,
      thirtyDaysAgo: lastThirtyDays(today)
    }
  },
  mutations: {
    changeDate(state, payload) {
      state.date.today = payload.date
      state.date.thirtyDaysAgo = lastThirtyDays(payload.date)
    }
  },
  actions: {
  },
  modules: {
  }
})
