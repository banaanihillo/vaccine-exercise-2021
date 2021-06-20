<template>
  <div>
    <nav>
      <router-link to="/">Vaccinations</router-link>
      <router-link to="/antiqua">Antiqua</router-link>
      <router-link to="/solar-buddhica">Solar Buddhica</router-link>
      <router-link to="/zerpfy">Zerpfy</router-link>
    </nav>
    <main>
      <router-view />
    </main>
    <footer>
      <small>
        It's {{today.slice(0, today.indexOf("T"))}} today.
        (Not really, but for the purposes of this exercise.)
      </small>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      today: new Date("2021-04-12T11:10:06.473587Z").toISOString()
    }
  }
}
</script>

<style>
body {
  background-color: black;
  color: magenta;
  text-align: center;
}

a:link {
  color: cyan;
}

a:visited {
  color: violet;
}

nav {
  display: flex;
  flex-flow: row nowrap;
  gap: 1em;
  justify-content: center;
}
</style>
