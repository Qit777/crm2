import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// 1. 定义 (路由) 组件。

import home from '../views/home.vue'
import department from '../views/department.vue'
// 2. 定义路由
const routes = [
    { path: '/home', component: home },
    { path: '/department', component: department }
  ]

// 3. 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
  })

export { router }