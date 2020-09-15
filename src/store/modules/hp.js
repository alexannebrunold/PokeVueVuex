import axios from "axios";

const state = {
  pokemons: [],
};

const getters = {
  allPokemons: (state) => state.pokemons,
};

const actions = {
  async fetchPokemons({ commit }) {
    try {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
      console.log(response.data.results);
      commit("setPokemons", response.data.results);
      return response;
    } catch (err) {
      commit("setPokemons", null);
      throw "Unable to fetch current Pokemon";
    }
  },
};

const mutations = {
  setPokemons: (state, pokemons) => (state.pokemons = pokemons),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
