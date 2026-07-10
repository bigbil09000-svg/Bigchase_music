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

      {/* ── LATEST RELEASES ── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-yellow-500 text-xs font-bold tracking-[0.35em] uppercase mb-2 text-center">Available Now</p>
          <h3 className="text-center text-2xl sm:text-3xl font-black tracking-tight mb-3">Latest Releases</h3>
          <p className="text-center text-sm text-zinc-400 max-w-2xl mx-auto mb-8">Choose your favorite platform and stream instantly.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden bg-gradient-to-b from-zinc-900/95 to-black border border-zinc-800 rounded-2xl p-6 hover:border-yellow-600/70 transition-all duration-200 shadow-[0_16px_45px_rgba(0,0,0,0.35)]">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-yellow-500/70 to-transparent" />
              <p className="text-yellow-500 text-[0.68rem] font-semibold tracking-[0.2em] uppercase mb-3">Single</p>
              <h3 className="text-xl font-black mb-2 group-hover:text-yellow-300 transition-colors">Guiding Lighting</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">New single out now. Choose your platform.</p>
              <p className="text-[0.65rem] uppercase tracking-[0.16em] text-zinc-500 mb-3">Stream On</p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <a href="https://music.apple.com/gb/song/guiding-lighting/6787206467" target="_blank" rel="noreferrer" className="rounded-lg border border-zinc-700/90 bg-zinc-900/70 px-3 py-2 text-center font-medium text-zinc-200 hover:border-yellow-600/70 hover:text-yellow-300 transition-colors">Apple</a>
                <a href="https://open.spotify.com/track/2HLlZt3ombCKwHLAiU7pqx" target="_blank" rel="noreferrer" className="rounded-lg border border-zinc-700/90 bg-zinc-900/70 px-3 py-2 text-center font-medium text-zinc-200 hover:border-yellow-600/70 hover:text-yellow-300 transition-colors">Spotify</a>
                <a href="http://www.youtube.com/@BigChase_Music" target="_blank" rel="noreferrer" className="rounded-lg border border-zinc-700/90 bg-zinc-900/70 px-3 py-2 text-center font-medium text-zinc-200 hover:border-yellow-600/70 hover:text-yellow-300 transition-colors">YouTube</a>
                <a href="https://audiomack.com/bigchase_music/song/guiding-lighting" target="_blank" rel="noreferrer" className="rounded-lg border border-zinc-700/90 bg-zinc-900/70 px-3 py-2 text-center font-medium text-zinc-200 hover:border-yellow-600/70 hover:text-yellow-300 transition-colors">Audiomack</a>
                <a href="https://tidal.com/track/539642973" target="_blank" rel="noreferrer" className="rounded-lg border border-zinc-700/90 bg-zinc-900/70 px-3 py-2 text-center font-medium text-zinc-200 hover:border-yellow-600/70 hover:text-yellow-300 transition-colors">TIDAL</a>
                <a href="https://www.deezer.com/track/4129771121" target="_blank" rel="noreferrer" className="rounded-lg border border-zinc-700/90 bg-zinc-900/70 px-3 py-2 text-center font-medium text-zinc-200 hover:border-yellow-600/70 hover:text-yellow-300 transition-colors">Deezer</a>
              </div>
            </div>

            <div className="group relative overflow-hidden bg-gradient-to-b from-zinc-900/95 to-black border border-zinc-800 rounded-2xl p-6 hover:border-yellow-600/70 transition-all duration-200 shadow-[0_16px_45px_rgba(0,0,0,0.35)]">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-yellow-500/70 to-transparent" />
              <p className="text-yellow-500 text-[0.68rem] font-semibold tracking-[0.2em] uppercase mb-3">Single</p>
              <h3 className="text-xl font-black mb-2 group-hover:text-yellow-300 transition-colors">Don't Stop Here</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">Fan favorite single available now. Choose your platform.</p>
              <p className="text-[0.65rem] uppercase tracking-[0.16em] text-zinc-500 mb-3">Stream On</p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <a href="https://music.apple.com/gb/album/dont-stop-here-single/6778704531" target="_blank" rel="noreferrer" className="rounded-lg border border-zinc-700/90 bg-zinc-900/70 px-3 py-2 text-center font-medium text-zinc-200 hover:border-yellow-600/70 hover:text-yellow-300 transition-colors">Apple</a>
                <a href="https://open.spotify.com/track/3cWUtJyDv505XmNatOstQQ" target="_blank" rel="noreferrer" className="rounded-lg border border-zinc-700/90 bg-zinc-900/70 px-3 py-2 text-center font-medium text-zinc-200 hover:border-yellow-600/70 hover:text-yellow-300 transition-colors">Spotify</a>
                <a href="http://www.youtube.com/@BigChase_Music" target="_blank" rel="noreferrer" className="rounded-lg border border-zinc-700/90 bg-zinc-900/70 px-3 py-2 text-center font-medium text-zinc-200 hover:border-yellow-600/70 hover:text-yellow-300 transition-colors">YouTube</a>
                <a href="https://audiomack.com/bigchase_music" target="_blank" rel="noreferrer" className="rounded-lg border border-zinc-700/90 bg-zinc-900/70 px-3 py-2 text-center font-medium text-zinc-200 hover:border-yellow-600/70 hover:text-yellow-300 transition-colors">Audiomack</a>
                <a href="https://tidal.com/artist/78709665/u" target="_blank" rel="noreferrer" className="rounded-lg border border-zinc-700/90 bg-zinc-900/70 px-3 py-2 text-center font-medium text-zinc-200 hover:border-yellow-600/70 hover:text-yellow-300 transition-colors">TIDAL</a>
                <a href="https://link.deezer.com/s/33eoGfO2xOvTszYk2DbwT" target="_blank" rel="noreferrer" className="rounded-lg border border-zinc-700/90 bg-zinc-900/70 px-3 py-2 text-center font-medium text-zinc-200 hover:border-yellow-600/70 hover:text-yellow-300 transition-colors">Deezer</a>
              </div>
            </div>

            <div className="group relative overflow-hidden bg-gradient-to-b from-zinc-900/95 to-black border border-zinc-800 rounded-2xl p-6 hover:border-yellow-600/70 transition-all duration-200 shadow-[0_16px_45px_rgba(0,0,0,0.35)]">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-yellow-500/70 to-transparent" />
              <p className="text-yellow-500 text-[0.68rem] font-semibold tracking-[0.2em] uppercase mb-3">EP</p>
              <h3 className="text-xl font-black mb-2 group-hover:text-yellow-300 transition-colors">Prophetic Declarations</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">4-track EP available now. Choose your platform.</p>
              <p className="text-[0.65rem] uppercase tracking-[0.16em] text-zinc-500 mb-3">Stream On</p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <a href="https://music.apple.com/gb/album/prophetic-declarations-ep/1895711445" target="_blank" rel="noreferrer" className="rounded-lg border border-zinc-700/90 bg-zinc-900/70 px-3 py-2 text-center font-medium text-zinc-200 hover:border-yellow-600/70 hover:text-yellow-300 transition-colors">Apple</a>
                <a href="https://open.spotify.com/album/4j3nWINWNwY8dfoORZgGD0" target="_blank" rel="noreferrer" className="rounded-lg border border-zinc-700/90 bg-zinc-900/70 px-3 py-2 text-center font-medium text-zinc-200 hover:border-yellow-600/70 hover:text-yellow-300 transition-colors">Spotify</a>
                <a href="http://www.youtube.com/@BigChase_Music" target="_blank" rel="noreferrer" className="rounded-lg border border-zinc-700/90 bg-zinc-900/70 px-3 py-2 text-center font-medium text-zinc-200 hover:border-yellow-600/70 hover:text-yellow-300 transition-colors">YouTube</a>
                <a href="https://audiomack.com/bigchase_music" target="_blank" rel="noreferrer" className="rounded-lg border border-zinc-700/90 bg-zinc-900/70 px-3 py-2 text-center font-medium text-zinc-200 hover:border-yellow-600/70 hover:text-yellow-300 transition-colors">Audiomack</a>
                <a href="https://tidal.com/artist/78709665/u" target="_blank" rel="noreferrer" className="rounded-lg border border-zinc-700/90 bg-zinc-900/70 px-3 py-2 text-center font-medium text-zinc-200 hover:border-yellow-600/70 hover:text-yellow-300 transition-colors">TIDAL</a>
                <a href="https://link.deezer.com/s/33eoGfO2xOvTszYk2DbwT" target="_blank" rel="noreferrer" className="rounded-lg border border-zinc-700/90 bg-zinc-900/70 px-3 py-2 text-center font-medium text-zinc-200 hover:border-yellow-600/70 hover:text-yellow-300 transition-colors">Deezer</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
