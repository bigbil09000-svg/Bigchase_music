import { BrowserRouter, Routes, Route, Navigate, Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import logoWebp from './assets/yrka1.webp'
import logoPng from './assets/yrka1.png'
import bgImgWebp from './assets/sLabY.webp'
import Navbar from './components/Navbar'
import SocialLinks from './components/SocialLinks'
import Home from './pages/Home'
import Music from './pages/Music'
import About from './pages/About'
import Press from './pages/Press'
import Contact from './pages/Contact'
import Album from './pages/Album'
import { PROFILES, CONTACT_EMAIL, ARTIST, upcoming, CLOUDFLARE_ANALYTICS_TOKEN } from './data/site'

// External redirect component — sends user to an outside URL
// With analytics on, wait briefly so the visit is recorded before leaving.
function ExternalRedirect({ to }) {
  useEffect(() => {
    const go = () => window.location.replace(to)
    if (!CLOUDFLARE_ANALYTICS_TOKEN) { go(); return }
    const max = setTimeout(go, 1500)
    const onLoad = () => setTimeout(go, 500)
    if (document.readyState === 'complete') onLoad()
    else window.addEventListener('load', onLoad, { once: true })
    return () => { clearTimeout(max); window.removeEventListener('load', onLoad) }
  }, [to])
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-3 text-zinc-400">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-yellow-500 border-t-transparent" />
      <p className="text-sm tracking-widest uppercase">Redirecting…</p>
    </div>
  )
}

// Scroll to top on page change, or to #anchor when the URL has one.
function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) { el.scrollIntoView({ behavior: 'smooth' }); return }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

function NotFound() {
  useEffect(() => { document.title = 'Page Not Found | BigChase Music' }, [])
  return (
    <section className="flex min-h-[50vh] flex-col items-center justify-center px-6 py-24 text-center">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-yellow-500">404</p>
      <h1 className="mb-4 text-4xl font-extrabold">This page doesn't exist</h1>
      <p className="mb-8 text-zinc-400">But the music does.</p>
      <Link to="/music" className="rounded-full bg-yellow-500 px-8 py-3 font-bold text-black hover:bg-yellow-400">Listen Now</Link>
    </section>
  )
}

const FOOTER_LINKS = [
  ['Home', '/'],
  ['Music', '/music'],
  ['About', '/about'],
  ['Press', '/press'],
  ['Contact', '/contact'],
]

function Footer() {
  return (
    <footer className="border-t border-yellow-900/30 bg-black/70 px-6 py-12 sm:px-10">
      <div className="mx-auto grid max-w-6xl gap-10 text-center md:grid-cols-3 md:text-left">
        <div className="flex flex-col items-center md:items-start">
          <picture>
            <source srcSet={logoWebp} type="image/webp" />
            <img src={logoPng} alt="BigChase Music" className="h-14 w-auto object-contain opacity-90" loading="lazy" />
          </picture>
          <p className="mt-3 text-sm text-zinc-500">{ARTIST.tagline}</p>
        </div>

        <nav aria-label="Footer" className="flex flex-col items-center gap-2 text-sm text-zinc-400 md:items-start">
          <p className="mb-1 text-xs font-bold uppercase tracking-[0.3em] text-yellow-500">Explore</p>
          {FOOTER_LINKS.map(([label, to]) => (
            <Link key={to} to={to} className="transition-colors hover:text-yellow-300">{label}</Link>
          ))}
        </nav>

        <div className="flex flex-col items-center gap-3 text-sm text-zinc-400 md:items-start">
          <p className="mb-1 text-xs font-bold uppercase tracking-[0.3em] text-yellow-500">Connect</p>
          <SocialLinks className="md:justify-start" />
          <a href={`mailto:${CONTACT_EMAIL}`} className="transition-colors hover:text-yellow-300">{CONTACT_EMAIL}</a>
          <a href={PROFILES.spotify} target="_blank" rel="noreferrer" className="font-semibold text-yellow-400 transition-colors hover:text-yellow-300">
            Follow on Spotify →
          </a>
        </div>
      </div>
      <p className="mt-10 text-center text-xs text-zinc-600">
        &copy; {new Date().getFullYear()} BigChase Music. All rights reserved.
      </p>
    </footer>
  )
}

export default function App() {
  return (
    <BrowserRouter basename="/">
      <ScrollManager />
      <div className="relative min-h-screen overflow-hidden bg-black text-white font-sans">
        <div className="pointer-events-none fixed inset-0 opacity-35" style={{ backgroundImage: `url(${bgImgWebp})`, backgroundPosition: 'center', backgroundSize: 'cover' }} />
        <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(212,165,61,0.17),transparent_34%),radial-gradient(circle_at_80%_0%,rgba(212,165,61,0.08),transparent_38%)]" />
        <div className="pointer-events-none fixed inset-0 bg-gradient-to-b from-black/58 via-black/76 to-black" />

        <div className="relative z-10">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/music" element={<Music />} />
              <Route path="/about" element={<About />} />
              <Route path="/press" element={<Press />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/a-new-beginning" element={<Album />} />

              {/* ── Short branded URLs ── */}
              {/* Internal redirects */}
              <Route path="/listen" element={<Navigate to="/music" replace />} />
              <Route path="/ep" element={<Navigate to="/music#prophetic-declarations" replace />} />
              <Route path="/new" element={<Navigate to="/music" replace />} />
              <Route path="/story" element={<Navigate to="/about" replace />} />
              <Route path="/epk" element={<Navigate to="/press" replace />} />
              <Route path="/book" element={<Navigate to="/contact" replace />} />
              <Route path="/booking" element={<Navigate to="/contact" replace />} />

              {/* External redirects */}
              <Route path="/yt" element={<ExternalRedirect to={PROFILES.youtube} />} />
              <Route path="/youtube" element={<ExternalRedirect to={PROFILES.youtube} />} />
              <Route path="/ig" element={<ExternalRedirect to={PROFILES.instagram} />} />
              <Route path="/instagram" element={<ExternalRedirect to={PROFILES.instagram} />} />
              <Route path="/tiktok" element={<ExternalRedirect to={PROFILES.tiktok} />} />
              <Route path="/spotify" element={<ExternalRedirect to={PROFILES.spotify} />} />
              <Route path="/apple" element={<ExternalRedirect to={PROFILES.apple} />} />
              <Route path="/presave" element={<ExternalRedirect to={upcoming.preorder} />} />
              <Route path="/preorder" element={<ExternalRedirect to={upcoming.preorder} />} />
              <Route path="/album" element={<ExternalRedirect to={upcoming.preorder} />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  )
}
