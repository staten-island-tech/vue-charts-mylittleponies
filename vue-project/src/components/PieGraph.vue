<template>
  <div class="pies">
  <Pie :data="pieData" :options="pieOptions"/>
  </div>
</template>


<script lang="ts">
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'

ChartJS.register(ArcElement, Tooltip, Legend)


export default {
  name: 'PieChart',
  components: { Pie },
  data() {
    return {
        pieData: {
        labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
        datasets: [{ backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
        data: [40, 20, 80, 10] } ]
    },
    pieOptions: {
    responsive: true,
    maintainAspectRatio: true,
    }
    }
  },
}
</script>

<style>

.pies-container {
  margin: auto;
  width: 800px;
}

.pies-container {
  width: 400px;
  float: left;
}

</style>