import { useState } from 'react'
import { FORMSPREE_URL, KIT_FORM_ID } from '../data/site'

// Fan email signup. Goes to the Kit mailing list when KIT_FORM_ID is set,
// otherwise to the Formspree inbox tagged "Newsletter signup".
export default function Newsletter() {
  const [status, setStatus] = useState('idle') // idle | sending | done | error

  async function onSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      const form = new FormData(e.currentTarget)
      if (form.get('_gotcha')) { setStatus('done'); return }
      const res = KIT_FORM_ID
        ? await fetch(`https://app.kit.com/forms/${KIT_FORM_ID}/subscriptions`, {
            method: 'POST',
            body: new URLSearchParams({ email_address: form.get('email') }),
            headers: { Accept: 'application/json' },
          })
        : await fetch(FORMSPREE_URL, { method: 'POST', body: form, headers: { Accept: 'application/json' } })
      if (!res.ok) throw new Error('Request failed')
      // Kit replies 200 even on failure; check its status field.
      if (KIT_FORM_ID) {
        const data = await res.json()
        if (data.status !== 'success') throw new Error('Signup failed')
      }
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
