import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import logoWebp from './assets/yrka1.webp'
import logoPng from './assets/yrka1.png'
import bgImgWebp from './assets/sLabY.webp'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Music from './pages/Music'
import About from './pages/About'
import Contact from './pages/Contact'

// External redirect component — sends user to an outside URL
function ExternalRedirect({ to }) {
  useEffect(() => { window.location.replace(to) }, [to])
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-3 text-zinc-400">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-yellow-500 border-t-transparent" />
      <p className="text-sm tracking-widest uppercase">Redirecting…</p>
    </div>
  )
}

function Footer() {
  return (
    <footer className="border-t border-yellow-900/30 bg-black/70 px-6 py-10 sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <picture>
          <source srcSet={logoWebp} type="image/webp" />
          <img src={logoPng} alt="BigChase Music" className="h-12 w-auto object-contain opacity-90" loading="lazy" />
        </picture>
        <p className="text-center text-sm text-zinc-500">
          &copy; {new Date().getFullYear()} BigChase Music. All rights reserved.
        </p>
        <div className="flex gap-4 text-sm text-zinc-500 sm:gap-6">
          {['home','music','about','contact'].map(p => (
            <a key={p} href={`/${p === 'home' ? '' : p}`} className="capitalize transition-colors hover:text-yellow-300">{p}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <BrowserRouter basename="/">
      <div className="relative min-h-screen overflow-hidden bg-black text-white font-sans">
        <div className="pointer-events-none fixed inset-0 opacity-25" style={{ backgroundImage: `url(${bgImgWebp})`, backgroundPosition: 'center', backgroundSize: 'cover' }} />
        <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(212,165,61,0.17),transparent_34%),radial-gradient(circle_at_80%_0%,rgba(212,165,61,0.08),transparent_38%)]" />
        <div className="pointer-events-none fixed inset-0 bg-gradient-to-b from-black/70 via-black/82 to-black" />

        <div className="relative z-10">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/music" element={<Music />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />

              {/* ── Short branded URLs ── */}
              {/* Internal redirects */}
              <Route path="/listen" element={<Navigate to="/music" replace />} />
              <Route path="/ep" element={<Navigate to="/music" replace />} />
              <Route path="/new" element={<Navigate to="/music" replace />} />
              <Route path="/story" element={<Navigate to="/about" replace />} />
              <Route path="/book" element={<Navigate to="/contact" replace />} />
              <Route path="/booking" element={<Navigate to="/contact" replace />} />

              {/* External redirects */}
              <Route path="/yt" element={<ExternalRedirect to="https://www.youtube.com/channel/UCPWEZ7W6EdZZEb7W7_aQ28Q" />} />
              <Route path="/youtube" element={<ExternalRedirect to="https://www.youtube.com/channel/UCPWEZ7W6EdZZEb7W7_aQ28Q" />} />
              <Route path="/ig" element={<ExternalRedirect to="https://www.instagram.com/bigchasemusic" />} />
              <Route path="/instagram" element={<ExternalRedirect to="https://www.instagram.com/bigchasemusic" />} />
              <Route path="/tiktok" element={<ExternalRedirect to="https://www.tiktok.com/@bigchasemusic" />} />
              <Route path="/spotify" element={<ExternalRedirect to="https://open.spotify.com/artist/bigchasemusic" />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  )
}
