<template>
  <div>
    <p>
      {{solarBuddhica.orders.length}} Solar Buddhica orders made.
    </p>
    <p>
      {{solarBuddhica.expired}} Solar Buddhica injections have expired.
    </p>
  </div>
</template>

<script>

export default {
  name: "SolarBuddhicaVaccines",
  computed: {
    solarBuddhica() {
      return this.$store.state.solarBuddhica
    }
  }
}
</script>

<style>

</style>
