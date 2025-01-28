<template>
  <v-container>
    <v-app-bar flat color="primary" app>
      <v-toolbar-title>Календарь смен. Анапа. Список волонтёров</v-toolbar-title>
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
      <v-data-table :headers="headers" :items="volunteers" class="elevation-1" />
    </v-main>
    
  </v-container>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: "VolunteersPage",
  data() {
    return {
      headers: [
        { title: "ФИО", value: "name" },
        { title: "Телефон", value: "phone" },
        { title: "Телеграм", value: "telegram"},
        { title: "Опыт", value: "experience"}
      ],
      links: [
        { text: 'Список штабов', to: 'headquarters' },
        { text: 'Список волонтеров', to: 'volunteers' },
      ],
    };
  },
  computed: {
    ...mapState["shifts"],
    volunteers() {
      return this.$store.getters["getVolunteers"];
    },
  },
  methods: {
    goTo(page) {
      this.$router.push(`/${page}`);
    },
  },
};
</script>
