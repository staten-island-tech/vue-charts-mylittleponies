<script setup>
import BarChart from './components/BarChart.vue'
</script>


<template>
<button class="button-1" @click="showDropDown = !showDropDown">Change</button>
<div id="myDropdown" class="dropdown-content" v-if="showDropDown">
        <a class="dropDown"><li> Female </li></a>
        <a class="dropDown"><li> Male </li></a>
      </div>
 <BarChart></BarChart>


</template>

<script>

export default {
  name: 'App',
  components: { BarChart },

  
  data() {
    return {
      showDropDown: false
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