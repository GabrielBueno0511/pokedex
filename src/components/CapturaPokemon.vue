<template>
  <div class="border-2 red">
    <template>
      <v-card :loading="loading" class="mx-auto my-12 border-12" max-width="374">
        <template slot="progress">
          <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
        </template>

        <v-img height="250" src="https://imgs.search.brave.com/jcoP18B7fiVVXXHz-f12SRyl0J65UxFl6xWaveDqcpI/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5z/ZHJ5a29sUXJZRjU0/TXEtTFRPc3ZBSGFF/SyZwaWQ9QXBp"></v-img>

        <v-card-title> Nome: {{ nomePokemon }}</v-card-title>

        <v-card-text>

          <div class="my-4 text-subtitle-1">
            Tipo: {{ tipoPokemon }}
          </div>

        </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-title>Habilidades:</v-card-title>

        <v-card-text>
          <v-list-group v-model="selection" column>
            <v-list>{{ habilidade1 }}</v-list>

            <v-list>{{ habilidade2 }}</v-list>

            <v-list>{{ habilidade3 }}</v-list>

          </v-list-group>
        </v-card-text>

        <v-card-actions>
          <v-btn color="green lighten-2" text @click="getPokemon">
            Capturar
          </v-btn>
        </v-card-actions>
      </v-card>
      
    </template>
  </div>
</template>


<script>
import axios from "axios";


export default {
  data: () => ({
    loading: false,
    selection: 1,
    namePokemon: ''
  }),

  methods: {
    reserve() {
      this.loading = true

      setTimeout(() => (this.loading = false), 2000)
    },
    async getPokemon() {
      const pokemon = Math.floor(Math.random() * 1000 + 1)
      console.log(pokemon)

      axios.get("https://pokeapi.co/api/v2/pokemon/" + pokemon)
        .then(response => {
                    console.log(response.data);
                  }
                  )
                  .catch((error) => {
                      console.log(error);
                  });
    }
  },
}
</script>




