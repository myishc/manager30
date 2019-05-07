//导入vue路由
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//导入组件
import login from '../components/login.vue'
import index from '../components/index.vue'

// 导入嵌套路由组件
import userList from '../components/index/userList.vue'
import roleList from '../components/index/roleList.vue'
import rightList from '../components/index/rightList.vue'
import productList from '../components/index/productList.vue'
import categoryParam from '../components/index/categoryParam.vue'
import productCategory from '../components/index/productCategory.vue'
import orderList from '../components/index/orderList.vue'
import datas from '../components/index/datas.vue'

//设置路由规则
const routes = [{
        path: '/login',
        component: login
    },
    {
        path: '/',
        component: index,
        children: [{
                path: 'userList',
                component: userList
            },
            {
                path: 'roleList',
                component: roleList
            },
            {
                path: 'rightList',
                component: rightList
            },
            {
                path: 'productList',
                component: productList
            },
            {
                path: 'categoryParam',
                component: categoryParam
            },
            {
                path: 'productCategory',
                component: productCategory
            },
            {
                path: 'orderList',
                component: orderList
            },
            {
                path: 'datas',
                component: datas
            }

        ]
    },
]

//实例化router
const router = new VueRouter({
    routes
})

//暴露router
export default router