import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/page/index'
import add from '@/components/page/add'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }, 
    {
      path: '/add',
      name: 'addDate',
      component: add
    }
  ]
})
