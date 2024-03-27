import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
        path: '/chart',
        name: 'chart',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../ChartView.vue')
      },
      {
        path: '/pie',
        name: 'pie',
        component: () => import('../PieView.vue')
      },
  ]
})

export default router