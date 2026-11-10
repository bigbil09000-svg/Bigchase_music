import { PLATFORM_LABELS } from '../data/site'

// Grid of streaming-platform buttons for one release.
export default function StreamLinks({ links, compact = false }) {
  const grid = compact ? 'grid-cols-2 text-sm' : 'grid-cols-2 text-sm xl:grid-cols-3'
  const btn = compact
    ? 'rounded-lg px-3 py-2 font-medium'
    : 'rounded-xl px-4 py-3 font-semibold'
  return (
    <div className={`grid gap-2 sm:gap-3 ${grid}`}>
      {Object.entries(PLATFORM_LABELS).map(([key, label]) =>
        links[key] ? (
          <a
            key={key}
            href={links[key]}
            target="_blank"
            rel="noreferrer"
            className={`${btn} border border-zinc-700/90 bg-zinc-900/70 text-center text-zinc-200 transition-colors hover:border-yellow-600/70 hover:text-yellow-300`}
          >
            {label}
          </a>
        ) : null,
      )}
    </div>
  )
}

export function ReleaseCover({ cover, title, className = '' }) {
  const img = (
    <img src={cover.src} alt={`${title} cover art`} className={`block h-auto w-full object-cover ${className}`} loading="lazy" />
  )
  if (!cover.webp) return img
  return (
    <picture>
      <source srcSet={cover.webp} type="image/webp" />
      {img}
    </picture>
  )
}

export function SpotifyEmbed({ src, title, height = 352 }) {
  return (
    <iframe
      title={`${title} on Spotify`}
      src={src}
      width="100%"
      height={height}
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
      style={{ borderRadius: '12px' }}
      className="block"
    />
  )
}
