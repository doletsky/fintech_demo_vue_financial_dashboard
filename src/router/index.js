import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'Dashboard', component: () => import('../views/DashboardView.vue') },
  { path: '/expenses', name: 'Expenses', component: () => import('../views/ExpensesView.vue') },
  { path: '/transactions', name: 'Transactions', component: () => import('../views/TransactionsView.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
