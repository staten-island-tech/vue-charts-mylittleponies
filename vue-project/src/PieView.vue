<script setup>
import PieChart from './components/PieGraph.vue'
</script>

<template>
<button class="button-2" @click="showDropDown = !showDropDown">Change</button>
<div id="myDropdown" class="dropdown-content" v-if="showDropDown">
        <a><li> Hehe </li></a>
        <a><li> Meow </li></a>
        <a><li> Hi </li></a>
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
      showDropDown: false
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

.button-1:hover,
.button-1:focus {
  background-color: #F082AC;
}
</style>
