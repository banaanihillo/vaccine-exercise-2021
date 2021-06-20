<template>
  <div>
    <p>
      {{orders.allOrders.length}} {{producerName}} orders made.
    </p>
    <p>
      {{orders.expired}} {{producerName}} injections have expired.
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
  }
}
</script>

<style>

</style>
