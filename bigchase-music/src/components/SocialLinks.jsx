import Icon from './Icons'
import { SOCIALS } from '../data/site'

// Row of round social icon buttons.
export default function SocialLinks({ className = '' }) {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-3 ${className}`}>
      {SOCIALS.map(s => (
        <a
          key={s.key}
          href={s.href}
          target="_blank"
          rel="noreferrer"
          aria-label={`BigChase Music on ${s.label}`}
          title={s.label}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900/70 text-zinc-300 transition-colors hover:border-yellow-500 hover:text-yellow-300"
        >
          <Icon name={s.key} />
        </a>
      ))}
    </div>
  )
}
