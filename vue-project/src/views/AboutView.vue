<template>
<h2> ネーム </h2>
<div>
<p> name - the core of one's identity</p>
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
    justify-content: center;
}
p{
    justify-content: center;
}
</style>