import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    nav: { dashboard: 'Dashboard', expenses: 'Expenses', transactions: 'Transactions' },
    dashboard: { title: 'Financial Dashboard', totalExpenses: 'Total Expenses', totalTransactions: 'Total Transactions', byCategory: 'Expenses by Category' },
    expenses: { title: 'Expenses', add: 'Add Expense', amount: 'Amount', currency: 'Currency', category: 'Category', description: 'Description', date: 'Date', status: 'Status', actions: 'Actions', payWithPaypal: 'Pay with PayPal', delete: 'Delete', paid: 'Paid', unpaid: 'Unpaid', pending: 'Pending' },
    transactions: { title: 'Transactions', userId: 'User ID', amount: 'Amount', type: 'Type', status: 'Status', date: 'Date' },
    common: { save: 'Save', cancel: 'Cancel', loading: 'Loading...', error: 'Error occurred' },
  },
  ru: {
    nav: { dashboard: 'Дашборд', expenses: 'Расходы', transactions: 'Транзакции' },
    dashboard: { title: 'Финансовый дашборд', totalExpenses: 'Всего расходов', totalTransactions: 'Всего транзакций', byCategory: 'Расходы по категориям' },
    expenses: { title: 'Расходы', add: 'Добавить расход', amount: 'Сумма', currency: 'Валюта', category: 'Категория', description: 'Описание', date: 'Дата', status: 'Статус', actions: 'Действия', payWithPaypal: 'Оплатить через PayPal', delete: 'Удалить', paid: 'Оплачен', unpaid: 'Не оплачен', pending: 'Ожидание' },
    transactions: { title: 'Транзакции', userId: 'ID пользователя', amount: 'Сумма', type: 'Тип', status: 'Статус', date: 'Дата' },
    common: { save: 'Сохранить', cancel: 'Отмена', loading: 'Загрузка...', error: 'Произошла ошибка' },
  },
}

export default createI18n({ locale: 'ru', fallbackLocale: 'en', messages })
