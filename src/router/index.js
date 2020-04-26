import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/post-edit',
    name: 'PostEdit',
    component: () => import('../views/PostEdit.vue')
  },
  {
    path: '/post-list',
    name: 'PostList',
    component: () => import('../views/PostList.vue')
  },
  {
    path: '/post-draft',
    name: 'PostDraft',
    component: () => import('../views/PostDraft.vue')
  },
  {
    path: '/style',
    name: 'Style',
    component: () => import('../views/Style.vue')
  },
  {
    path: '/contributors',
    name: 'Contributors',
    component: () => import('../views/Contributors.vue')
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('../views/Settings.vue')
  },
  {
    path: '/my-profile',
    name: 'MyProfile',
    component: () => import('../views/MyProfile.vue')
  },
  {
    path: '/my-posts',
    name: 'MyPosts',
    component: () => import('../views/MyPosts.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
