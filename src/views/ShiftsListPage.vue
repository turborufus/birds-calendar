<template>
  <v-container>
    <!-- Индикатор загрузки, если данные еще не загружены -->
    <v-progress-circular v-if="isLoading" indeterminate color="primary" />
    
    <v-text-field
      v-model="searchQuery"
      label="Поиск"
      solo
      class="mb-4"
    ></v-text-field>
    <v-row v-for="shift in filteredShifts" :key="shift.id" cols="12" md="4">
      <v-col>
        <v-card @click="goToShiftDetail(shift.id)"  class="pa-3">
          <v-card-title>{{ shift.notes }} {{shift.date}}</v-card-title>
          <v-card-subtitle>{{ shift.tyme_slot }}</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { getShifts } from "../services/shiftService"

export default {
  data() {
    return {
      shifts: [],
      isLoading: false,  // Состояние загрузки
      searchQuery: '',
    }
  },
  created() {
    this.fetchShifts()  // Вызываем метод для получения данных при создании компонента
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
    // Метод для получения смен
    async fetchShifts() {
      this.isLoading = true;  // Включаем индикатор загрузки
      try {
        this.shifts = await getShifts();  // Получаем данные из API
      } catch (error) {
        console.error('Ошибка при загрузке данных: ', error);
      } finally {
        this.isLoading = false;  // Выключаем индикатор загрузки
      }
    },
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
