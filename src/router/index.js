import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Counter from '@/views/counter'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/counter',
      name: 'counter',
      component: Counter
    },
    {
      path: '/join*',
      name: 'join',
      component: () => import(/* webpackChunkName: "vue2" */ '@/views/joinPage.vue')
    }
  ]
})
