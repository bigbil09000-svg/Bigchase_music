import { Link } from 'react-router-dom'
import { releases, ARTIST, upcoming, isReleased, presaveHref } from '../data/site'
import AlbumSpotlight from '../components/AlbumSpotlight'
import StreamLinks, { SpotifyEmbed } from '../components/StreamLinks'
import SocialLinks from '../components/SocialLinks'
import Newsletter from '../components/Newsletter'
import usePageMeta from '../hooks/usePageMeta'

export default function Home() {
  usePageMeta('')
  const albumOut = isReleased()

  return (
    <>
      {/* ── HERO ── */}
      <section className="flex flex-col items-center justify-center px-6 py-28 text-center sm:py-36">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-yellow-500">{ARTIST.genre}</p>
        <h1 className="mb-6 text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
          BigChase <span className="text-yellow-400">Music</span>
        </h1>
        <p className="mb-4 max-w-lg text-lg leading-relaxed text-gray-400">
          Where passion meets purpose. Authentic sound crafted to inspire,
          uplift, and move the soul.
        </p>
        <p className="mb-10 text-sm text-zinc-300">
          <span className="mr-2 rounded-full bg-yellow-500/15 px-3 py-1 text-xs font-bold uppercase tracking-widest text-yellow-300">
            {albumOut ? 'Out Now' : `New Album · ${upcoming.shortDate}`}
          </span>
          {upcoming.title}
        </p>
        <div className="mb-10 flex flex-wrap justify-center gap-4">
          <a
            href={presaveHref}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-yellow-500 px-8 py-3 font-bold tracking-wide text-black shadow-lg shadow-yellow-500/20 transition-all duration-200 hover:bg-yellow-400"
          >
            {albumOut ? `Listen to "${upcoming.title}"` : 'Pre-save the Album'}
          </a>
          <Link
            to="/music"
            className="rounded-full border border-gray-600 px-8 py-3 font-semibold tracking-wide text-gray-300 transition-all duration-200 hover:border-yellow-500 hover:text-yellow-400"
          >
            All Music
          </Link>
        </div>
        <SocialLinks />
      </section>

      {/* ── NEW ALBUM ── */}
      <section className="px-4 pb-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <AlbumSpotlight />
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="flex items-center gap-4 px-10 py-2">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-700/40 to-transparent"></div>
        <span className="text-xs uppercase tracking-widest text-yellow-600">Now Playing</span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-700/40 to-transparent"></div>
      </div>

      {/* ── LATEST RELEASES ── */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-2 text-center text-xs font-bold uppercase tracking-[0.35em] text-yellow-500">Available Now</p>
          <h2 className="mb-3 text-center text-2xl font-black tracking-tight sm:text-3xl">Latest Releases</h2>
          <p className="mx-auto mb-8 max-w-2xl text-center text-sm text-zinc-400">Choose your favorite platform and stream instantly.</p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {releases.map(r => (
              <div
                key={r.id}
                className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-900/95 to-black p-6 shadow-[0_16px_45px_rgba(0,0,0,0.35)] transition-all duration-200 hover:border-yellow-600/70"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-yellow-500/70 to-transparent" />
                <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-yellow-500">{r.type} · {r.status}</p>
                <h3 className="mb-4 text-xl font-black transition-colors group-hover:text-yellow-300">{r.title}</h3>
                <div className="mb-4 overflow-hidden rounded-xl border border-zinc-700/80 bg-zinc-900/60">
                  <SpotifyEmbed src={r.spotifyEmbed} title={r.title} />
                </div>
                <p className="mb-3 text-[0.65rem] uppercase tracking-[0.16em] text-zinc-500">Stream On</p>
                <StreamLinks links={r.links} compact />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <Newsletter />

      {/* ── BOOKING CTA ── */}
      <section className="px-6 pb-24">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 rounded-3xl border border-zinc-800 bg-zinc-950/70 p-8 text-center md:flex-row md:text-left">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.35em] text-yellow-500">Bookings & Press</p>
            <h2 className="text-2xl font-black tracking-tight">Bring BigChase Music to your event</h2>
            <p className="mt-2 text-sm text-zinc-400">Churches, concerts, conferences, features and interviews.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="rounded-full bg-yellow-500 px-6 py-3 font-bold text-black transition-colors hover:bg-yellow-400">
              Book Now
            </Link>
            <Link to="/press" className="rounded-full border border-zinc-600 px-6 py-3 font-semibold text-zinc-200 transition-colors hover:border-yellow-500 hover:text-yellow-300">
              Press Kit
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
