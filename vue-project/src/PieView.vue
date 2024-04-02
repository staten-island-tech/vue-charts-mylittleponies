<script setup>
import PieChart from './components/PieGraph.vue'
</script>

<template>
  <PieChart 
    v-if="loaded" 
    :nativeCount="nativeCount" 
    :asianCount="asianCount" 
    :blackCount="blackCount" 
    :latinxCount="latinxCount" 
    :whiteCount="whiteCount" 
    :multiCount="multiCount" 
    :unknownCount="unknownCount"
  />
<PieChart></PieChart>
</template>


<script>

export default {
    name: 'Pie',
    components: {
        PieChart
    },
    
  data() {
    return {
      loaded: false,
      nativeCount: [],
      asianCount: [],
      blackCount: [],
      latinxCount: [],
      whiteCount: [],
      multiCount: [],
      unknownCount: []
    }

  },
  methods: {
    async fetchData() {
      this.loaded = false;
      try {
        const response = await fetch('https://data.cityofnewyork.us/resource/unse-x4pq.json');
        const data = await response.json();

        const sevenObject = data[7];

        this.nativeCount = parseInt(sevenObject.native_american.replace(',', ''));
        this.asianCount = parseInt(sevenObject.asian.replace(',', ''));
        this.blackCount = parseInt(sevenObject.black.replace(',', ''));
        this.latinxCount = parseInt(sevenObject.latinx.replace(',', ''));
        this.whiteCount = parseInt(sevenObject.white.replace(',', ''));
        this.multiCount = parseInt(sevenObject.multi_racial.replace(',', ''));
        this.unknownCount = parseInt(sevenObject.unknown.replace(',', ''));

        this.loaded = true;
      } catch (error) {
        console.error(error);
      }
    }
  }

  }


</script>

<style>



button{
    width: 70px;
    height: 30px;
}

li{
    font-size: 20px;
    display: flex;
    
}


</style>


