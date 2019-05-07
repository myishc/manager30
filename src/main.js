import Vue from 'vue'
import App from './App.vue'

//导入element模块
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//导入路由
import router from './router/my_router'
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


