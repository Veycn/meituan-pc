import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '../layout/default'
import blankPage from '../layout/blank'
import Index from '../page/index'
import changeCity from '../page/changeCity'
import goodsList from '../page/goodsList'
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
          path: '/index/:city',
          name: 'index',
          component: Index
        },
        {
          path: '/changecity',
          name: 'changeCity',
          component: changeCity
        },
        {
          path: '/goodslist',
          name: 'goodsList',
          component: goodsList
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
