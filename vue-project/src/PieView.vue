<script setup>
import PieChart from './components/PieGraph.vue'
</script>

<template>
<button @click="showDropDown = !showDropDown">Change</button>
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
</style>
