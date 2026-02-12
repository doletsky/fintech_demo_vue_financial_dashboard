import axios from 'axios'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000',
  headers: { 'Content-Type': 'application/json' },
})

export const expensesApi = {
  list: (params) => apiClient.get('/api/expenses', { params }),
  get: (id) => apiClient.get(`/api/expenses/${id}`),
  create: (data) => apiClient.post('/api/expenses', data),
  update: (id, data) => apiClient.put(`/api/expenses/${id}`, data),
  delete: (id) => apiClient.delete(`/api/expenses/${id}`),
  summary: (period) => apiClient.get('/api/expenses/summary', { params: { period } }),
}

export const paypalApi = {
  create: (expenseId) => apiClient.post('/payments/paypal/create', { expense_id: expenseId }),
  capture: (paymentId) => apiClient.post('/payments/paypal/capture', { payment_id: paymentId }),
}

export const errorApi = {
  report: (error) => apiClient.post('/api/errors', error).catch(() => {}),
}

export default apiClient
