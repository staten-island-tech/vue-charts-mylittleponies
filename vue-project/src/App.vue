<script setup>
import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/PieGraph.vue
import BarChart from './components/BarChart.vue'
import PieChart from './components/PieGraph.vue';
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="/PinkKawaii.png?url" width="200" height="220" />

    <div class="wrapper">
      <HelloWorld msg="アリガトウ" />
      <nav class="wrapper">
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/chart">Score</RouterLink>
      <RouterLink to="/pie">Demographics</RouterLink>
  </nav>
    </div>
  </header>

  <RouterView />
</template>

<script>

export default {
  name: 'App',
  components: { PieChart }
}

</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.wrapper a.router-link-exact-active {
  color: #EA4C89;
}

.wrapper a.router-link-exact-active:hover {
  background-color: black;
}

.wrapper a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid black;
}

.wrapper a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
