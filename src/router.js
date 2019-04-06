import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Callback from '@/views/Callback.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/callback',
      name: 'callback',
      component: Callback
    }
  ]
})

// very basic "setup" of a global guard
router.beforeEach((to, from, next) => {
  if(to.name == 'callback') { // check if "to"-route is "callback" and allow access
    next()
    debugger;
  } else if (router.app.$auth.isAuthenticated()) { // if authenticated allow access
    debugger;
    console.log('not authenticated!');
    next()
  } else { // trigger auth0 login
    debugger;
    console.log('no auth yet!!!!');
    router.app.$auth.login()
  }
})

export default router