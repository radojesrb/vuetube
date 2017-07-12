import Vue from 'vue'
import Vuex from 'vuex'
import videos from './modules/videos'

Vue.use(Vuex)

export default function create () {
  const store = new Vuex.Store({
    modules: {
      videos
    },

    strict: process.env.NODE_ENV !== 'production'
  })

  if (module.hot) {
    module.hot.accept([
      './modules/videos'
    ], () => {
      store.hotUpdate({
        modules: {
          videos: require('./modules/videos').default
        }
      })
    })
  }

  return store
}
