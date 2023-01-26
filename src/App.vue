<template>
  <v-app>
    <main>
      <NavBar/>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
    name: "App",
    component: {
        NavBar
    },
    components: { NavBar }
};
</script>