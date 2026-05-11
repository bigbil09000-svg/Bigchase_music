import { cpSync, existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const distDir = join(process.cwd(), 'dist')
const indexPath = join(distDir, 'index.html')

if (!existsSync(indexPath)) {
  throw new Error('dist/index.html not found. Run this script after vite build.')
}

const routes = [
  'about',
  'music',
  'contact',
  'listen',
  'ep',
  'new',
  'story',
  'book',
  'booking',
  'yt',
  'youtube',
  'ig',
  'instagram',
  'tiktok',
  'spotify',
]

const indexHtml = readFileSync(indexPath, 'utf8')

for (const route of routes) {
  const routeDir = join(distDir, route)
  mkdirSync(routeDir, { recursive: true })
  writeFileSync(join(routeDir, 'index.html'), indexHtml)
}

// Ensure unknown paths still boot the SPA shell on GitHub Pages.
cpSync(indexPath, join(distDir, '404.html'))
