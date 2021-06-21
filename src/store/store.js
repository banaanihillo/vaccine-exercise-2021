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

export default new Vuex.Store({
  state: {
    vaccinations,
    antiqua,
    solarbuddhica: solarBuddhica,
    zerpfy,
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
