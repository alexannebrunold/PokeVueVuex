import Vuex from "vuex";
import Vue from "vue";
import hp from "./modules/hp";

//Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    hp,
  },
});
