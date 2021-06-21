<template>
  <div>
    <p>
      {{orders.length}} {{producerName}} orders made.
    </p>
    <p>
      {{expired}} {{producerName}} injections have expired.
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
    }
  },
  methods: {
    expiredVaccines(orders) {
      return orders.filter((vaccine) => {
        return (
          new Date(vaccine.arrived)
          <= this.$store.state.date.thirtyDaysAgo
        )
      })
    },
    expiredInjections(expiredVaccines) {
      return expiredVaccines.reduce((accumulator, vaccine) => {
        return (accumulator + vaccine.injections)
      }, 0)
    }
  }
}
</script>

<style>

</style>
