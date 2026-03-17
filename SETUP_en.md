# Launch and Testing

## Requirements

- Node.js 18+ (for development)
- Docker (for production)

## Development

```bash
cd 04_vue_financial_dashboard
npm install
npm run dev
```

The app will be available at http://localhost:5173

## Production (Docker)

```bash
cp .env.example .env
docker-compose up --build -d
```

The app at http://localhost:80

## API Setup

In the `.env` file, specify the backend API address:
```
VITE_API_URL=http://localhost:8000
```

## Project Structure

```
src/
├── api/          # HTTP client and API calls
├── components/   # Reusable components
├── views/        # Pages
├── stores/       # Pinia stores
├── router/       # Vue Router
├── i18n/         # Translations
├── utils/        # Utilities (error logging)
└── App.vue       # Root component
```

## Testing

```bash
npm run build   # Check the build
```

## Stopping

```bash
docker-compose down
```
