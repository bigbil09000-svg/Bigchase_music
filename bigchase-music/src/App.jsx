import { BrowserRouter, Routes, Route } from 'react-router-dom'
import logo from './assets/yrka1.png'
import bgImg from './assets/sLabY.png'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Music from './pages/Music'
import About from './pages/About'
import Contact from './pages/Contact'

function Footer() {
  return (
    <footer className="border-t border-gray-800 px-10 py-10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <img src={logo} alt="BigChase Music" className="h-12 w-auto object-contain opacity-90" loading="lazy" />
        <p className="text-gray-600 text-sm text-center">
          &copy; {new Date().getFullYear()} BigChase Music. All rights reserved.
        </p>
        <div className="flex gap-6 text-gray-600 text-sm">
          {['home','music','about','contact'].map(p => (
            <a key={p} href={`/${p === 'home' ? '' : p}`} className="capitalize hover:text-yellow-400 transition-colors">{p}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <BrowserRouter basename="/">
      <div className="relative bg-black text-white min-h-screen font-sans">
        {/* Fixed faded background */}
        <div
          className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-20 pointer-events-none"
          style={{ backgroundImage: `url(${bgImg})` }}
        ></div>

        <div className="relative z-10">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/music" element={<Music />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  )
}
