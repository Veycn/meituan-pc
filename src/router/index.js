import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '../layout/default'
import blankPage from '../layout/blank'
import Index from '../page/index'
import changeCity from '../page/changeCity'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'default',
      component: defaultPage,
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'index',
          component: Index
        },
        {
          path: '/changecity',
          name: 'changeCity',
          component: changeCity
        }
      ]
    },
    {
      path: '/blank',
      name: 'blank',
      component: blankPage
    }
  ]
})
