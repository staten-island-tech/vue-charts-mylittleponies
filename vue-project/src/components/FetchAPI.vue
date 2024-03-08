<template>
    <div></div>
</template>

<script setup>

const URL = "https://data.cityofnewyork.us/resource/unse-x4pq.json"

import {ref, onMounted} from "vue";
const scores = ref("");
async function getScores() {
    let res = await fetch(URL);
    let data = await res.json();
    scores.value = data;
}

onMounted(() => {
    getScores();
});

console.log(data)

</script>


<style scoped></style>