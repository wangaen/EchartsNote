import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './utils/js/flexible.js'
import './assets/css/public.less'

import echarts from 'echarts'
import setOption from './utils/js/setOption.js'
Vue.prototype.$Echarts = echarts
Vue.prototype.$setOption = setOption

Vue.config.productionTip = false

// 导航守卫
router.beforeEach( (to, from, next) => {
  // 路由改变时，更换页面标题
  if (to.meta.title) {
    document.title = to.meta.title
  }
  // 继续进入该页面
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
