import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './utils/js/flexible.js'
import './assets/css/public.less'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
