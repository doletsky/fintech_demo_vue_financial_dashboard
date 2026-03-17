# How the Project Works

## General Idea

This is a web application for viewing and managing financial data. It shows expenses, transactions, charts, and allows you to "pay" via PayPal mock. It works in the browser as a single-page application (SPA).

## How It's Built

### 1. Vue 3
Vue is a framework for building interfaces. Every element on the page (button, table, form) is a component. Components can be reused and combined like building blocks.

### 2. Pinia (State Store)
When data is needed by several components at once (for example, the list of expenses), it is stored in Pinia—a central store. Any component can read and modify data there.

### 3. Vue Router
Allows switching "pages" without reloading. When you click on the "Expenses" or "Transactions" link, the URL changes, but the page does not reload—just another component is shown.

### 4. API Interaction
The app sends HTTP requests to the backend (from tasks 1/2/3/6) via Axios. For example: load the list of expenses, create a new one, pay via PayPal.

### 5. Charts
Chart.js is used to display expense charts by category, payments by month. Data for charts comes from the backend API.

### 6. PayPal Mock
The "Pay with PayPal" button simulates the payment process:
1. Click the button → request to API `/payments/paypal/create`
2. Redirect to "PayPal page" (simulation)
3. Confirm → request to `/payments/paypal/capture`
4. Expense status updates to "paid"

### 7. Internationalization (i18n)
The app supports multiple languages. All texts (buttons, labels, messages) are stored in translation files, and you can switch the language with one click.

### 8. Error Logging
When an error occurs in the browser (for example, API does not respond), it is caught and sent to the backend for logging. This helps to find problems.

### 9. Docker and Nginx
For production, the app is built into static files (HTML, CSS, JS) and served via Nginx—a fast web server.

## Data Flow

```
User → Browser (Vue 3)
           ↓
      Vue Router → Page (View)
           ↓
      Pinia Store → Axios → Backend API
           ↓
      Components update reactively
           ↓
      Charts, tables, forms
```
