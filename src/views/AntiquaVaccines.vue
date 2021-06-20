<template>
  <div>
    <p>
      {{antiqua.orders.length}} Antiqua orders made.
    </p>
    <p>
      {{antiqua.expired}} Antiqua injections have expired.
    </p>
  </div>
</template>

<script>

export default {
  name: "AntiquaVaccines",
  computed: {
    antiqua() {
      return this.$store.state.antiqua
    }
  }
}
</script>

<style>

</style>
