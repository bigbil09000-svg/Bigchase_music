import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="flex flex-col items-center justify-center text-center py-36 px-6">
        <p className="text-yellow-500 text-xs font-bold tracking-[0.35em] uppercase mb-4">Independent Record Label</p>
        <h2 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 tracking-tight">
          BigChase <span className="text-yellow-400">Music</span>
        </h2>
        <p className="max-w-lg text-gray-400 text-lg leading-relaxed mb-10">
          Where passion meets purpose. Authentic sound crafted to inspire,
          uplift, and move the soul.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/music"
            className="bg-yellow-500 text-black px-8 py-3 rounded-full font-bold tracking-wide hover:bg-yellow-400 transition-all duration-200 shadow-lg shadow-yellow-500/20"
          >
            Listen Now
          </Link>
          <Link
            to="/about"
            className="border border-gray-600 text-gray-300 px-8 py-3 rounded-full font-semibold tracking-wide hover:border-yellow-500 hover:text-yellow-400 transition-all duration-200"
          >
            Our Story
          </Link>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="flex items-center gap-4 px-10 py-2">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-yellow-700/40 to-transparent"></div>
        <span className="text-yellow-600 text-xs tracking-widest uppercase">Now Playing</span>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-yellow-700/40 to-transparent"></div>
      </div>

      {/* ── PREVIEW CARDS ── */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link to="/music" className="group bg-gray-900/70 border border-gray-800 rounded-2xl p-6 hover:border-yellow-700/60 transition-all duration-200">
            <p className="text-yellow-500 text-xs tracking-widest uppercase mb-3">Discography</p>
            <h3 className="text-xl font-extrabold mb-2 group-hover:text-yellow-400 transition-colors">Music</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Latest releases, EPs, and streaming links.</p>
          </Link>
          <Link to="/about" className="group bg-gray-900/70 border border-gray-800 rounded-2xl p-6 hover:border-yellow-700/60 transition-all duration-200">
            <p className="text-yellow-500 text-xs tracking-widest uppercase mb-3">Our Story</p>
            <h3 className="text-xl font-extrabold mb-2 group-hover:text-yellow-400 transition-colors">About</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Mission, vision, and the heart behind the brand.</p>
          </Link>
          <Link to="/contact" className="group bg-gray-900/70 border border-gray-800 rounded-2xl p-6 hover:border-yellow-700/60 transition-all duration-200">
            <p className="text-yellow-500 text-xs tracking-widest uppercase mb-3">Get In Touch</p>
            <h3 className="text-xl font-extrabold mb-2 group-hover:text-yellow-400 transition-colors">Contact</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Bookings, features, and business inquiries.</p>
          </Link>
        </div>
      </section>
    </>
  )
}
