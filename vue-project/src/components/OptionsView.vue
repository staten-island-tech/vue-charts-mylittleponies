<template>
    <div></div>
</template>

<script>
 export default {
    data() {
        return {
            scores: [],
        };
    },
    mounted: function () {
        this.fetchData();
    },
    methods: {
        fetchData: async function () {
            try {
                const result = await fetch(
                    `https://data.cityofnewyork.us/resource/unse-x4pq.json`
                );
                const data = await result.json();
                this.scores = data.results;
            } catch (error) {
                console.log(error);
            } 
        }
    }

 };



</script>


<style scoped></style>