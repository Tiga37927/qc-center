import Vue from 'vue'
import Router from 'vue-router'
import NotFoundComponent from '@/components/NotFoundComponent'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: resolve => require(['@/components/Hello.vue'], resolve)
    },
    {
      path: '*',
      component: NotFoundComponent
    }
  ]
})
