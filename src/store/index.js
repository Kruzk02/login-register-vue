import { createStore } from 'vuex';

const store = createStore({
  state: {
    token: null,
    user: null,
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    clearToken(state) {
      state.token = null;
    },
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    setToken({ commit }, token) {
      commit('setToken', token);
    },
    clearToken({ commit }) {
      commit('clearToken');
    },
    setUser({ commit }, user) {
      commit('setUser', user);
    },
  },
  getters: {
    getToken: (state) => state.token,
    getUser: (state) => state.user,
  },
});

export default store;
