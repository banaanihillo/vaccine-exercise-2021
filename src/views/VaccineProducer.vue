<template>
  <div>
    <p>
      {{orders.length}} {{producerName}} orders made.
    </p>
    <p>
      {{expired}} {{producerName}} injections have expired.
    </p>
    <p>
      {{valid}} valid {{producerName}} injections are still available.
    </p>
  </div>
</template>

<script>

export default {
  name: "VaccineProducer",
  computed: {
    orders() {
      return this.$store.state[this.producerKey]
    },
    expired() {
      return this.expiredInjections(this.expiredVaccines(this.orders))
    },
    valid() {
      return this.expiredInjections(this.validVaccines(this.orders))
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
    expiredInjections(expiredVaccines) {
      return expiredVaccines.reduce((accumulator, vaccine) => {
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
