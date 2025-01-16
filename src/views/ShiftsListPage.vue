<template>
  <v-main>
    <v-container>

      <!-- Индикатор загрузки, если данные еще не загружены -->
      <v-progress-circular v-if="isLoading" indeterminate color="primary" />
      
      <v-row v-for="shift in shifts" :key="shift.id" cols="12" md="4">
        <v-col>
          <ShiftCard :shift="shift" />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import { getShifts, getShiftTypes, getTimeSlots } from "../services/shiftService"
import ShiftCard from '../components/ShiftCard.vue';

export default {
  components: {
    ShiftCard
  },
  data() {
    return {

      isLoading: false,  // Состояние загрузки
      fetchedShifts: [],
      fetchedShiftTypes: [],
      fetchedTimeSlots: [],

    }
  },
  created() {
    this.fetchShifts()  // Вызываем метод для получения данных при создании компонента
    console.log('fetchedShiftTypes',this.fetchedShiftTypes)
    console.log('fetchedTimeSlots', this.fetchedTimeSlots)
    console.log('fetchedShifts',this.fetchedShifts)
  },
  computed: {
    shifts() {
      const list = []
      this.fetchedShifts.forEach((shift) => {
        const timeSlots = this.fetchedTimeSlots.find(item => item.id === shift.time_slot)
        const shiftType = this.fetchedShiftTypes.find(item => item.id === shift.type)
        const newShift = {
          id: shift.id,
          date: shift.date, 
          notes: shift.notes,
          people_needed: shift.people_needed, 
          time: `${timeSlots.start_hr}:00 - ${timeSlots.end_hr}:00`, 
          type: {
            id: shiftType.id,
            name: shiftType.name
          }
        }
        console.log(newShift)
        list.push(newShift)
      })
      return list;
    }, 
    sortedShifts() {
      const list = this.shifts
      // list.sort((item1, item2) => {

      // })
      return list
    }
  },
  methods: {
    // Метод для получения смен
    async fetchShifts() {
      this.isLoading = true;  // Включаем индикатор загрузки
      try {
        
        this.fetchedShiftTypes = await getShiftTypes();
        this.fetchedTimeSlots = await getTimeSlots();
        this.fetchedShifts = await getShifts();  // Получаем данные из API

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
