import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    scheduleModalOpen: false,
  },
  mutations: {
    toggleScheduleModal: (state, newState = false) => {
      state.scheduleModalOpen = newState;
    },
  },
  actions: {},
  modules: {},
});
