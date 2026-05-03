import coverArt from '../assets/design (1).png'

export default function Music() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-yellow-500 text-xs font-bold tracking-[0.35em] uppercase text-center mb-3">Discography</p>
        <h2 className="text-4xl font-extrabold text-center mb-14 tracking-tight">Latest Release</h2>

        <div className="flex flex-col md:flex-row gap-10 items-center bg-gray-900/80 border border-gray-800 rounded-3xl p-8 shadow-2xl backdrop-blur-sm">
          {/* Cover Art */}
          <div className="w-full md:w-72 flex-shrink-0 rounded-2xl overflow-hidden shadow-2xl shadow-black/60 ring-1 ring-white/10">
            <img src={coverArt} alt="EP Cover Art" className="w-full h-auto object-cover block" loading="lazy" />
          </div>

          {/* Info */}
          <div className="flex-1 text-left">
            <p className="text-yellow-500 text-xs tracking-widest uppercase mb-2">New EP</p>
            <h3 className="text-3xl font-extrabold mb-1">Prophetic Declarations</h3>
            <p className="text-gray-500 text-sm mb-6">4 Tracks &nbsp;·&nbsp; Available May 10, 2026 &nbsp;·&nbsp; BigChase Music</p>

            <p className="text-gray-400 leading-relaxed mb-8 max-w-md">
              A carefully crafted collection of tracks that blends raw emotion with refined production.
              Each song tells a story meant to resonate beyond the music.
            </p>

            <div className="flex flex-wrap gap-3">
              <a href="#" className="flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full text-sm font-bold hover:bg-gray-100 transition-all duration-200">
                <span>&#9654;</span> Apple Music
              </a>
              <a href="#" className="flex items-center gap-2 bg-green-600 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-green-500 transition-all duration-200">
                <span>&#9654;</span> Spotify
              </a>
              <a
                href="https://www.youtube.com/channel/UCPWEZ7W6EdZZEb7W7_aQ28Q"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-red-600 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-red-500 transition-all duration-200"
              >
                <span>&#9654;</span> YouTube
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
