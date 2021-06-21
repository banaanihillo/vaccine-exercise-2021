<template>
  <div>
    <nav>
      <router-link to="/">Vaccinations</router-link>
      <router-link to="/antiqua">Antiqua</router-link>
      <router-link to="/solar-buddhica">Solar Buddhica</router-link>
      <router-link to="/zerpfy">Zerpfy</router-link>
    </nav>
    <main>
      <router-view>
        <Vaccinations />
        <VaccineOrders />
      </router-view>
    </main>
    <footer>
        Observation date: <time :datetime="dateISO">
          {{dateISO}}
        </time>

        <form @submit.prevent="submitDate">
          <fieldset>
            <legend>
              Select a month and day (Year 2021)
            </legend>
            <label>
              Month
              <select v-model="input.month">
                <option v-for="month in 12" :key="`month-${month}`">
                  {{month}}
                </option>
              </select>
            </label>

            <label>
              Day
              <select v-model="input.day">
                <option v-for="day in 31" :key="`day-${day}`">
                  {{day}}
                </option>
              </select>
            </label>
          </fieldset>

          <button type="submit"> Submit </button>
        </form>

        <p v-if="error">
          Looks like that date is invalid.
          Recheck the number of days in the selected month.
        </p>
    </footer>
  </div>
</template>

<script>
import Vaccinations from "./views/Vaccinations.vue"
import VaccineOrders from "./views/VaccineOrders.vue"
export default {
  name: "App",
  components: {
    Vaccinations,
    VaccineOrders
  },
  data() {
    return {
      input: {
        month: 1,
        day: 1
      },
      error: false
    }
  },
  computed: {
    dateTimeISO() {
      return this.$store.state.date.today.toISOString()
    },
    dateISO() {
      return this.dateTimeISO.slice(
        0, this.dateTimeISO.indexOf("T")
      )
    }
  },
  methods: {
    zeroFill(input) {
      let zeroFilled = {
        month: input.month,
        day: input.day
      }
      if (input.month < 10) {
        zeroFilled.month = "0" + input.month
      }
      if (input.day < 10) {
        zeroFilled.day = "0" + input.day
      }
      return zeroFilled
    },
    submitDate() {
      this.error = false
      const {month, day} = this.zeroFill(this.input)
      const date = new Date(`2021-${month}-${day}`)
      if (date.toString() === "Invalid Date") {
        return this.error = true
      }
      this.$store.commit("changeDate", {
        date
      })
    }
  }
}
</script>

<style>
body {
  background-color: black;
  color: magenta;
  text-align: center;
}

a:link {
  color: cyan;
}

a:visited {
  color: violet;
}

nav {
  display: flex;
  flex-flow: row nowrap;
  gap: 1em;
  justify-content: center;
  padding-bottom: 1em;
}

select,
button {
  background-color: plum;
  width: 4em;
}

form {
  margin-top: 1em;
}

fieldset {
  width: 15em;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  gap: 1em;
  margin: 1em auto;
}
</style>
