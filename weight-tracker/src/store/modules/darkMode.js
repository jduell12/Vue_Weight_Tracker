const state = {
  darkMode: true,
};

const getters = {
  checkMode: (state) => state.darkMode,
};

const actions = {
  changeMode({ commit }) {
    commit("changeMode");
  },
};

const mutations = {
  changeMode: (state) => (state.darkMode = !state.darkMode),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
