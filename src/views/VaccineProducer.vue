<template>
  <div>
    <h2> {{producerName}} </h2>
    <p>
      {{fulfilledOrders.length + pendingOrders.length}} orders made.
    </p>
    <p>
      {{fulfilledOrders.length}} orders fulfilled.
    </p>
    <p aria-live="polite">
      {{expiredInjections}} injections have expired.
      <br />
      {{validInjections}} valid injections are still available.
    </p>
  </div>
</template>

<script>

export default {
  name: "VaccineProducer",
  computed: {
    fulfilledOrders() {
      return this.$store.state[this.producerKey].fulfilledOrders
    },
    pendingOrders() {
      return this.$store.state[this.producerKey].pendingOrders
    },
    expiredInjections() {
      return this.numberOfInjections(
        this.expiredVaccines(this.pendingOrders)
      )
    },
    valid() {
      return this.validVaccines(this.pendingOrders)
    },
    validInjections() {
      return this.numberOfInjections(this.valid)
    },
    producerName() {
      return (
        this.$route.params.producer
          .replace(/-/g, " ")
          .split(" ")
          .map((word) => {
            return (word[0].toUpperCase() + word.slice(1, word.length))
          })
          .join(" ")
      )
    },
    producerKey() {
      return this.$route.params.producer.replace(/-/g, "")
    },
    thirtyDaysAgo() {
      return this.$store.state.date.thirtyDaysAgo
    }
  },
  methods: {
    expiredVaccines(orders) {
      return orders.filter(this.hasExpired)
    },
    numberOfInjections(vaccines) {
      return vaccines.reduce((accumulator, vaccine) => {
        return (accumulator + vaccine.injections)
      }, 0)
    },
    hasExpired(vaccine) {
      return (
        new Date(vaccine.arrived)
        <= this.thirtyDaysAgo
      )
    },
    validVaccines(orders) {
      return orders.filter((vaccine) => {
        return (!this.hasExpired(vaccine))
      })
    }
  }
}
</script>

<style>

</style>
