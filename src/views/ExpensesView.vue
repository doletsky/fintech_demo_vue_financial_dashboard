<template>
  <div>
    <h1>{{ $t('expenses.title') }}</h1>

    <!-- Add expense form -->
    <div class="card" style="margin-top: 1rem;">
      <h3>{{ $t('expenses.add') }}</h3>
      <form @submit.prevent="addExpense" style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem;">
        <div class="form-group">
          <label>{{ $t('expenses.amount') }}</label>
          <input v-model.number="form.amount" type="number" step="0.01" required />
        </div>
        <div class="form-group">
          <label>{{ $t('expenses.currency') }}</label>
          <select v-model="form.currency">
            <option>USD</option>
            <option>EUR</option>
            <option>RUB</option>
          </select>
        </div>
        <div class="form-group">
          <label>{{ $t('expenses.category') }}</label>
          <input v-model="form.category" required />
        </div>
        <div class="form-group">
          <label>{{ $t('expenses.description') }}</label>
          <input v-model="form.description" />
        </div>
        <div class="form-group">
          <label>{{ $t('expenses.date') }}</label>
          <input v-model="form.spent_at" type="datetime-local" required />
        </div>
        <div class="form-group" style="display: flex; align-items: flex-end;">
          <button type="submit" class="btn btn-primary">{{ $t('common.save') }}</button>
        </div>
      </form>
    </div>

    <!-- Expenses table -->
    <div class="card" style="margin-top: 1rem;">
      <p v-if="store.loading">{{ $t('common.loading') }}</p>
      <table v-else>
        <thead>
          <tr>
            <th>ID</th>
            <th>{{ $t('expenses.amount') }}</th>
            <th>{{ $t('expenses.currency') }}</th>
            <th>{{ $t('expenses.category') }}</th>
            <th>{{ $t('expenses.description') }}</th>
            <th>{{ $t('expenses.date') }}</th>
            <th>{{ $t('expenses.status') }}</th>
            <th>{{ $t('expenses.actions') }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="expense in store.expenses" :key="expense.id">
            <td>{{ expense.id }}</td>
            <td>{{ expense.amount.toFixed(2) }}</td>
            <td>{{ expense.currency }}</td>
            <td>{{ expense.category }}</td>
            <td>{{ expense.description }}</td>
            <td>{{ new Date(expense.spent_at).toLocaleDateString() }}</td>
            <td :class="'status-' + expense.payment_status">
              {{ $t('expenses.' + expense.payment_status) }}
            </td>
            <td>
              <button
                v-if="expense.payment_status === 'unpaid'"
                class="btn btn-paypal"
                @click="paypal(expense.id)"
                :disabled="paying === expense.id"
              >
                {{ paying === expense.id ? '...' : $t('expenses.payWithPaypal') }}
              </button>
              <button class="btn btn-danger" @click="remove(expense.id)" style="margin-left: 0.5rem;">
                {{ $t('expenses.delete') }}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue'
import { useExpenseStore } from '../stores/expenses'

const store = useExpenseStore()
const paying = ref(null)

const form = reactive({
  amount: null,
  currency: 'USD',
  category: '',
  description: '',
  spent_at: '',
})

async function addExpense() {
  await store.createExpense({ ...form, spent_at: new Date(form.spent_at).toISOString() })
  form.amount = null
  form.category = ''
  form.description = ''
  form.spent_at = ''
}

async function remove(id) {
  await store.deleteExpense(id)
}

async function paypal(id) {
  paying.value = id
  try {
    await store.payWithPaypal(id)
  } finally {
    paying.value = null
  }
}

onMounted(() => store.fetchExpenses())
</script>
