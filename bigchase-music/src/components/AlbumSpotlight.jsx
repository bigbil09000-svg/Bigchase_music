import { useEffect, useState } from 'react'
import { upcoming as album, preorderHref, presaveHref } from '../data/site'
import Icon from './Icons'

function useCountdown(target) {
  const [now, setNow] = useState(() => Date.now())
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [])
  const ms = Math.max(0, new Date(target).getTime() - now)
  return {
    done: ms === 0,
    days: Math.floor(ms / 86400000),
    hours: Math.floor(ms / 3600000) % 24,
    minutes: Math.floor(ms / 60000) % 60,
    seconds: Math.floor(ms / 1000) % 60,
  }
}

function Countdown({ t }) {
  const parts = [['Days', t.days], ['Hours', t.hours], ['Mins', t.minutes], ['Secs', t.seconds]]
  return (
    <div className="mb-8 grid max-w-sm grid-cols-4 gap-2" role="timer" aria-label={`${t.days} days until release`}>
      {parts.map(([label, value]) => (
        <div key={label} className="rounded-xl border border-yellow-900/50 bg-black/60 px-2 py-3 text-center">
          <p className="text-2xl font-black tabular-nums text-yellow-300 sm:text-3xl">{String(value).padStart(2, '0')}</p>
          <p className="mt-1 text-[0.6rem] uppercase tracking-[0.2em] text-zinc-500">{label}</p>
        </div>
      ))}
    </div>
  )
}

// Featured album block: pre-order + countdown before release, "Out Now" after.
// `showTracks` adds the full tracklist (used on the Music page).
export default function AlbumSpotlight({ showTracks = false }) {
  const t = useCountdown(album.releaseDate)
  const released = t.done

  return (
    <article
      id={album.id}
      className="scroll-mt-6 overflow-hidden rounded-3xl border border-yellow-700/50 bg-gradient-to-b from-zinc-900/95 via-black to-zinc-950 shadow-[0_25px_80px_rgba(212,165,61,0.12)]"
    >
      <div className="h-1 w-full bg-gradient-to-r from-yellow-900 via-yellow-400 to-yellow-900" />
      <div className="grid gap-8 p-5 sm:p-8 lg:grid-cols-[minmax(0,420px),1fr] lg:gap-12">
        <div className="mx-auto w-full max-w-md lg:max-w-none">
          <a href={presaveHref} target="_blank" rel="noreferrer" className="block overflow-hidden rounded-2xl shadow-[0_20px_45px_rgba(0,0,0,0.55)] ring-1 ring-yellow-500/20">
            <img src={album.cover.src} alt={`${album.title} album cover`} className="block h-auto w-full" />
          </a>
        </div>

        <div className="flex flex-col justify-center">
          <p className="mb-3 flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-[0.28em] text-yellow-500">
            <span className="rounded-full bg-yellow-500 px-3 py-1 tracking-widest text-black">
              {released ? 'Out Now' : 'New Album'}
            </span>
            {released ? `Album · ${album.tracks.length} Tracks` : `Out ${album.releaseLabel}`}
          </p>
          <h2 className="mb-4 text-4xl font-black tracking-tight sm:text-5xl">{album.title}</h2>
          <p className="mb-6 max-w-xl text-sm leading-relaxed text-zinc-300 sm:text-base">
            {released
              ? `The new album from BigChase Music — ${album.tracks.length} tracks of faith, fire and fresh starts. Listen now on your favorite platform.`
              : album.blurb}
          </p>

          {!released && <Countdown t={t} />}

          <div className="flex flex-wrap gap-3">
            <a
              href={presaveHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-yellow-500 px-7 py-3 font-bold text-black shadow-lg shadow-yellow-500/20 transition-colors hover:bg-yellow-400"
            >
              <Icon name="spotify" size={18} />
              {released ? 'Listen Now — All Platforms' : 'Pre-save on Spotify'}
            </a>
            <a
              href={preorderHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-600 px-6 py-3 font-semibold text-zinc-200 transition-colors hover:border-yellow-500 hover:text-yellow-300"
            >
              <Icon name="apple" size={18} />
              {released ? 'Apple Music' : 'Pre-order on Apple Music'}
            </a>
          </div>

          {showTracks && (
            <div className="mt-10">
              <p className="mb-3 text-[0.7rem] font-bold uppercase tracking-[0.35em] text-yellow-500/90">Tracklist</p>
              <ol className="grid gap-x-8 gap-y-1 text-sm sm:grid-cols-2">
                {album.tracks.map((name, i) => (
                  <li key={name} className="flex gap-3 border-b border-zinc-800/80 py-2 text-zinc-300">
                    <span className="w-5 text-right tabular-nums text-zinc-500">{i + 1}</span>
                    {name}
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>
      </div>
    </article>
  )
}
