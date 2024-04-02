<template>
  <div class="container">
  <Pie :data="pieData" 
  :options="pieOptions"
  />
  </div>
</template>


<script lang="ts">
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'



ChartJS.register(ArcElement, Tooltip, Legend)


export default {
  name: 'PieChart',
  components: { Pie },
  props: {
    nativeCount: Number,
    asianCount: Number,
    blackCount: Number,
    latinxCount: Number,
    whiteCount: Number,
    multiCount: Number,
    unknownCount: Number
  },
  data() {
    return {
      pieData: {
        labels: ['Native American', 'Asian', 'Black', 'Latinx', 'White', 'Multi Racial', 'Unknown'],
        datasets: [{
          label: ['Dataset'],
          backgroundColor: ['#fb6f92', '#ff8fab', '#ffb3c6', '#ffc2d1', '#ffe5ec'],
          data: [this.nativeCount, this.asianCount, this.blackCount, this.latinxCount, this.whiteCount, this.multiCount, this.unknownCount]
        }]
      },
      pieOptions: {
        responsive: true
      }
    };
  },
};
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