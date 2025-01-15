<template>
  <v-container>
    <v-text-field
      v-model="searchQuery"
      label="Поиск"
      solo
      class="mb-4"
    ></v-text-field>
    <v-row v-for="shift in filteredShifts" :key="shift.id" cols="12" md="4">
      <v-col>
        <v-card @click="goToShiftDetail(shift.id)"  class="pa-3">
          <v-card-title>{{ shift.name }}</v-card-title>
          <v-card-subtitle>{{ shift.description }}</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { getShifts } from "../services/api"

export default {
  data() {
    return {
      shifts: [],
      searchQuery: '',
    }
  },
  created() {
    this.shifts = getShifts() // Получаем смены с помощью функции из api.js
  },
  computed: {
    filteredShifts() {
      // Фильтруем смены по названию или описанию
      return this.shifts.filter(shift => {
        const searchTerm = this.searchQuery.toLowerCase()
        return shift.name.toLowerCase().includes(searchTerm) || shift.description.toLowerCase().includes(searchTerm)
      })
    }
  },
  methods: {
    goToShiftDetail(id) {
      this.$router.push({ name: 'ShiftDetailPage', params: { id } })
    }
  }
}
</script>

<style scoped>
.v-card {
  cursor: pointer;
}
</style>
