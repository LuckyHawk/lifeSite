import Vue from 'vue'
import Router from 'vue-router'
import iView from 'iview'
import HelloWorld from '@/components/HelloWorld'
import timeline from '@/components/timeline'
import 'iview/dist/styles/iview.css'

Vue.use(Router)
Vue.use(iView)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/timeline',
      name: 'timeline',
      component: timeline
    }
  ]
})
