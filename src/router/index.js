import Vue from 'vue'
import Router from 'vue-router'
import Tube from '@/components/Tube'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'tube',
      component: Tube
    }
  ]
})
