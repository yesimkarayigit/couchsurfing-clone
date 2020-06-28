import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

// axios.defaults.baseURL = 'http://localhost:3000'

Vue.use(Vuex);

const Mutations = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT"
};

export default new Vuex.Store({
  state: {
    count: 5
  },
  mutations: {
    [Mutations.INCREMENT](state) {
      state.count++;
    },
    [Mutations.DECREMENT](state) {
      if (state.count === 0) return;

      state.count--;
    }
  },
  actions: {
    increment({ commit }) {
      commit("INCREMENT");
    },
    decrement({ commit }) {
      commit("DECREMENT");
    },
    async fetchSurfers() {
      const request = await axios.get("http://localhost:3000/surfers");

      return request.data;
    }
  }
});
