<template>
  <div>
    <p>
      Total of {{vaccinations.length}} vaccinations administered.
    </p>
    <p>
      {{lastMonth.length}} vaccinations in the last 30 days.
    </p>
  </div>
</template>

<script>

export default {
  name: "Vaccinations",
  computed: {
    vaccinations() {
      return this.$store.state.vaccinations
    },
    lastMonth() {
      return this.vaccinations.filter((vaccination) => {
        return (
          new Date(vaccination.vaccinationDate)
          >= new Date("2021-03-12")
        )
      })
    }
  }
}

</script>

<style>

</style>
