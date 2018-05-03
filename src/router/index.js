import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login/Login'
import ManageAgenda from '@/components/ManageAgenda'
import QRScaner from '@/components/QRScaner'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/login', component: Login },
    { path: '/manaegAgenda', component: ManageAgenda },
    { path: '/qrscaner', component: QRScaner }
  ]
})
