import { useEffect } from 'react'
import { pageMeta } from '../data/pageMeta'

// Updates <title> and the description meta tag when a page mounts.
export default function usePageMeta(key) {
  useEffect(() => {
    const meta = pageMeta[key]
    if (!meta) return
    document.title = meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description)
  }, [key])
}
