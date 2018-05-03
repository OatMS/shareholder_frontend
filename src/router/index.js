import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login/Login'
import Bg from '@/components/background/Bg'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Bg },
    { path: '/login', component: Login }
  ]
})
