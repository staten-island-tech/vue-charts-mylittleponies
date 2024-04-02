<script setup>
import PieChart from './components/PieGraph.vue'
</script>

<template>
  <PieChart v-if= "loaded"
  :asianCount = 'asianCount.length'
  :hispanicCount = 'hispanicCount.length'
  :blackCount = 'blackCount.length'
  :whiteCount = 'whiteCount.length'
  />
<button class="button-2" @click="showDropDown = !showDropDown">Change</button>
<div id="myDropdown" class="dropdown-content" v-if="showDropDown">
        <a class="dropDown"><li> Hispanic </li></a>
        <a class="dropDown"><li> White Non-Hispanic </li></a>
        <a class="dropDown"><li> Black Non-Hispanic </li></a>
        <a class="dropDown"><li> Asian & Pacific Islander </li></a>
      </div>
<PieChart></PieChart>
</template>


<script>

export default {
    name: 'App',
    components: {
        PieChart
    },
    
  data() {
    return {
      showDropDown: false,
      loaded: false,
      asianCount: [],
      hispanicCount: [],
      blackCount: [],
      whiteCount: [],
    }

  },
    mounted: function (){
      this.fetchData();
    },
    methods: {
      fetchData: async function() {
        this.loaded = false 

        try{ 
          const results =  await fetch('https://data.cityofnewyork.us/resource/unse-x4pq.json');

          const data = await results.json();
          let scores = data.results;

          this.asianCount = data.filter(element => element.scores.includes ('Asian'))
          this.hispanicCount = data.filter(element => element.scores.includes ('Hispanic'))
          this.blackCount = data.filter(element => element.scores.includes('Black'))
          this.whiteCount = data.filter(element => element.scores.includes('White'))

          console.log(data);
          this.loaded = true
        } catch(error){
          console.log(error);
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

.dropDown{
  line-height: 20px;
}

.button-2 {
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

.button-2:hover,
.button-2:focus {
  background-color: #F082AC;
}
</style>


