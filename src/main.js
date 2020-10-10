import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './utils/js/flexible.js'
import './assets/css/public.less'

createApp(App).use(router).mount('#app')
