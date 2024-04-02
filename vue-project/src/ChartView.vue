<template>
  <BarChart 
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
import BarChart from './components/BarChart.vue'

export default {
  name: 'Bar',
  components: {
    BarChart
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
  async mounted() {
    await this.fetchData();
  },
  methods: {
    async fetchData() {
      this.loaded = false;
      try {
        const response = await fetch('https://data.cityofnewyork.us/resource/unse-x4pq.json');
        const data = await response.json();
        console.log('Raw data:', data);

        const firstObject = data[0];
        console.log('First object:', firstObject);

        this.nativeCount = parseInt(firstObject.native_american.replace(',', ''));
        this.asianCount = parseInt(firstObject.asian.replace(',', ''));
        this.blackCount = parseInt(firstObject.black.replace(',', ''));
        this.latinxCount = parseInt(firstObject.latinx.replace(',', ''));
        this.whiteCount = parseInt(firstObject.white.replace(',', ''));
        this.multiCount = parseInt(firstObject.multi_racial.replace(',', ''));
        this.unknownCount = parseInt(firstObject.unknown.replace(',', ''));

        this.loaded = true;
      } catch (error) {
        console.error(error);
      }
    }
  }
}
</script>
<style>

.dropDown{
  line-height: 20px;
}

.button-1 {
  background-color: #EA4C89;
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  font-size: 14px;
  height: 40px;
  margin: 0;
  outline: none;
  padding: 10px 16px;
  width: 100px;
  text-align: center;
  transition: color 100ms;
}

.button-1:hover,
.button-1:focus {
  background-color: #F082AC;
}
</style>