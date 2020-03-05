import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Game from '../views/Game.vue'
import Login from '../views/Login.vue'
import { CurrentUser } from '../models/Users'

Vue.use(VueRouter)  // this is global so can use anywhere

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/game',
    name: 'Game',
    component: Game, meta: { IsSecret: true } //"meta" lets us create our own property, can also check an array of roles
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',   //
  base: process.env.BASE_URL,
  routes
})

router.beforeEach( (to, from, next) => {
  if( to.meta.IsSecret && !CurrentUser) next('/login');  //alternate: {name: 'Login'}
  else next(); //empty parameter will go to the page intended (so game page)
});

export default router
