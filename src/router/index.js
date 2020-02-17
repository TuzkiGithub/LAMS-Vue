import Vue from 'vue'
import VueRouter from 'vue-router'

import MyTask from '@/views/task/index'
import Inquire from '@/views/inquire/index'
import Statistics from '@/views/statistics/index'
import Mine from '@/views/mine/index'
import Case from '@/views/task/case'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MyTask',
    component: MyTask
  },
  {
    path: '/task/:id',
    name: 'Case',
    component: Case
  },
  {
    path: '/inquire',
    name: 'Inquire',
    component: Inquire
  },
  {
    path: '/statistics',
    name: 'Statistics',
    component: Statistics
  },
  {
    path: '/mine',
    name: 'Mine',
    component: Mine
  }
]

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

// 路由配置
const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
