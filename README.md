# Финансовый дашборд (Vue 3 SPA)

SPA-приложение для визуализации финансовых данных на базе **Vue 3**, **Pinia**, **Vue Router**, с интеграцией с backend API и мок PayPal. (Демо [fintech_demo_expense_tracker_fastapi](https://github.com/doletsky/fintech_demo_expense_tracker_fastapi))

## Возможности

- Список расходов/транзакций/инвойсов с CRUD и пагинацией
- Графики расходов и платежей (Chart.js)
- Оплата через мок PayPal (кнопка "Pay with PayPal" с редирект-симуляцией)
- Интернационализация (i18n) — русский и английский
- Формы ввода с валидацией
- Таблицы с фильтрацией и сортировкой
- Клиентское логирование ошибок (отправка на backend)
- Сборка через Vite
- Docker + Nginx для production

## Стек технологий

| Компонент | Технология |
|-----------|------------|
| Фреймворк | Vue 3 (Composition API) |
| Состояние | Pinia |
| Роутинг | Vue Router 4 |
| Графики | Chart.js + vue-chartjs |
| i18n | vue-i18n |
| HTTP-клиент | Axios |
| Сборка | Vite |
| Production | Docker + Nginx |
