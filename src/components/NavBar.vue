<template>
  <div clas="max-h-full">
    <v-app-bar color="grey" light>
      <v-app-bar-nav-icon @click="drawer = true" class="ml-4"></v-app-bar-nav-icon>

      <v-toolbar-title class="white--text font-bold text-4xl flex justify-end">Pokedex</v-toolbar-title>
      <v-icon color="orange">fas fa-list</v-icon>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="black--text text--accent-4">
          <v-list-item class="flex justify-end">
            <v-btn icon @click.stop="drawer = !drawer">
              <v-list-icon>
                <v-icon>mdi-chevron-left</v-icon>
              </v-list-icon>
            </v-btn>
          </v-list-item>

          <v-list-item>
            <a href="http://localhost:8080/capturapokemon">
              <v-list-item-title>Capturar</v-list-item-title>
            </a>
          </v-list-item>

          <v-list-item>
            <a href="http://localhost:8080/">
              <v-list-item-title>meus Pokemons</v-list-item-title>
            </a>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>


export default {
  name: 'NavBar',
  data: () => ({
    drawer: false,
    group: null,
    mini: true,
  }),
  components: {

  }
}
</script>