<template>
  <div>
    <h1>{{ $t('transactions.title') }}</h1>
    <div class="card" style="margin-top: 1rem;">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>{{ $t('transactions.userId') }}</th>
            <th>{{ $t('transactions.amount') }}</th>
            <th>{{ $t('transactions.type') }}</th>
            <th>{{ $t('transactions.status') }}</th>
            <th>{{ $t('transactions.date') }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="tx in transactions" :key="tx.id">
            <td>{{ tx.id }}</td>
            <td>{{ tx.user_id }}</td>
            <td>{{ parseFloat(tx.amount).toFixed(2) }}</td>
            <td>{{ tx.type }}</td>
            <td :class="'status-' + tx.status">{{ tx.status }}</td>
            <td>{{ new Date(tx.created_at).toLocaleDateString() }}</td>
          </tr>
          <tr v-if="transactions.length === 0">
            <td colspan="6" style="text-align: center;">No transactions</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import apiClient from '../api'

const transactions = ref([])

onMounted(async () => {
  try {
    const { data } = await apiClient.get('/api/transactions/')
    transactions.value = Array.isArray(data) ? data : (data.results || [])
  } catch (e) {
    console.warn('Could not fetch transactions:', e.message)
  }
})
</script>
