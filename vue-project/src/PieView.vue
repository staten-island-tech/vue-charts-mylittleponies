
<template>
<h2> Pie Pie Pie</h2>
<Pie :data="data" :options="options" />
</template>


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

</script>

<style>

</style>