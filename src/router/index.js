/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHashHistory } from 'vue-router'
import { components } from 'vuetify/dist/vuetify-labs.js'

const routes = [
  {
    path: '/',
    name:'Home',
    component: () => import('@/views/HomeView.vue'),
    meta: {
      title:'番茄鐘|首頁'
    }
  },
  {
    path: '/list',
    name:'List',
    component: () => import('@/views/ListView.vue'),
    meta: {
      title:'番茄鐘|事項'
    }
  },
  {
    path: '/settings',
    name:'Settings',
    component: () => import('@/views/SettingsView.vue'),
    meta: {
      title:'番茄鐘|設定'
    }
  },
]


const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})


router.afterEach((to, from) => {
  document.title = to.meta.title
})




export default router
