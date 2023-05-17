import { createRouter, createWebHistory } from 'vue-router'
import Home from '../presenters/HomePresenter.vue'
import Search from '../presenters/SearchPresenter.vue'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/search',
        name: 'Search',
        component: Search,
    },

]

const router = createRouter({
    scrollBehavior(to:any, from:any, savedPosition:any) {
      if (savedPosition) {
        return savedPosition
      } else {
        return { top: 0 }
      }
    },
    history: createWebHistory(),
    routes,
  })
  
  router.beforeEach((to:any, from:any, next:any) => {
    
    // const publicPages = ['/login', '/register']
    // const authRequired = !publicPages.includes(to.path)
    next();
  })
  
  export default router