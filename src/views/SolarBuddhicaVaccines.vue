<template>
  <div>
    <p>
      {{solarBuddhica.length}} Solar Buddhica vaccines available.
    </p>
  </div>
</template>

<script>
import solarBuddhica from "../../resources/solarBuddhica.json"
export default {
  data() {
    return {
      solarBuddhica
    }
  }
}
</script>

<style>

</style>
