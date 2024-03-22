<script setup>
import BarChart from './components/BarChart.vue'
</script>


<template>
<button @click="showDropDown = !showDropDown">Change</button>
 <h2> </h2>
 <BarChart></BarChart>


</template>

<script>
export default {
  name: 'App',
  components: { BarChart }
}
</script>

<style>

</style>