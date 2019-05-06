//导入vue路由
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import login from '../components/login.vue'

const routes = [
    {path: '/login', component: login }
]

const router = new VueRouter({
    routes
})

export default router

