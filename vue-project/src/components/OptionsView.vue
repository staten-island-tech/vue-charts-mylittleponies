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
                    `https://data.cityofnewyork.us/resource/25th-nujf.json?$query=SELECT%20brth_yr%2C%20gndr%2C%20ethcty%2C%20nm%2C%20cnt%2C%20rnklimit=${this.id}&offset=${this.offset}`
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