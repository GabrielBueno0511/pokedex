<template>
  <v-app>



    <main>
      <NavBar/>
      <router-view></router-view>
    </main>

    <!-- <v-main>
      <router-view/>
    </v-main>
    -->
  </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue';
// import NavBar from '/src/components/NavBar.vue';

export default {
    name: "App",
    component: {
        NavBar
    },
    components: { NavBar }
};
</script>

<!-- <template>
  <main>
    <router-view></router-view>
  </main>
</template>
<script>


export default {
  components: {},
};
</script> -->
