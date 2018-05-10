import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login/Login'
import ManageAgenda from '@/components/ManageAgenda'
import RegisterShareholder from '@/components/contents/RegisterShareholder'
import AgendaList from '@/components/contents/AgendaList'
import QRScaner from '@/components/QRScaner'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/login', component: Login },
    { path: '/manageAgenda', component: ManageAgenda },
    { path: '/qrscaner', component: QRScaner },
    { path: '/',
      component: ManageAgenda,
      // meta: { requiresAuth: true },
      children: [
        { path: '/', component: RegisterShareholder },
        { path: '/agendaList', component: AgendaList }
        // { path: '/register/:id', component: register },
        // { path: '/all', component: all },
        // { path: '/newaccount', component: newaccount },
        // { path: '/resendMail', component: resendMail }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((x) => x.meta.requiresAuth)) {
    if (!window.$cookies.isKey('username_inet_register')) {
      next({ path: '/' })
    } else {
      next()
    }
    return
  }
  next()
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((x) => x.meta.isAuth)) {
    if (window.$cookies.isKey('username_inet_register')) {
      next({ path: '/' })
    } else {
      next()
    }
    return
  }
  next()
})

export default router
