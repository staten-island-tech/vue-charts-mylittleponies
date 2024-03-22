<script setup>
import PieChart from './components/PieGraph.vue'
</script>

<template>
<h2> Pie Pie Pie</h2>
<<<<<<< HEAD
<Pie :data="data" :options="options" />
=======

<h2> </h2>
<PieChart></PieChart>
>>>>>>> parent of 909f3e3 (Merge branch 'main' of https://github.com/staten-island-tech/vue-charts-mylittleponies)
</template>

<script>

<<<<<<< HEAD
<script lang="ts">
import { Chart } from 'chart.js';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'
import * as chartConfig from './components/PieGraph.vue'

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
    name: 'App',
    componenets: {
        Pie
    },
    data() {
        return chartConfig
    },
}

=======
export default {
  name: 'App',
  components: { PieChart }
}
>>>>>>> parent of 909f3e3 (Merge branch 'main' of https://github.com/staten-island-tech/vue-charts-mylittleponies)
</script>
