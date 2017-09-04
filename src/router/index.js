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
      // 嵌套路由
      children: [
        {
          path: 'apply',
          component: resolve => require(['@/views/Apply.vue'], resolve)
        },
        {
          path: 'notAply',
          component: resolve => require(['@/views/NotAply.vue'], resolve)
        },
        {
          path: 'verify',
          component: resolve => require(['@/views/Verify.vue'], resolve)
        },
        {
          path: 'verifyfail',
          component: resolve => require(['@/views/VerifyFail.vue'], resolve)
        },
        {
          path: '/lous',
          component: resolve => require(['@/views/Lous.vue'], resolve),
          beforeEnter: (to, from, next) => {
            let arr = [1, 2, 3]
            let num = arr[Math.ceil(Math.random() * 10 / 3)]
            switch (num) {
              case 1:
                next({
                  path: '/verify'
                })
                break
              case 2:
                next({
                  path: '/verifyfail'
                })
                break
              case 3:
                next({
                  path: '/notAply'
                })
                break
              default:
                next()
            }
          }
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
