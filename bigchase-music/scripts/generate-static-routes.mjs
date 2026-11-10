import { cpSync, existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { pageMeta } from '../src/data/pageMeta.js'

const SITE_URL = 'https://bigchasemusic.com'
const distDir = join(process.cwd(), 'dist')
const indexPath = join(distDir, 'index.html')

if (!existsSync(indexPath)) {
  throw new Error('dist/index.html not found. Run this script after vite build.')
}

// Real pages get their own title/description/canonical baked in (link previews don't run JS).
const pages = Object.keys(pageMeta).filter(Boolean)

// Short links / redirects just reuse the home page shell.
const aliases = [
  'listen', 'ep', 'new', 'story', 'epk', 'book', 'booking',
  'yt', 'youtube', 'ig', 'instagram', 'tiktok', 'spotify', 'apple',
]

const indexHtml = readFileSync(indexPath, 'utf8')
const home = pageMeta['']

const escapeAttr = s => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

function withMeta(route) {
  const { title, description } = pageMeta[route]
  const url = `${SITE_URL}/${route}`
  let html = indexHtml
    .replaceAll(`<title>${home.title}</title>`, `<title>${title}</title>`)
    .replaceAll(`content="${home.title}"`, `content="${escapeAttr(title)}"`)
    .replaceAll(`content="${escapeAttr(home.description)}"`, `content="${escapeAttr(description)}"`)
    .replaceAll(`content="${home.description}"`, `content="${escapeAttr(description)}"`)
    .replace(`<link rel="canonical" href="${SITE_URL}/" />`, `<link rel="canonical" href="${url}" />`)
    .replace(`<meta property="og:url" content="${SITE_URL}/" />`, `<meta property="og:url" content="${url}" />`)
  if (!html.includes(`<title>${title}</title>`)) {
    throw new Error(`Could not inject meta for /${route} — check index.html title matches pageMeta['']`)
  }
  return html
}

for (const route of pages) {
  const dir = join(distDir, route)
  mkdirSync(dir, { recursive: true })
  writeFileSync(join(dir, 'index.html'), withMeta(route))
}

for (const route of aliases) {
  const dir = join(distDir, route)
  mkdirSync(dir, { recursive: true })
  writeFileSync(join(dir, 'index.html'), indexHtml)
}

// Sitemap for search engines.
const today = new Date().toISOString().slice(0, 10)
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${['', ...pages].map(r => `  <url><loc>${SITE_URL}/${r}</loc><lastmod>${today}</lastmod></url>`).join('\n')}
</urlset>
`
writeFileSync(join(distDir, 'sitemap.xml'), sitemap)
writeFileSync(join(distDir, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`)

// Ensure unknown paths still boot the SPA shell on GitHub Pages.
cpSync(indexPath, join(distDir, '404.html'))
