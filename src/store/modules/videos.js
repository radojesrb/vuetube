import Vue from 'vue'
import {
  getVideos
} from '../../api/list'

function createState () {
  return {}
}

export default {
  namespaced: true,

  state: createState,

  mutations: {
    ADD (state, payload) {
      payload.forEach(item => Vue.set(state, item.id, item))
    }
  },

  actions: {
    async get ({ commit }) {
      const { data } = await getVideos()
      commit('ADD', data)
    }
  },

  getters: {
    list (state) {
      return Object.keys(state).map(key => state[key])
    }
  }
}
