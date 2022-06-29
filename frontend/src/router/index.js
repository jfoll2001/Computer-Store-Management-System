import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CustomerView from '@/views/CustomerView.vue'
import ProductView from '@/views/ProductView.vue'
import OrderView from '@/views/OrderView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/customer',
      name: 'customer',
      component: CustomerView
    },
    {
      path: '/product',
      name: 'product',
      component: ProductView
    },
    {
      path: '/order',
      name: 'order',
      component: OrderView
    }
  ]
})

export default router
