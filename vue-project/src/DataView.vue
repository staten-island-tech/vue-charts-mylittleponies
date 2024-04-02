<template>
  <div class="api-data">
    <div v-if="loading">Loading...</div>
    <div v-else>
      <div v-for="(item, index) in data" :key="index" class="data-item">
        <h3>{{ item._2022_admissions_shsat_offers }}</h3>
        <table>
          <thead>
            <tr>
              <th>Ethnicity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <!-- Iterate over each key-value pair in the item -->
            <template v-for="(value, key, itemIndex) in item">
              <!-- Skip the first key-value pair in each object -->
              <template v-if="itemIndex !== 0">
                <tr>
                  <td>{{ key }}</td>
                  <td>{{ value }}</td>
                </tr>
              </template>
            </template>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: true,
      data: null
    };
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch("https://data.cityofnewyork.us/resource/unse-x4pq.json");
        this.data = await response.json();
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        this.loading = false;
      }
    }
  },
  mounted() {
    this.fetchData();
  }
};
</script>

<style>
.api-data {
  margin-top: 240px
}

.data-item {
  width: 70%;
  margin: 30px;
  padding: 5px;
  border: 1px solid #ccc;
  z-index: 0;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ccc;
  padding: 8px;
}

th {
  background-color: #b2728f;
}
</style>