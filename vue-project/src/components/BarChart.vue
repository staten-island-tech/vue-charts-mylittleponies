<template>
  <div class="container">
    <Bar v-if="loaded" :data="chartData" />
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs';
import {ref, onMounted} from "vue";
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)


export default {
  name: 'BarChart',
  components: { Bar },
  data: () => ({
    loaded: false,
    chartData: null,
  }),}

onMounted(async()=> {
  try{
    let res = await fetch("https://data.cityofnewyork.us/resource/unse-x4pq.json");
    chartData = res.json();
  }
  catch(error) {
    console.log(error)
  } 
})

</script>
