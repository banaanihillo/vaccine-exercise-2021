<template>
  <div>
    <nav>
      <router-link to="/orders/antiqua">Antiqua</router-link>
      <router-link to="/orders/solar-buddhica">
        Solar Buddhica
      </router-link>
      <router-link to="/orders/zerpfy">Zerpfy</router-link>
    </nav>
    <section>
      <router-view>
        <VaccineProducer />
      </router-view>
    </section>
  </div>
</template>

<script>
import VaccineProducer from "./VaccineProducer.vue"
export default {
  name: "VaccineOrders",
  components: {
    VaccineProducer
  }
}
</script>

<style>

</style>
