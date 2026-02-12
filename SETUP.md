# Запуск и тестирование

## Требования

- Node.js 18+ (для разработки)
- Docker (для production)

## Разработка

```bash
cd 04_vue_financial_dashboard
npm install
npm run dev
```

Приложение будет доступно по адресу http://localhost:5173

## Production (Docker)

```bash
cp .env.example .env
docker-compose up --build -d
```

Приложение на http://localhost:80

## Настройка API

В файле `.env` укажите адрес backend API:
```
VITE_API_URL=http://localhost:8000
```

## Структура проекта

```
src/
├── api/          # HTTP-клиент и API-вызовы
├── components/   # Переиспользуемые компоненты
├── views/        # Страницы
├── stores/       # Pinia stores
├── router/       # Vue Router
├── i18n/         # Переводы
├── utils/        # Утилиты (логирование ошибок)
└── App.vue       # Корневой компонент
```

## Тестирование

```bash
npm run build   # Проверка сборки
```

## Остановка

```bash
docker-compose down
```
