import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);
const Home = () => import('../views/Home/home.vue')
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      title: '柱状图'
    }
  }
]
const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
