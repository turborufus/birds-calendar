<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-title>Календарь смен штаба птиц
      <!-- <v-spacer></v-spacer>-->
      <!-- Навигация -->
          <!-- <router-link to="/">Список смен</router-link> -->
      </v-app-bar-title>  
    </v-app-bar>
  

    <!-- Отображение компонентов страниц -->
    <router-view />
  </v-app>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>