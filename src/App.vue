<template>
  <main>
    <nav>
      <router-link to="/">Vaccinations</router-link>
      <router-link to="/antiqua">Antiqua</router-link>
      <router-link to="/solar-buddhica">Solar Buddhica</router-link>
      <router-link to="/zerpfy">Zerpfy</router-link>
    </nav>
    <router-view />
  </main>
</template>

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
