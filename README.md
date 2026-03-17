# Financial Dashboard (Vue 3 SPA)

SPA application for visualizing financial data based on **Vue 3**, **Pinia**, **Vue Router**, with backend API integration and PayPal mock. (Demo: [fintech_demo_expense_tracker_fastapi](https://github.com/doletsky/fintech_demo_expense_tracker_fastapi))

## Features

- List of expenses/transactions/invoices with CRUD and pagination
- Expense and payment charts (Chart.js)
- Payment via PayPal mock ("Pay with PayPal" button with redirect simulation)
- Internationalization (i18n) — Russian and English
- Input forms with validation
- Tables with filtering and sorting
- Client-side error logging (sent to backend)
- Build via Vite
- Docker + Nginx for production

## Technology Stack

| Component   | Technology                |
|-------------|---------------------------|
| Framework   | Vue 3 (Composition API)   |
| State       | Pinia                     |
| Routing     | Vue Router 4              |
| Charts      | Chart.js + vue-chartjs    |
| i18n        | vue-i18n                  |
| HTTP Client | Axios                     |
| Build       | Vite                      |
| Production  | Docker + Nginx            |
