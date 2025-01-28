<template>
  <v-container>
    <v-app-bar flat color="primary" app>
      <v-toolbar-title>Календарь смен. {{ currentHeadquarter.name }}</v-toolbar-title>
      <v-spacer />
      <v-btn color="secondary" @click="logout">Выйти</v-btn>
    </v-app-bar>

    <v-app-bar flat color="primary">
      <v-btn
        v-for="link in links"
        :key="link.text"
        @click="goTo(link.to)"
        text
        color="white"
      >
        {{ link.text }}
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-row 
          v-for="section in sections"
          :key="section.name"
          justify="center" 
          dense
      >
        <v-col>
          <calendar-section :section="section" />
        </v-col>
      </v-row>
    </v-main>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';
import CalendarSection from "../components/CalendarSection.vue";

export default {
  props: ["id"],
  components: {
    CalendarSection,
  },
  data() {
    return {
      links: [
        { text: 'Список штабов', to: 'headquarters' },
        { text: 'Список волонтеров', to: 'volunteers' },
      ],
    };
  },
  computed: {
    ...mapState(["shifts"]),
    sections() {
      console.log("ID:", Number(this.id));
      const result = this.$store.getters["getSectionsByHeadquarter"](Number(this.id));
      return result || []
    },
    currentHeadquarter() {
      return this.$store.getters["getHeadquarterById"](Number(this.id))
    }
  },
  methods: {
    goTo(page) {
      this.$router.push(`/${page}`);
    },
  }
};
</script>