import Vue from 'vue'
import Router from 'vue-router'

import Index from './views/Index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/register',
      name: 'RegisterPage',
      component: () => import(/* webpackChunkName: "register" */ './views/RegisterPage.vue')
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: () => import(/* webpackChunkName: "login" */ './views/LoginPage.vue')
    },
    // {
    //   path: '/components/login',
    //   name: 'login',
    //   component: Login
    // },
    {
      path: '/songlist',
      name: 'SongList',
      component: () => import(/* webpackChunkName: "songlist" */ './views/SongList.vue')
    },
    {
      path: '/search',
      name: 'Search',
      component: () => import(/* webpackChunkName: "search" */ './views/Search.vue')
    },
    {
      path: '/userhistory',
      name: 'UserHistory',
      component: () => import(/* webpackChunkName: "usersong" */ './views/UserHistory.vue')
    },
    {
      path: '/userlike',
      name: 'UserLike',
      component: () => import(/* webpackChunkName: "userlike" */ './views/UserLike.vue')
    },
    {
      path: '/playlist',
      name: 'PlayList',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "playlist" */ './views/PlayList.vue')
    },
    {
      path: '/mymusic',
      name: 'MyMusic',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "mymusic" */ './views/MyMusic.vue')
    }
  ]
})
