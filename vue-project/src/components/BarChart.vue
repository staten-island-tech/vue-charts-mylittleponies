<template>
  <div class="container">
    <Bar :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

export default {
  name: 'BarChart',
  components: { Bar },
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
      chartData: {
        labels: ['Native American', 'Asian', 'Black', 'Latinx', 'White', 'Multi Racial', 'Unknown'],
        datasets: [{
          label: ['Dataset'],
          backgroundColor: ['#fb6f92', '#ff8fab', '#ffb3c6', '#ffc2d1', '#ffe5ec'],
          data: [this.nativeCount, this.asianCount, this.blackCount, this.latinxCount, this.whiteCount, this.multiCount, this.unknownCount]
        }]
      },
      chartOptions: {
        responsive: true
      }
    };
  },
};
</script>


<style scoped>
  h1{
    text-align: center;
  }
  .container{
  animation: loadIn 0.75s; 
    display: grid;
    grid-template-columns: 2fr 2fr;
    padding: 0 2rem;
}

@keyframes loadIn{
  from{
opacity: 0;
transform: rotateX(-10deg);
  }
  to{
opacity: 1;
transform: rotateX(0);
  }
}

</style>