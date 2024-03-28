<template>
  <div class="container">
    <!-- <Bar v-if="loaded" :data="chartData" /> -->
    <Bar :data="chartData" :options="chartOptions"/>
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs';
// import {ref, onMounted} from "vue";
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)


async function apiData(){
  const URL = "https://data.cityofnewyork.us/resource/unse-x4pq.json";

  const response = await fetch(URL)
  const dataPoints = await response.json()
  console.log(dataPoints)
}
apiData()

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: [ 'January', 'February', 'March' ],
  
        datasets: [{ backgroundColor: ['#fb6f92', '#ff8fab', '#ffb3c6', '#ffc2d1', '#ffe5ec'],
        data: [40, 20, 12] } ]
      },
      chartOptions: {
        responsive: true
      }
    }
  },

  



}

</script>
