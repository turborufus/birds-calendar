<template>
  <v-card-text>
    <h3>{{ shift.time }}</h3>
    <v-data-table
      :headers="headers"
      :items="shift.volunteers"
      class="elevation-1"
    />
    <VolunteerForm
      v-if="showVolunteerForm"
      :sectionName="sectionName"
      :shiftTime="shiftTime"
      :role="role.role"
      @add-volunteer="handleAddVolunteer"
    />
    <v-btn
      color="primary"
      class="mt-2"
      @click="showVolunteerForm = true"
    >
      Добавить волонтера
    </v-btn>
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
        { text: "№", value: "id" },
        { text: "ФИО", value: "name" },
        { text: "Телефон", value: "phone" },
        { text: "Примечания", value: "notes" },
      ],
      showVolunteerForm: false,
    };
  },
  components: {
    VolunteerForm,
  },
  methods: {
    handleAddVolunteer(volunteer) {
      this.$emit("add-volunteer", volunteer);
      this.showVolunteerForm = false;
    },
  },
};
</script>
