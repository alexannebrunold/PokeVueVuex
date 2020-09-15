<template>
  <div class="home">
    <h1>Welcome to the Harry Potter World</h1>
    <button @click="onShowPokemonList">Click Here to discover a list of Pokemons</button>
    <div v-if="list">  
      <p v-for="pokemon in allPokemons" :key="pokemon.id"> {{ pokemon.name }}</p>
    </div>
  </div>
</template>

// Colors 
// Serpentard : rgb(13, 98, 23)
// Ravenclaw : rgb(148, 107, 45)
// Gryffondor : rgb(127, 9, 9) 
// Hufflepuff : rgb(238, 225, 23) 


<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { mapGetters, mapActions } from "vuex";

export default {
  name: 'Home',
  data(){
    return {
      title: '',
      list: false
    }
  },
  components: {
    // HelloWorld
  },
  methods:{
    ...mapActions(["fetchPokemons"]),
    onShowPokemonList : function(){
      if(!this.list){
        this.list = true
      }else{
        this.list = false
      }
      
    }
  },
  computed: mapGetters(["allPokemons"]),
  created() {
    this.fetchPokemons();
  },
}
</script>
