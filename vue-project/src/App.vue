<script setup>
import HelloWorld from './components/HelloWorld.vue'
import BarChart from './components/BarChart.vue'
import PieChart from './components/PieGraph.vue';
</script>

<template>
  <header class="navbar">
    <img alt="Vue logo" class="logo" src="/PinkKawaii.png?url" width="200" height="220" />
    <nav class="wrapper">
      <div class="wrapper">
      <HelloWorld msg="アリガトウ" />
      <nav class="wrapper">
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/data">All Data</RouterLink>
      <RouterLink to="/chart">Most Common Names</RouterLink>
      <RouterLink to="/pie">Names by Race</RouterLink>
    </nav>
    </div>
  </nav>
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
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: #e8b3c7;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px 20px;
  display: flex;
  justify-content: center;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
  width: 160px;
  height: 180px;
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
  .navbar {
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  .navbar .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
