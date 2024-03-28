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
        labels: ['Native American','Asian', 'White', 'Black', 'Latinx', 'Multi-Racial'],
        datasets: [{ backgroundColor: ['#fb6f92', '#ff8fab', '#ffb3c6', '#ffc2d1', '#ffe5ec'],
        data: [this.asianCount, this.black, this.hispanicCount, this.whiteCount] } ]
    },  
    pieOptions: {
    responsive: true,
    maintainAspectRatio: true,
    }
    }
  },

  props:{
    asianCount: Number,
    blackCount: Number,
    hispanicCount: Number,
    whiteCount: Number
  },
}

export const options = {
  responsive: true,
  maintainAspectRatio: true
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