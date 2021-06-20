<template>
  <div>
    <p>
      Total of {{vaccines.count}} vaccinations administered.
    </p>
    <p>
      {{vaccines.lastMonth.length}} vaccinations in the last 30 days.
    </p>
  </div>
</template>

<script>
import vaccinations from "../../resources/vaccinations.json"
export default {
  data() {
    return {
      vaccines: {
        count: vaccinations.length,
        lastMonth: vaccinations.filter((vaccination) => {
          return (
            new Date(vaccination.vaccinationDate)
            >= new Date("2021-03-12")
          )
        })
      }
    }
  }
}
</script>

<style>

</style>
