import { useLocation } from 'react-router-dom'
import { upcoming as album } from '../data/site'
import { albumStory, trackNotes, slugify } from '../data/album'
import AlbumSpotlight from '../components/AlbumSpotlight'
import Newsletter from '../components/Newsletter'
import SocialLinks from '../components/SocialLinks'
import usePageMeta from '../hooks/usePageMeta'

const bibleLink = ref => `https://www.biblegateway.com/passage/?search=${encodeURIComponent(ref)}&version=NKJV`

function Track({ number, title, openByDefault }) {
  const { lyrics = '', scripture = [] } = trackNotes[title] || {}
  const hasLyrics = lyrics.trim().length > 0
  const id = slugify(title)

  return (
    <details id={id} open={openByDefault} className="group scroll-mt-6 rounded-2xl border border-zinc-800 bg-zinc-950/70 transition-colors open:border-yellow-800/60">
      <summary className="flex cursor-pointer list-none items-center gap-4 px-5 py-4 [&::-webkit-details-marker]:hidden">
        <span className="w-6 text-right text-sm tabular-nums text-zinc-500">{number}</span>
        <span className="flex-1 font-semibold text-zinc-100 group-open:text-yellow-300">{title}</span>
        {hasLyrics && <span className="hidden rounded-full border border-zinc-700 px-2 py-0.5 text-[0.65rem] uppercase tracking-widest text-zinc-400 sm:inline">Lyrics</span>}
        <span className="text-zinc-500 transition-transform group-open:rotate-45" aria-hidden="true">+</span>
      </summary>
      <div className="border-t border-zinc-800 px-5 pb-6 pt-5 sm:pl-[3.75rem]">
        {scripture.length > 0 && (
          <div className="mb-5">
            <p className="mb-2 text-[0.65rem] font-bold uppercase tracking-[0.3em] text-yellow-500">Scripture</p>
            <div className="flex flex-wrap gap-2">
              {scripture.map(ref => (
                <a key={ref} href={bibleLink(ref)} target="_blank" rel="noreferrer" className="rounded-full border border-yellow-800/60 bg-yellow-500/10 px-3 py-1 text-xs font-semibold text-yellow-200 hover:border-yellow-500">
                  {ref}
                </a>
              ))}
            </div>
          </div>
        )}
        {hasLyrics ? (
          <p className="whitespace-pre-line text-sm leading-7 text-zinc-300 sm:text-base">{lyrics.trim()}</p>
        ) : (
          <p className="text-sm italic text-zinc-500">Lyrics coming soon.</p>
        )}
      </div>
    </details>
  )
}

export default function Album() {
  usePageMeta('a-new-beginning')
  const { hash } = useLocation()
  const openSlug = hash.slice(1)

  return (
    <section className="px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-center text-xs font-bold uppercase tracking-[0.4em] text-yellow-500/90">The Album</p>
        <h1 className="mb-10 text-center text-3xl font-black tracking-tight sm:mb-14 sm:text-5xl">{album.title}</h1>

        <AlbumSpotlight showAlbumLink={false} />

        {albumStory.length > 0 && (
          <div className="mx-auto mt-16 max-w-3xl">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.35em] text-yellow-500">The Story</p>
            <h2 className="mb-6 text-2xl font-black tracking-tight sm:text-3xl">Behind {album.title}</h2>
            {albumStory.map(p => (
              <p key={p.slice(0, 24)} className="mb-4 leading-relaxed text-zinc-300 sm:text-lg">{p}</p>
            ))}
          </div>
        )}

        <div className="mx-auto mt-16 max-w-3xl">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.35em] text-yellow-500">Tracklist</p>
          <h2 className="mb-2 text-2xl font-black tracking-tight sm:text-3xl">Songs, Lyrics & Scripture</h2>
          <p className="mb-6 text-sm text-zinc-400">Tap a song to read the lyrics and the Word behind it.</p>
          <div className="space-y-3">
            {album.tracks.map((title, i) => (
              <Track key={title} number={i + 1} title={title} openByDefault={openSlug === slugify(title)} />
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-zinc-500">Share the album · follow for more</p>
          <SocialLinks />
        </div>
      </div>
      <Newsletter />
    </section>
  )
}
