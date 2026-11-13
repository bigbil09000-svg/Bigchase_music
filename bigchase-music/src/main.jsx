import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CLOUDFLARE_ANALYTICS_TOKEN } from './data/site'

// Cloudflare Web Analytics (privacy-friendly, no cookies). Tracks page views, incl. in-app navigation.
if (CLOUDFLARE_ANALYTICS_TOKEN) {
  const s = document.createElement('script')
  s.defer = true
  s.src = 'https://static.cloudflareinsights.com/beacon.min.js'
  s.dataset.cfBeacon = JSON.stringify({ token: CLOUDFLARE_ANALYTICS_TOKEN, spa: true })
  document.head.appendChild(s)
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
