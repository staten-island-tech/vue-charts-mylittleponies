<template>
  <Pie= 
  id="my-chart-id"
  :options="chartOptions"
  :data="chartData"
  />
</template>

<script>
import {Bar} from 
import { Pie } from 'vue-chartjs'

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