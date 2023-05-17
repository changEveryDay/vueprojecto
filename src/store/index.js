import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    number: 1
  },
  getters: {
  },
  mutations: {
    addNum (state) {
      state.number++
    }
  },
  actions: {
  },
  modules: {
  }
})
