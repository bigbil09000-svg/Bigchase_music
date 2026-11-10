import { useState } from 'react'
import { FORMSPREE_URL } from '../data/site'

// Fan email signup. Submissions arrive in the Formspree inbox tagged "Newsletter signup".
export default function Newsletter() {
  const [status, setStatus] = useState('idle') // idle | sending | done | error

  async function onSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: new FormData(e.currentTarget),
        headers: { Accept: 'application/json' },
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('done')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="px-6 py-20">
      <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-yellow-900/40 bg-gradient-to-b from-zinc-900/90 to-black p-8 text-center shadow-[0_25px_80px_rgba(0,0,0,0.6)] sm:p-12">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-yellow-500/70 to-transparent" />
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.35em] text-yellow-500">Join The Movement</p>
        <h3 className="mb-3 text-2xl font-black tracking-tight sm:text-3xl">Be First To Hear New Music</h3>
        <p className="mx-auto mb-8 max-w-lg text-sm text-zinc-400 sm:text-base">
          Get new releases, behind-the-scenes updates and event news straight to your inbox. No spam.
        </p>

        {status === 'done' ? (
          <p className="rounded-xl border border-yellow-700/50 bg-yellow-500/10 px-4 py-4 font-semibold text-yellow-200">
            You're in! Watch your inbox for the next drop.
          </p>
        ) : (
          <form onSubmit={onSubmit} className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
            <input type="hidden" name="_subject" value="Newsletter signup — BigChase Music" />
            <input type="hidden" name="type" value="newsletter" />
            <input type="text" name="_gotcha" tabIndex="-1" autoComplete="off" className="hidden" aria-hidden="true" />
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              name="email"
              required
              placeholder="Your email address"
              className="min-w-0 flex-1 rounded-full border border-zinc-700 bg-zinc-950 px-5 py-3 text-white placeholder-zinc-500 transition-colors focus:border-yellow-500 focus:outline-none"
            />
            <button
              type="submit"
              disabled={status === 'sending'}
              className="rounded-full bg-yellow-500 px-6 py-3 font-bold text-black transition-colors hover:bg-yellow-400 disabled:opacity-60"
            >
              {status === 'sending' ? 'Joining…' : 'Sign Up'}
            </button>
          </form>
        )}
        {status === 'error' && (
          <p className="mt-3 text-sm text-red-400">Something went wrong. Please try again in a moment.</p>
        )}
      </div>
    </section>
  )
}
