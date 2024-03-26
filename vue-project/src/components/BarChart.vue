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
  const URL = "https://data.cityofnewyork.us/resource/25th-nujf.json?$query=SELECT%20brth_yr%2C%20gndr%2C%20ethcty%2C%20nm%2C%20cnt%2C%20rnk";

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
        datasets: [ { data: [40, 20, 12] } ]
      },
      chartOptions: {
        responsive: true
      }
    }
  }
}


</script>
