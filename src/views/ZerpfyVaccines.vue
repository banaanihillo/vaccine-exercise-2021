<template>
  <div>
    <p>
      {{zerpfy.orders.length}} Zerpfy orders made.
    </p>
    <p>
      {{zerpfy.expired}} Zerpfy injections have expired.
    </p>
  </div>
</template>

<script>

export default {
  name: "ZerpfyVaccines",
  computed: {
    zerpfy() {
      return this.$store.state.zerpfy
    }
  }
}
</script>

<style>

</style>
