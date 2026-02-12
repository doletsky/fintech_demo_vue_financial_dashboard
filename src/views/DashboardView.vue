<template>
  <div>
    <h1>{{ $t('dashboard.title') }}</h1>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 1rem;">
      <div class="card">
        <h3>{{ $t('dashboard.totalExpenses') }}</h3>
        <p style="font-size: 2rem; font-weight: bold;">{{ store.totalAmount.toFixed(2) }} USD</p>
        <p>{{ store.expenses.length }} records</p>
      </div>

      <div class="card">
        <h3>{{ $t('dashboard.byCategory') }}</h3>
        <div v-if="store.summary">
          <div v-for="item in store.summary.items" :key="item.category" style="margin: 0.5rem 0;">
            <strong>{{ item.category }}</strong>: {{ item.total_amount.toFixed(2) }} ({{ item.count }})
          </div>
        </div>
        <p v-else>{{ $t('common.loading') }}</p>
      </div>
    </div>

    <div class="card" style="margin-top: 1rem;">
      <h3>{{ $t('dashboard.byCategory') }}</h3>
      <canvas ref="chartCanvas" width="400" height="200"></canvas>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import { useExpenseStore } from '../stores/expenses'
import { Chart, ArcElement, Tooltip, Legend, PieController } from 'chart.js'

Chart.register(ArcElement, Tooltip, Legend, PieController)

const store = useExpenseStore()
const chartCanvas = ref(null)
let chartInstance = null

function renderChart() {
  if (!store.summary || !chartCanvas.value) return
  if (chartInstance) chartInstance.destroy()

  const labels = store.summary.items.map(i => i.category)
  const data = store.summary.items.map(i => i.total_amount)
  const colors = ['#0070ba', '#ffc439', '#28a745', '#dc3545', '#6f42c1', '#17a2b8']

  chartInstance = new Chart(chartCanvas.value, {
    type: 'pie',
    data: {
      labels,
      datasets: [{ data, backgroundColor: colors.slice(0, labels.length) }],
    },
  })
}

onMounted(async () => {
  await store.fetchExpenses()
  await store.fetchSummary('month')
  renderChart()
})

watch(() => store.summary, renderChart)
</script>
