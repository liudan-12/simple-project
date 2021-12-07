import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import carousel from './carousel'
import ImgDetail from '../views/ImgDetail.vue'
// import { Message } from 'element-ui';
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index'
  },

  {
    path: '/index',
    name: 'index',
    component: Index,
    redirect: '/index/home',
    meta: {},
    children: [
      ...carousel
    ]
  },
  {
    path: '/imgdetail',
    name: 'imgdetail',
    component: ImgDetail,
    meta: {}
  },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
// //前置守卫
// router.beforeEach((to, from, next) => {
//   if (to.matched.some((route) => route.meta.requireAuth)) {
//     if (to.path == '/login') {
//       next()
//     } else {
//       if (localStorage.getItem('user')) {
//         next()
//       } else {
//       Message.warning("您还没有登陆，请先登陆！")
//         next("/")
//       }
//     }
//   } else {
//     next()
//   }

// })


export default router
