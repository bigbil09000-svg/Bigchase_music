import coverArtWebp from '../assets/Untitled.webp'
import coverArt from '../assets/Untitled.png'
import epCoverWebp from '../assets/design.webp'
import epCover from '../assets/design (1).png'
import artistWebp from '../assets/yrka1.webp'
import artistPng from '../assets/yrka1.png'

export default function Music() {
  return (
    <section className="px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-center text-xs font-bold uppercase tracking-[0.4em] text-yellow-500/90">Discography</p>
        <h2 className="mb-10 text-center text-3xl font-black tracking-tight sm:mb-14 sm:text-5xl">Latest Release</h2>

        <div className="overflow-hidden rounded-3xl border border-yellow-900/40 bg-gradient-to-b from-zinc-900/90 via-black to-zinc-950 shadow-[0_25px_80px_rgba(0,0,0,0.65)]">
          <div className="h-1 w-full bg-gradient-to-r from-yellow-900 via-yellow-500 to-yellow-900" />
          <div className="grid gap-8 p-5 sm:p-8 lg:grid-cols-[320px,1fr] lg:gap-12">
            <div className="mx-auto w-full max-w-sm lg:max-w-none">
              <div className="overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-[0_20px_45px_rgba(0,0,0,0.55)]">
                <picture>
                  <source srcSet={coverArtWebp} type="design/webp" />
                  <img src={coverArt} alt="Prophetic Declarations EP cover art" className="block h-auto w-full object-cover" loading="lazy" />
                </picture>
              </div>

              <div className="mt-5 rounded-2xl border border-yellow-900/30 bg-zinc-950/80 p-4">
                <p className="text-[0.7rem] uppercase tracking-[0.35em] text-yellow-500/85">Artist Spotlight</p>
                <div className="mt-3 flex items-center gap-3">
                  <picture>
                    <source srcSet={artistWebp} type="image/webp" />
                    <img
                      src={artistPng}
                      alt="BigChase Music artist avatar"
                      className="h-14 w-14 rounded-full object-cover ring-2 ring-yellow-600/70"
                      loading="lazy"
                    />
                  </picture>
                  <div>
                    <p className="text-base font-semibold text-yellow-100">BigChase</p>
                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Independent Gospel Hip-Hop</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="mb-2 text-xs uppercase tracking-[0.28em] text-yellow-500">New Single</p>
              <h3 className="mb-2 text-3xl font-black sm:text-4xl">Don't Stop Here</h3>
              <p className="mb-5 text-sm text-zinc-400">Available Now!</p>

              <p className="mb-8 max-w-2xl text-sm leading-relaxed text-zinc-300 sm:text-base">
                The latest single from BigChase Music. Stream now on all major platforms and get caught up in the movement.
              </p>

              <div className="mb-8">
                <p className="mb-3 text-[0.7rem] font-bold uppercase tracking-[0.35em] text-yellow-500/90">Streaming Platforms</p>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
                  <a
                    href="https://music.apple.com/gb/artist/bigchase-music/1895686161"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm font-semibold text-zinc-100 transition-all duration-200 hover:border-yellow-600/70 hover:text-yellow-300"
                  >
                    🎵 Apple Music
                  </a>
                  <a
                    href="https://open.spotify.com/artist/5MYZVo1JksOviGgh2wNh8s?si=xd3lEyRRQa6ntcuKgI-SWw&nd=1&dlsi=8b37e52f033a4712"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm font-semibold text-zinc-100 transition-all duration-200 hover:border-yellow-600/70 hover:text-yellow-300"
                  >
                    🎵 Spotify
                  </a>
                  <a
                    href="https://youtube.com/channel/UC87JYhXyU94z_OBhE6PoMWQ?si=1HzaPevCRkumLR00"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm font-semibold text-zinc-100 transition-all duration-200 hover:border-yellow-600/70 hover:text-yellow-300"
                  >
                    🎵 YouTube Music
                  </a>
                  
                  <a
                    href="https://audiomack.com/bigchase_music"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm font-semibold text-zinc-100 transition-all duration-200 hover:border-yellow-600/70 hover:text-yellow-300"
                  >
                    🎵 Audiomack
                  </a>
                  
                  <a
                    href="https://tidal.com/artist/78709665/u"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm font-semibold text-zinc-100 transition-all duration-200 hover:border-yellow-600/70 hover:text-yellow-300"
                  >
                    🎵 TIDAL
                  </a>
                  <a
                    href="https://link.deezer.com/s/33eoGfO2xOvTszYk2DbwT"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm font-semibold text-zinc-100 transition-all duration-200 hover:border-yellow-600/70 hover:text-yellow-300"
                  >
                    🎵 Deezer
                  </a>
                </div>
              </div>

              <div>
                <p className="mb-3 text-[0.7rem] font-bold uppercase tracking-[0.35em] text-yellow-500/90">Follow The Movement</p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://www.instagram.com/bigchase_music/"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-yellow-500 px-5 py-2.5 text-sm font-bold text-black transition-all duration-200 hover:bg-yellow-400"
                  >
                    🔥 Follow on Instagram
                  </a>
                  <a
                    href="https://www.tiktok.com/@bigchase_music"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-yellow-700/70 bg-zinc-900 px-5 py-2.5 text-sm font-bold text-yellow-200 transition-all duration-200 hover:border-yellow-500 hover:text-yellow-100"
                  >
                    🔥 Follow on TikTok
                  </a>
                  <a
                    href="https://www.youtube.com/@BigChase_Music"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-yellow-700/70 bg-zinc-900 px-5 py-2.5 text-sm font-bold text-yellow-200 transition-all duration-200 hover:border-yellow-500 hover:text-yellow-100"
                  >
                    🔥 Subscribe on YouTube
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 overflow-hidden rounded-3xl border border-yellow-900/40 bg-gradient-to-b from-zinc-900/90 via-black to-zinc-950 shadow-[0_25px_80px_rgba(0,0,0,0.65)]">
          <div className="h-1 w-full bg-gradient-to-r from-yellow-900 via-yellow-500 to-yellow-900" />
          <div className="grid gap-8 p-5 sm:p-8 lg:grid-cols-[320px,1fr] lg:gap-12">
            <div className="mx-auto w-full max-w-sm lg:max-w-none">
              <div className="overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-[0_20px_45px_rgba(0,0,0,0.55)]">
                <picture>
                  <source srcSet={epCoverWebp} type="image/webp" />
                  <img src={epCover} alt="Prophetic Declarations EP cover art" className="block h-auto w-full object-cover" loading="lazy" />
                </picture>
              </div>

              <div className="mt-5 rounded-2xl border border-yellow-900/30 bg-zinc-950/80 p-4">
                <p className="text-[0.7rem] uppercase tracking-[0.35em] text-yellow-500/85">Artist Spotlight</p>
                <div className="mt-3 flex items-center gap-3">
                  <picture>
                    <source srcSet={artistWebp} type="image/webp" />
                    <img
                      src={artistPng}
                      alt="BigChase Music artist avatar"
                      className="h-14 w-14 rounded-full object-cover ring-2 ring-yellow-600/70"
                      loading="lazy"
                    />
                  </picture>
                  <div>
                    <p className="text-base font-semibold text-yellow-100">BigChase</p>
                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Independent Gospel Hip-Hop</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="mb-2 text-xs uppercase tracking-[0.28em] text-yellow-500">EP</p>
              <h3 className="mb-2 text-3xl font-black sm:text-4xl">Prophetic Declarations</h3>
              <p className="mb-5 text-sm text-zinc-400">4 Tracks · Available Now!</p>

              <p className="mb-8 max-w-2xl text-sm leading-relaxed text-zinc-300 sm:text-base">
                A premium, soul-forward release built with cinematic textures, bold drums, and scripture-rooted lyrics.
                Every track is crafted to uplift faith, sharpen focus, and keep your spirit moving.
              </p>

              <div className="mb-8">
                <p className="mb-3 text-[0.7rem] font-bold uppercase tracking-[0.35em] text-yellow-500/90">Streaming Platforms</p>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
                  <a
                    href="https://music.apple.com/gb/artist/bigchase-music/1895686161"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm font-semibold text-zinc-100 transition-all duration-200 hover:border-yellow-600/70 hover:text-yellow-300"
                  >
                    🎵 Apple Music
                  </a>
                  <a
                    href="https://open.spotify.com/artist/5MYZVo1JksOviGgh2wNh8s?si=xd3lEyRRQa6ntcuKgI-SWw&nd=1&dlsi=8b37e52f033a4712"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm font-semibold text-zinc-100 transition-all duration-200 hover:border-yellow-600/70 hover:text-yellow-300"
                  >
                    🎵 Spotify
                  </a>
                  <a
                    href="https://youtube.com/channel/UC87JYhXyU94z_OBhE6PoMWQ?si=1HzaPevCRkumLR00"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm font-semibold text-zinc-100 transition-all duration-200 hover:border-yellow-600/70 hover:text-yellow-300"
                  >
                    🎵 YouTube Music
                  </a>
                  
                  <a
                    href="https://audiomack.com/bigchase_music"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm font-semibold text-zinc-100 transition-all duration-200 hover:border-yellow-600/70 hover:text-yellow-300"
                  >
                    🎵 Audiomack
                  </a>
                  
                  <a
                    href="https://tidal.com/artist/78709665/u"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm font-semibold text-zinc-100 transition-all duration-200 hover:border-yellow-600/70 hover:text-yellow-300"
                  >
                    🎵 TIDAL
                  </a>
                  <a
                    href="https://link.deezer.com/s/33eoGfO2xOvTszYk2DbwT"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm font-semibold text-zinc-100 transition-all duration-200 hover:border-yellow-600/70 hover:text-yellow-300"
                  >
                    🎵 Deezer
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
