const state = {
  weight: [],
};

const getters = {};

const actions = {
  addWeight({ commit }, weightObj) {
    commit("addWeight", weightObj);
  },
};

const mutations = {
  addWeight: (state, weightObj) => state.weight.push(weightObj),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
