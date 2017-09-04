import Vue from 'vue'
import Router from 'vue-router'
import view from '@/views'

const {NotFoundComponent, Center} = view
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Center',
      component: Center,
      children: [
        {
          // 嵌套路由
          path: 'apply',
          component: resolve => require(['@/views/Apply.vue'], resolve)
        },
        {
          path: '/lous',
          component: resolve => require(['@/views/Lous.vue'], resolve)
        }
      ]
    },
    {
      // 嵌套路由
      path: '/hello',
      component: resolve => require(['@/components/Hello.vue'], resolve)
    },
    {
      path: '*',
      component: NotFoundComponent
    }
  ]
})
