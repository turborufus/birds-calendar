<template>
<v-container>
  <v-app-bar flat color="primary" app>
    <v-toolbar-title  cols="auto">Календарь смен. Анапа</v-toolbar-title>
    <!-- <v-spacer /> -->
    <v-btn color="secondary" @click="logout">Выйти</v-btn>
  </v-app-bar>

  <v-app-bar flat color="primary">
    <v-container>
      <v-row>
        <v-col 
          v-for="link in links"
          :key="link.text"
        >
          <v-btn
            @click="goTo(link.to)"
            text
            color="white"
          >
            {{ link.text }}
          </v-btn>
        </v-col>
      </v-row>
    </v-container>      
  </v-app-bar>

  <v-main>
    <v-container>
      <v-row>
        <v-col
          v-for="hq in headquarters"
          :key="hq.id"
          cols="12"
          sm="6"
          md="4"
        >
          <v-card @click="openShifts(hq.id)">
            <v-card-title>{{ hq.name }}</v-card-title>
            <v-card-text>Локация: {{ hq.location }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</v-container>
</template>



<script>
import { mapState } from 'vuex';

export default {
  name: "HeadquartersPage",
  data() {
    return {
      links: [
        { text: 'Список штабов', to: 'headquarters' },
        { text: 'Список волонтеров', to: 'volunteers' },
      ],
    };
  },
  computed: {
    ...mapState['shifts'], 
    headquarters() {
      return this.$store.getters["getHeadquarters"];
    },
  },
  methods: {
    openShifts(hqId) {
      this.$router.push(`/headquarters/${hqId}`);
    },
    goTo(page) {
      this.$router.push(`/${page}`);
    },
    logout() {
      localStorage.removeItem("isLoggedIn");
      this.$store.dispatch("shifts/logout");
      this.$router.push("/login");
    },
  },
};
</script>