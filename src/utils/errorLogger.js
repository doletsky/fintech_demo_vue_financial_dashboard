import { errorApi } from '../api'

export function setupErrorLogging(app) {
  app.config.errorHandler = (err, instance, info) => {
    console.error('Vue Error:', err)
    errorApi.report({
      message: err.message,
      stack: err.stack,
      info,
      url: window.location.href,
      timestamp: new Date().toISOString(),
    })
  }

  window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled rejection:', event.reason)
    errorApi.report({
      message: event.reason?.message || String(event.reason),
      type: 'unhandled_rejection',
      url: window.location.href,
      timestamp: new Date().toISOString(),
    })
  })
}
