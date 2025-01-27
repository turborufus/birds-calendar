<template>
  <v-container>
    <v-app-bar color="primary" app>
      <v-toolbar-title>Календарь смен. {{ currentHeadquarter.name }}</v-toolbar-title>
      <v-spacer />
      <v-btn color="secondary" @click="logout">Выйти</v-btn>
    </v-app-bar>

    <v-navigation-drawer app>
      <v-list>
        <v-list-item @click="goTo('headquarters')">Список штабов</v-list-item>
        <v-list-item @click="goTo('volunteers')">Список волонтеров</v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-row
          v-for="section in sections"
          :key="section.name"
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