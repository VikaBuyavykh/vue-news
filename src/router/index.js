import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/pages/Main.vue'
import Article from '@/pages/Article.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/article',
      name: 'article',
      component: Article
    }
  ]
})

export default router
