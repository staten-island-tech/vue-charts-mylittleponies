<script setup>
import BarChart from './components/BarChart.vue'
</script>


<template>

 <BarChart></BarChart>


</template>

<script>

export default {
  name: 'App',
  components: { BarChart },

  
  data() {
    return {

      // loaded: false,
    }
  },

  // mounted: function(){
  //   this.fetchData();
  // }
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