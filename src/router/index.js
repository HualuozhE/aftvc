import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '/',
        name: 'index',
        component: () =>
          import(/* webpackChunkName: "homeIndex" */ '../pages/Home/components/Main/Main')
      },
      {
        path: '/news',
        name: 'news',
        component: () =>
          import(/* webpackChunkName: "homeNews" */ '../pages/News/components/NewsContent.vue')
      },
      {
        path: '/overview',
        name: 'overview',
        component: () =>
          import(/* webpackChunkName: "homeOverviews" */ '../pages/OverView/OverView.vue')
      }
    ]
  },
  {
    path: '/index.html',
    redirect: '/'
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
