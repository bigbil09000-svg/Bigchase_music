import { Link } from 'react-router-dom'
import { releases, ARTIST, CONTACT_EMAIL, SOCIALS, upcoming, isReleased } from '../data/site'
import { ReleaseCover } from '../components/StreamLinks'
import Icon from '../components/Icons'
import usePageMeta from '../hooks/usePageMeta'

const SHORT_BIO =
  'BigChase Music is an independent gospel hip-hop label creating purpose-driven sound — cinematic textures, bold drums and scripture-rooted lyrics crafted to inspire, uplift and move the soul.'

const LONG_BIO = [
  'BigChase Music is an independent record label dedicated to creating powerful, purpose-driven sound. Rooted in authenticity and artistic freedom, the label delivers music that inspires, uplifts, and connects with listeners worldwide.',
  'From gospel-infused anthems to contemporary tracks, every release is crafted with intention and excellence. Fully independent — owning its masters and controlling its narrative — BigChase Music is building a global community of listeners who believe music can be both powerful and purposeful.',
]

const DOWNLOADS = [
  { label: 'A New Beginning — Album Cover (JPG)', href: '/press/a-new-beginning-cover.jpg' },
  { label: 'Logo (PNG)', href: '/press/bigchase-music-logo.png' },
  { label: "Don't Stop Here — Cover (JPG)", href: '/press/dont-stop-here-cover.jpg' },
  { label: 'Prophetic Declarations — Cover (JPG)', href: '/press/prophetic-declarations-cover.jpg' },
]

export default function Press() {
  usePageMeta('press')
  const singles = releases.filter(r => r.type === 'Single').length
  const eps = releases.filter(r => r.type === 'EP').length

  const facts = [
    ['Artist', ARTIST.name],
    ['Genre', 'Gospel Hip-Hop'],
    ['Label', 'Independent'],
    isReleased()
      ? ['Latest Release', `${upcoming.title} (Album, ${upcoming.tracks.length} tracks)`]
      : ['New Album', `${upcoming.title} — out ${upcoming.releaseLabel}`],
    ['Catalogue', `1 album · ${singles} singles · ${eps} EP`],
    ['Booking', CONTACT_EMAIL],
  ]

  return (
    <section className="px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-center text-xs font-bold uppercase tracking-[0.4em] text-yellow-500/90">Electronic Press Kit</p>
        <h1 className="mb-4 text-center text-3xl font-black tracking-tight sm:text-5xl">Press & Booking</h1>
        <p className="mx-auto mb-14 max-w-2xl text-center text-zinc-400">
          Everything promoters, journalists and playlist curators need to feature BigChase Music.
        </p>

        <div className="grid gap-8 lg:grid-cols-[1fr,320px]">
          {/* Bio */}
          <div className="rounded-3xl border border-zinc-800 bg-zinc-950/70 p-6 sm:p-8">
            <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-yellow-400">Biography</h2>
            {LONG_BIO.map(p => (
              <p key={p.slice(0, 20)} className="mb-4 leading-relaxed text-zinc-300">{p}</p>
            ))}
            <h3 className="mb-2 mt-8 text-xs font-bold uppercase tracking-[0.3em] text-yellow-400">Short Bio</h3>
            <p className="rounded-xl border border-zinc-800 bg-black/50 p-4 text-sm leading-relaxed text-zinc-300">{SHORT_BIO}</p>
          </div>

          {/* Quick facts */}
          <div className="rounded-3xl border border-zinc-800 bg-zinc-950/70 p-6">
            <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-yellow-400">Quick Facts</h2>
            <dl className="space-y-3 text-sm">
              {facts.map(([k, v]) => (
                <div key={k} className="border-b border-zinc-800 pb-3 last:border-0">
                  <dt className="text-xs uppercase tracking-widest text-zinc-500">{k}</dt>
                  <dd className="mt-1 break-words font-semibold text-zinc-100">{v}</dd>
                </div>
              ))}
            </dl>
            <h3 className="mb-3 mt-6 text-xs font-bold uppercase tracking-[0.3em] text-yellow-400">Profiles</h3>
            <ul className="space-y-2 text-sm">
              {SOCIALS.map(s => (
                <li key={s.key}>
                  <a href={s.href} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-zinc-300 hover:text-yellow-300">
                    <Icon name={s.key} size={16} /> {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Releases */}
        <h2 className="mb-6 mt-16 text-xs font-bold uppercase tracking-[0.3em] text-yellow-400">Releases</h2>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          <a href={upcoming.preorder} target="_blank" rel="noreferrer" className="group">
            <div className="overflow-hidden rounded-2xl ring-1 ring-white/10">
              <img src={upcoming.cover.src} alt={`${upcoming.title} album cover`} className="block aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
            </div>
            <p className="mt-3 font-bold group-hover:text-yellow-300">{upcoming.title}</p>
            <p className="text-xs uppercase tracking-widest text-zinc-500">Album · {isReleased() ? 'Out Now' : upcoming.shortDate}</p>
          </a>
          {releases.map(r => (
            <Link key={r.id} to={`/music#${r.id}`} className="group">
              <div className="overflow-hidden rounded-2xl ring-1 ring-white/10">
                <ReleaseCover cover={r.cover} title={r.title} className="aspect-square object-top transition-transform duration-300 group-hover:scale-105" />
              </div>
              <p className="mt-3 font-bold group-hover:text-yellow-300">{r.title}</p>
              <p className="text-xs uppercase tracking-widest text-zinc-500">{r.type}</p>
            </Link>
          ))}
        </div>

        {/* Downloads */}
        <h2 className="mb-6 mt-16 text-xs font-bold uppercase tracking-[0.3em] text-yellow-400">Downloads</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {DOWNLOADS.map(d => (
            <a
              key={d.href}
              href={d.href}
              download
              className="flex items-center gap-3 rounded-xl border border-zinc-700 bg-zinc-900/70 px-4 py-3 text-sm font-semibold text-zinc-200 transition-colors hover:border-yellow-600/70 hover:text-yellow-300"
            >
              <Icon name="download" size={18} /> {d.label}
            </a>
          ))}
        </div>

        {/* Booking */}
        <div className="mt-16 rounded-3xl border border-yellow-900/40 bg-gradient-to-b from-zinc-900/90 to-black p-8 text-center">
          <h2 className="mb-2 text-2xl font-black">Booking & Press Inquiries</h2>
          <p className="mb-6 text-zinc-400">
            Email{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-yellow-400 underline underline-offset-4 hover:text-yellow-300">{CONTACT_EMAIL}</a>
            {' '}or use the contact form.
          </p>
          <Link to="/contact" className="inline-block rounded-full bg-yellow-500 px-8 py-3 font-bold text-black transition-colors hover:bg-yellow-400">
            Send an Inquiry
          </Link>
        </div>
      </div>
    </section>
  )
}
