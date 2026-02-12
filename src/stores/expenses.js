import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { expensesApi, paypalApi } from '../api'

export const useExpenseStore = defineStore('expenses', () => {
  const expenses = ref([])
  const summary = ref(null)
  const loading = ref(false)
  const error = ref(null)

  const totalAmount = computed(() =>
    expenses.value.reduce((sum, e) => sum + e.amount, 0)
  )

  async function fetchExpenses(params = {}) {
    loading.value = true
    error.value = null
    try {
      const { data } = await expensesApi.list(params)
      expenses.value = data
    } catch (e) {
      error.value = e.message
    } finally {
      loading.value = false
    }
  }

  async function fetchSummary(period = 'month') {
    try {
      const { data } = await expensesApi.summary(period)
      summary.value = data
    } catch (e) {
      error.value = e.message
    }
  }

  async function createExpense(data) {
    const { data: expense } = await expensesApi.create(data)
    expenses.value.unshift(expense)
    return expense
  }

  async function deleteExpense(id) {
    await expensesApi.delete(id)
    expenses.value = expenses.value.filter(e => e.id !== id)
  }

  async function payWithPaypal(expenseId) {
    const { data: payment } = await paypalApi.create(expenseId)
    // Simulate redirect
    await new Promise(resolve => setTimeout(resolve, 1500))
    const { data: captured } = await paypalApi.capture(payment.payment_id)
    // Refresh the expense
    const { data: updated } = await expensesApi.get(expenseId)
    const index = expenses.value.findIndex(e => e.id === expenseId)
    if (index !== -1) expenses.value[index] = updated
    return captured
  }

  return { expenses, summary, loading, error, totalAmount, fetchExpenses, fetchSummary, createExpense, deleteExpense, payWithPaypal }
})
