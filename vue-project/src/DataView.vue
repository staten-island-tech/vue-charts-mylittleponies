<template>
    <h2> API DATA </h2>
  <div v-if="!data">Loading...</div>
  <p v-else> {{ data }}</p>
</template>

<script>
  export default {
    data() {
      return {
        data: null,
      };
    },
    methods: {
      async fetchData() {      
        const response = await fetch("https://data.cityofnewyork.us/resource/unse-x4pq.json");      
        this.data = await response.json();
      },    
    },
    mounted() {
      this.fetchData();
    },
  };
</script>