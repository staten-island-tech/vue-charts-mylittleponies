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

let chartData = null;
const loaded = ref(false);

onMounted(async()=> {
  try{
    let res = await fetch("https://data.cityofnewyork.us/resource/unse-x4pq.json");
    chartData = await res.json();
  }
  catch(error) {
    console.log(error)
  } 
})

</script>
