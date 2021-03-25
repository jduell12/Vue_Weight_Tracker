import Vuex from "vuex";
import Vue from "vue";
import darkMode from "./modules/darkMode.js";
import weight from "./modules/weight";

//load Vuex
Vue.use(Vuex);

//Create store
export default new Vuex.Store({
  modules: {
    darkMode,
    weight,
  },
});
