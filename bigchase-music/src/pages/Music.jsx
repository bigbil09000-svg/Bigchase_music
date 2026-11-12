import { releases, PROFILES } from '../data/site'
import StreamLinks, { ReleaseCover, SpotifyEmbed } from '../components/StreamLinks'
import SocialLinks from '../components/SocialLinks'
import AlbumSpotlight from '../components/AlbumSpotlight'
import usePageMeta from '../hooks/usePageMeta'

export default function Music() {
  usePageMeta('music')

  return (
    <section className="px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-center text-xs font-bold uppercase tracking-[0.4em] text-yellow-500/90">Discography</p>
        <h1 className="mb-10 text-center text-3xl font-black tracking-tight sm:mb-14 sm:text-5xl">Music</h1>

        <div className="space-y-16">
          <AlbumSpotlight showTracks />
          {releases.map((r, i) => (
            <article
              key={r.id}
              id={r.id}
              className="scroll-mt-6 overflow-hidden rounded-3xl border border-yellow-900/40 bg-gradient-to-b from-zinc-900/90 via-black to-zinc-950 shadow-[0_25px_80px_rgba(0,0,0,0.65)]"
            >
              <div className="h-1 w-full bg-gradient-to-r from-yellow-900 via-yellow-500 to-yellow-900" />
              <div className="grid gap-8 p-5 sm:p-8 lg:grid-cols-[320px,1fr] lg:gap-12">
                <div className="mx-auto w-full max-w-sm lg:max-w-none">
                  <div className="overflow-hidden rounded-2xl shadow-[0_20px_45px_rgba(0,0,0,0.55)] ring-1 ring-white/10">
                    <ReleaseCover cover={r.cover} title={r.title} />
                  </div>
                </div>

                <div>
                  <p className="mb-2 text-xs uppercase tracking-[0.28em] text-yellow-500">
                    {i === 0 ? 'Latest Single' : r.type}
                  </p>
                  <h2 className="mb-2 text-3xl font-black sm:text-4xl">{r.title}</h2>
                  <p className="mb-5 text-sm text-zinc-400">{r.type} · {r.status} · Available Now</p>

                  <p className="mb-8 max-w-2xl text-sm leading-relaxed text-zinc-300 sm:text-base">{r.blurb}</p>

                  <div className="mb-8 overflow-hidden rounded-xl border border-zinc-700/80 bg-zinc-900/60">
                    <SpotifyEmbed src={r.spotifyEmbed} title={r.title} height={152} />
                  </div>

                  <p className="mb-3 text-[0.7rem] font-bold uppercase tracking-[0.35em] text-yellow-500/90">Streaming Platforms</p>
                  <StreamLinks links={r.links} />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ── FOLLOW ── */}
        <div className="mt-20 text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.35em] text-yellow-500">Never Miss A Drop</p>
          <h2 className="mb-3 text-2xl font-black tracking-tight sm:text-3xl">Follow BigChase Music</h2>
          <p className="mx-auto mb-6 max-w-xl text-sm text-zinc-400">
            Follow on Spotify and new releases land in your Release Radar automatically.
          </p>
          <a
            href={PROFILES.spotify}
            target="_blank"
            rel="noreferrer"
            className="mb-8 inline-block rounded-full bg-yellow-500 px-8 py-3 font-bold text-black transition-colors hover:bg-yellow-400"
          >
            Follow on Spotify
          </a>
          <SocialLinks />
        </div>
      </div>
    </section>
  )
}
