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
</template>


<script>
import PieChart from './components/PieGraph.vue';
import { ref, onMounted } from 'vue';

export default {
  components: {
    PieChart
  },
  data() {
    return {
      loaded: false,
      nativeCount: 0,
      asianCount: 0,
      blackCount: 0,
      latinxCount: 0,
      whiteCount: 0,
      multiCount: 0,
      unknownCount: 0
    };
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
  },
  mounted() {
    this.fetchData();
  }
};
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


