<template>
  <div class="container">
    <Bar v-if="loaded" :data="chartData" />
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs';
// import {ref, onMounted} from "vue";
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data: () => ({
    loaded: false,
    chartData: []
  }),
  async mounted () {
    this.loaded = false

    try {
      const { userlist } = await fetch('https://data.cityofnewyork.us/resource/unse-x4pq.json')
      this.chartdata = userlist
      this.loaded = true

    } catch (e) {
      console.error(e)
    }
  }
}

async function apiData(){
  const URL = "https://data.cityofnewyork.us/resource/unse-x4pq.json";

  const response = await fetch(URL)
  const dataPoints = await response.json()
  console.log(dataPoints)
}
apiData()

// export default {
//   name: 'BarChart',
//   components: { Bar },
//   data() {
//     return {
//       chartData: {
//         labels: [ 'January', 'February', 'March' ],
//         datasets: [ { data: [40, 20, 12] } ]
//       },
//       chartOptions: {
//         responsive: true
//       }
//     }
//   }
// }

// let totalTesters = [];
// let pplRace = [];

// async function displayChart() {
//   await apiData()

//   const data = {
//     labels: totalTesters,
//     datasets: [{
//       label: 'Hi',
//       data: pplRace,
//     }]
   
//   }
// }
// displayChart()

// const config = {
//   type: 'bar',
//   data,
//   options: {
//     scales:{
//       y:{
//         beginAtZero: true
//       }
//     }
//   }
  
// };

// const myChart = new Chart(
//   document.getElementById('myChart'),
//   config
// )

// myChart()




// export default {
//   name: 'BarChart',
//   components: { Bar },
//   data: () => ({
//     loaded: false,
//     chartData: null,
//   }),}

// onMounted(async()=> {
//   try{
//     let res = await fetch("https://data.cityofnewyork.us/resource/unse-x4pq.json");
//     chartData = res.json();
//   }
//   catch(error) {
//     console.log(error)
//   } 
// })

</script>
