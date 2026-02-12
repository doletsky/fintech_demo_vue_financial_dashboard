<template>
  <div id="app">
    <nav class="navbar">
      <router-link to="/">{{ $t('nav.dashboard') }}</router-link>
      <router-link to="/expenses">{{ $t('nav.expenses') }}</router-link>
      <router-link to="/transactions">{{ $t('nav.transactions') }}</router-link>
      <select v-model="locale" @change="changeLocale" class="lang-select">
        <option value="en">EN</option>
        <option value="ru">RU</option>
      </select>
    </nav>
    <main class="container">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale: i18nLocale } = useI18n()
const locale = ref(i18nLocale.value)

function changeLocale() {
  i18nLocale.value = locale.value
}
</script>

<style>
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f5f5f5; }
.navbar { display: flex; gap: 1rem; padding: 1rem 2rem; background: #1a1a2e; }
.navbar a { color: #e0e0e0; text-decoration: none; padding: 0.5rem 1rem; border-radius: 4px; }
.navbar a.router-link-active { background: #16213e; color: #fff; }
.lang-select { margin-left: auto; padding: 0.25rem; border-radius: 4px; }
.container { max-width: 1200px; margin: 2rem auto; padding: 0 1rem; }
.card { background: #fff; border-radius: 8px; padding: 1.5rem; margin-bottom: 1rem; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
.btn { padding: 0.5rem 1rem; border: none; border-radius: 4px; cursor: pointer; font-size: 0.9rem; }
.btn-primary { background: #0070ba; color: #fff; }
.btn-paypal { background: #ffc439; color: #111; font-weight: bold; }
.btn-danger { background: #dc3545; color: #fff; }
table { width: 100%; border-collapse: collapse; }
th, td { padding: 0.75rem; text-align: left; border-bottom: 1px solid #eee; }
th { background: #f8f9fa; font-weight: 600; }
input, select { padding: 0.5rem; border: 1px solid #ddd; border-radius: 4px; }
.form-group { margin-bottom: 1rem; }
.form-group label { display: block; margin-bottom: 0.25rem; font-weight: 500; }
.status-paid { color: #28a745; font-weight: bold; }
.status-unpaid { color: #dc3545; }
.status-pending { color: #ffc107; }
</style>
