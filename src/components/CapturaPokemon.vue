<template>
  <div class="border-2 red">
    <template>
      <h1  class="text-center mt-8 font-bold text-7xl">Capturar Pokemon</h1>
      <v-card :loading="loading" class="mx-auto my-4 border-12" max-width="374">
          <img :src=image alt=""  height="600" srcset="" class="justify-center">

        <v-card-title> Nome: {{ nomePokemon }}</v-card-title>

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
    nomePokemon: '',
    habilidade1: '',
    habilidade2: '',
    habilidade3: '',
    image: ''
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
          this.nomePokemon = response.data.name;
          this.habilidade1 = response.data.abilities[0].ability.name;
          this.habilidade2 = response.data.abilities[1].ability.name;
          this.habilidade3 = response.data.abilities[2].ability.name;
          this.image = response.data.sprites.front_default;
        }
        )
        .catch((error) => {
          console.log(error);
        });
    }
  },
}
</script>




