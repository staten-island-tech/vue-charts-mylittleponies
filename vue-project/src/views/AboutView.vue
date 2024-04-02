<template>
<div>
<h2> 試験 </h2>
<p> test - a short written or spoken examination of a person's <br>proficiency or knowledge</p>
<<img src="/testPic.jpg" alt="SHSAT" width="300" height="220">
</div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const scores = ref("");
async function getScores() {
    let res = await fetch("https://data.cityofnewyork.us/resource/unse-x4pq.json");
    let data = await res.json();
    scores.value = data;
}

onMounted(() => {
    getScores();
});



</script>

<style>
h2{
    margin-top: 0;
    justify-content: center;
}
</style>