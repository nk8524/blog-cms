import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    stateDrawer: false,
  },
  mutations: {
    storeStateDrawer(state, val) {
      state.stateDrawer = val;
    },
  },
  actions: {
    commitStateDrawer(store, val) {
      return store.commit('storeStateDrawer', val)
    }
  },
  getters: {
    getStateDrawer: (state) => state.stateDrawer
  }
})