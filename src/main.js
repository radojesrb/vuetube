// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import createStore from './store'

const store = createStore()

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

router.onReady(() => {
  // Check route has components, if not dispatch 404 error
  const components = router.getMatchedComponents()

  Promise.all([
    ...components
    .map(({ asyncData }) => asyncData)
    .filter(_ => !!_)
    .map(asyncData => asyncData(store, router.currentRoute, null))
  ])
})
