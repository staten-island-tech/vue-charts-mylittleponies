<template>
    <div></div>
</template>

<script setup>
import {ref, onMounted} from "vue";
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


<style scoped></style>