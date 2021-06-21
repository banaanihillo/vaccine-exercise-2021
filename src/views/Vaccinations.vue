<template>
  <div>
    <p>
      Total of {{
        vaccinationsByObservationDate.length
      }} vaccinations administered.
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
    date() {
      return this.$store.state.date.today
    },
    vaccinationsByObservationDate() {
      return this.vaccinations.filter((vaccination) => {
        return (
          new Date(vaccination.vaccinationDate)
          <= this.date
        )
      })
    }
  }
}

</script>

<style>

</style>
