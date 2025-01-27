<template>
  <v-container>
    <v-app-bar color="primary" app>
      <v-toolbar-title>Календарь смен. Анапа. Список волонтёров</v-toolbar-title>
      <v-spacer />
      <v-btn color="secondary" @click="logout">Выйти</v-btn>
    </v-app-bar>

    <v-navigation-drawer app>
      <v-list>
        <v-list-item @click="goTo('headquarters')">Список штабов</v-list-item>
      </v-list>
    </v-navigation-drawer>
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
