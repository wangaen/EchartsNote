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

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
