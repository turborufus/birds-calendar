<template>
    <v-card-text :class="isStaffed ? 'green-background' : ''" >
      <h3>{{ shift.time }}</h3>
      <v-data-table
        hide-default-footer
        :headers="headers"
        :items="volunteersItems"
        class="elevation-1"
      > </v-data-table>

      <VolunteerForm
        v-if="showVolunteerForm"
        :sectionName="sectionName"
        :shiftTime="shiftTime"
        :role="role.role"
        @add-volunteer="handleAddVolunteer"
      />
      <!-- <v-btn
        color="primary"
        class="mt-2"
        @click="showVolunteerForm = true"
      >
        Добавить волонтера
      </v-btn> -->
    </v-card-text>
</template>

<script>
import VolunteerForm from "./VolunteerForm.vue";

export default {
  name: "RoleCard",
  props: {
    shift: {
      type: Object,
      required: true,
    },
    sectionName: {
      type: String,
      required: true,
    },
    shiftTime: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      headers: [
        { title: "№", value: "id" },
        { title: "ФИО", value: "volunteer.name" },
        { title: "Телефон", value: "volunteer.phone" },
        { title: "Телеграм", value: "volunteer.telegram" },
        { title: "Опыт", value: "experience" },
        { title: "Примечания", value: "volunteer.notes" },
      ],
      showVolunteerForm: false,
    };
  },
  components: {
    VolunteerForm,
  },
  computed: {
    volunteersItems() {
      const volunteers = this.shift?.volunteers || null;
      const required = this.shift?.required || 0;
      const experiencedCnt = this.shift?.experienced || 0

      const experienced = volunteers?.filter(person => person.experience) || [];   // уточняем, сколько есть опытных среди волонтеров
      const inexperienced = volunteers?.filter(person => !person.experience) || [];

      // формируем список вансий для смены
      const result = []
      for (let i = 0; i < experiencedCnt; i++) {
        const elem = {
          id: i+1,
          volunteer: {},
          experience: true, 
        }
        if (i < experienced.length) {
          elem.volunteer = experienced[i]
        } 
        result.push(elem);
      }
      
      // Формируем оставшиеся 5 элементов из списка inexperienced
      for (let i = 0; i < required - experiencedCnt; i++) {
        const elem = {
          id: i+1 + experiencedCnt,
          volunteer: {},
          experience: false, 
        }
        if (i < inexperienced.length) {

          elem.volunteer = inexperienced[i] 
        } 
        result.push(elem);
      }
      return result
    },
    isStaffed() {
      const volunteersCount = this.shift.volunteers.length
      // Считаем количество опытных волонтеров
      const experiencedVolunteers = this.shift.volunteers.filter(person => person.experience === true).length;
      console.log(this.sectionName, this.shiftTime, volunteersCount,experiencedVolunteers, this.shift.required, this.shift.experienced, this.shift.required === volunteersCount && this.shift.experienced === experiencedVolunteers)
      return this.shift.required === volunteersCount && this.shift.experienced === experiencedVolunteers
    }
  },
  methods: {
    handleAddVolunteer(volunteer) {
      this.$emit("add-volunteer", volunteer);
      this.showVolunteerForm = false;
    },
  },
};
</script>

<style>
.green-background {
  background-color: green; /* Цвет фона */
  color: white; /* (опционально) цвет текста для контраста */
}
</style>