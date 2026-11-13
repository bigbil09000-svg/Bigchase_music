import { Link } from 'react-router-dom'
import { PROFILES } from '../data/site'
import AlbumSpotlight from '../components/AlbumSpotlight'
import SocialLinks from '../components/SocialLinks'
import usePageMeta from '../hooks/usePageMeta'

// Where Kit sends new subscribers after they confirm their email.
export default function Welcome() {
  usePageMeta('welcome')

  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-500 text-3xl text-black shadow-lg shadow-yellow-500/30" aria-hidden="true">
            ✓
          </div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-yellow-500">Subscription Confirmed</p>
          <h1 className="mb-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Welcome to the <span className="text-yellow-400">family</span>
          </h1>
          <p className="text-lg leading-relaxed text-zinc-300">
            You're officially on the list. You'll be first to hear new music, see behind-the-scenes moments,
            and get news on events and live ministry.
          </p>
        </div>

        <div className="mb-16 grid gap-4 sm:grid-cols-3">
          {[
            ['1', 'Follow on Spotify', 'New releases land in your Release Radar automatically.', PROFILES.spotify, true],
            ['2', 'Join us on social', 'Daily inspiration, clips and behind-the-scenes on Instagram & TikTok.', PROFILES.instagram, true],
            ['3', 'Explore the music', 'Stream every single, EP and album in one place.', '/music', false],
          ].map(([n, title, body, href, external]) => {
            const cls = 'group block rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6 transition-colors hover:border-yellow-600/70'
            const inner = (
              <>
                <p className="mb-3 text-xs font-bold tracking-[0.3em] text-yellow-500">STEP {n}</p>
                <h2 className="mb-2 text-lg font-bold group-hover:text-yellow-300">{title} →</h2>
                <p className="text-sm text-zinc-400">{body}</p>
              </>
            )
            return external ? (
              <a key={n} href={href} target="_blank" rel="noreferrer" className={cls}>{inner}</a>
            ) : (
              <Link key={n} to={href} className={cls}>{inner}</Link>
            )
          })}
        </div>

        <AlbumSpotlight />

        <div className="mt-16 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-zinc-500">Connect everywhere</p>
          <SocialLinks />
          <p className="mt-6 text-sm text-zinc-500">
            Tip: add our email address to your contacts so our emails never land in spam.
          </p>
        </div>
      </div>
    </section>
  )
}
