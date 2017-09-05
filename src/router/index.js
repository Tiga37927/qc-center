import Vue from 'vue'
import Router from 'vue-router'
import view from '@/views'
// import axios from 'axios'
import urls from '../api/urls'
import http from '../api/http'

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
          component: resolve => require(['@/views/Apply.vue'], resolve),
          beforeEnter: (to, from, next) => {
            let opt = {
              method: 'get',
              url: urls.isNeedEditCompanyInfo.dataUrl,
              isLoading: true,
              success: function (data) {
                let result = data.isNeed
                // 是否需要完善公司信息
                if (result === false) {
                  next()
                } else if (result === true) {
                  next({
                    path: '/forbidAply'
                  })
                }
              },
              fail: function (error) {
                console.log(error)
              }
            }
            http(opt)
          }
        },
        {
          path: 'forbidAply',
          component: resolve => require(['@/views/ForbidAply.vue'], resolve)
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
            let opt = {
              method: 'get',
              url: urls.getIouStatus.dataUrl,
              isNeedLoading: true,
              success: function (data) {
                let result = data.status
                switch (result) {
                  case 'CREDIT_ACCOUNT_APPLY_REQUESTED':
                    next({
                      path: '/verify'
                    })
                    break
                  case 'CREDIT_ACCOUNT_APPLY_REFUSED':
                    next({
                      path: '/verifyfail'
                    })
                    break
                  case 'CREDIT_ACCOUNT_NOT_APPLY':
                    next({
                      path: '/notAply'
                    })
                    break
                  case 'CREDIT_ACCOUNT_APPLY_APPROVED':
                    next()
                }
              },
              fail: function (error) {
                console.log(error)
              }
            }

            http(opt)
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
