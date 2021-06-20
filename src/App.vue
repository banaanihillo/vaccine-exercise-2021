<template>
  <div>
    <nav>
      <router-link to="/">Vaccinations</router-link>
      <router-link to="/orders">Orders</router-link>
    </nav>
    <main>
      <router-view :today="today" :thirtyDays="thirtyDays">
        <Vaccinations />
        <VaccineOrders />
      </router-view>
    </main>
    <footer>
      <small>
        It's {{dateISO}} today.
        (Not really, but for the purposes of this exercise.)
      </small>
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
      today: new Date("2021-04-12T11:10:06.473587Z"),
      // 86400000 milliseconds in a day
      thirtyDays: (86400000 * 30)
    }
  },
  computed: {
    dateTimeISO() {
      return this.today.toISOString()
    },
    dateISO() {
      return this.dateTimeISO.slice(
        0, this.dateTimeISO.indexOf("T")
      )
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
</style>
