<template>
  <div>
    <p>
      {{zerpfy.length}} Zerpfy orders made.
    </p>
    <p>
      {{expiredVaccines.length}} vaccines have expired.
    </p>
  </div>
</template>

<script>
import zerpfy from "../../resources/zerpfy.json"
export default {
  props: {
    today: Date,
    thirtyDays: Number
  },
  data() {
    return {
      zerpfy,
      expiredVaccines: zerpfy.filter((zerpfyVaccine) => {
        return (
          new Date(zerpfyVaccine.arrived)
          <= new Date(this.$props.today - this.$props.thirtyDays)
        )
      })
    }
  }
}
</script>

<style>

</style>
