<template>
  <v-container>
    <v-row
        v-for="section in sections"
        :key="section.name"
    >
      <v-col>
        <calendar-section :section="section" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';
import CalendarSection from "../components/CalendarSection.vue";

export default {
  components: {
    CalendarSection,
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapState(["sections"]),
  },
};
</script>