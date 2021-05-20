import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'


Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState({
    storage: window.localStorage
  })],
  state: {
    name: '',
    stock: [],
    list: []
  },
  mutations: {
    setName (state, data) {
      state.name = data
    },
    clearName (state) {
      state.name = ''
    },
    saveStock (state, data) {
      state.stock = data
    },
    clearStock (state) {
      state.stock = []
    }
  },
  actions: {
    loginName (state, data) {
      state.commit('setName', data)
    },
    logout (state) {
      state.commit('clearName')
    }
  },
  getters: {
    name: state => state.name,
    stock: state => state.stock,
    list: state => state.list,
  }
});

