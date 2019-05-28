import Vue from 'vue'
import Router from 'vue-router'
import Main from '../containers/Main'
import Writing from '../containers/Writing'
import PostDetail from '../containers/PostDetail'
import Intro from '../containers/Intro'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/post/:id',
      name: PostDetail,
      component: PostDetail,
      props: true
    },
    {
      path: '/writing',
      name: 'Writing',
      component: Writing
    },
    {
      path: '/intro',
      name: Intro,
      component: Intro
    }
  ]
})
