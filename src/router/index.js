import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login/Login'
import ManageAgenda from '@/components/ManageAgenda'
import RegisterShareholder from '@/components/contents/RegisterShareholder'
import AgendaList from '@/components/contents/AgendaList'
import ManageMeeting from '@/components/contents/ManageMeeting'
import CalculateScore from '@/components/contents/CalculateScore'
import QRScaner from '@/components/QRScaner'
import Selection from '@/components/Selection'
import Presentation from '@/components/Presentation'
import ResultScore from '@/components/contents/ResultScore'
import Template from '@/components/Template'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/login', component: Login },
    { path: '/manageAgenda', component: ManageAgenda, meta: { requiresAuth: true } },
    { path: '/qrscaner', component: QRScaner },
    { path: '/selection', component: Selection },
    { path: '/presentation', component: Presentation, meta: { requiresAuth: true } },
    { path: '/template', component: Template },
    { path: '/',
      component: ManageAgenda,
      meta: { requiresAuth: true },
      children: [
        { path: '/', component: RegisterShareholder },
        { path: '/agendaList', component: AgendaList },
        { path: '/manageMeeting', component: ManageMeeting },
        { path: '/calculateScore', component: CalculateScore },
        { path: '/resultscore', component: ResultScore }
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
    if (!window.$cookies.isKey('username_shareholder')) {
      next({ path: '/login' })
    } else {
      next()
    }
    return
  }
  next()
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((x) => x.meta.isAuth)) {
    if (window.$cookies.isKey('username_shareholder')) {
      next({ path: '/' })
    } else {
      next()
    }
    return
  }
  next()
})

export default router
