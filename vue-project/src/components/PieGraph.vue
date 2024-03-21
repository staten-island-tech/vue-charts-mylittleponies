<template>
  <Pie= 
  :options="pieOptions"
  :data="pieData"
  />
</template>

<script lang ="ts">
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'
import * as chartConfig from './chartConfig.js'

ChartJS.register(ArcElement, Tooltip, Legend)


export default {
  name: 'PieChart',
  components: { Pie },
  data() {
    return {
        pieData: {
        labels: ['SITech', 'Stuy', 'Bronx Sci', 'Brooklyn Tech'],
        datasets: [{ backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
        data: [40, 20, 80, 10] } ]
    },
    pieOptions: {
    responsive: true,
    }
    }
  },
}
</script>

<style>

</style>