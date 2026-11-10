import { useState } from 'react'
import { CONTACT_EMAIL, FORMSPREE_URL } from '../data/site'
import SocialLinks from '../components/SocialLinks'
import usePageMeta from '../hooks/usePageMeta'

const INQUIRY_TYPES = ['Booking / Event', 'Feature / Collaboration', 'Press / Interview', 'Playlist / Radio', 'Other']

const field =
  'w-full p-4 rounded-xl bg-gray-900 border border-gray-700 text-white placeholder-gray-600 focus:outline-none focus:border-yellow-500 transition-colors duration-200'

export default function Contact() {
  usePageMeta('contact')
  const [status, setStatus] = useState('idle') // idle | sending | done | error

  async function onSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    setStatus('sending')
    try {
      const data = new FormData(form)
      data.set('_subject', `${data.get('inquiry')} — ${data.get('subject') || 'New inquiry'}`)
      const res = await fetch(FORMSPREE_URL, { method: 'POST', body: data, headers: { Accept: 'application/json' } })
      if (!res.ok) throw new Error('Request failed')
      form.reset()
      setStatus('done')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-xl">
        <p className="mb-3 text-center text-xs font-bold uppercase tracking-[0.35em] text-yellow-500">Get In Touch</p>
        <h1 className="mb-4 text-center text-4xl font-extrabold tracking-tight">Contact & Booking</h1>
        <p className="mb-4 text-center text-gray-500">For bookings, features, press, and business inquiries.</p>
        <p className="mb-10 text-center text-sm text-zinc-300">
          Email:{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-yellow-400 underline underline-offset-4 hover:text-yellow-300">
            {CONTACT_EMAIL}
          </a>
        </p>

        {status === 'done' ? (
          <div className="rounded-2xl border border-yellow-700/50 bg-yellow-500/10 p-8 text-center">
            <h2 className="mb-2 text-xl font-bold text-yellow-200">Message sent — thank you!</h2>
            <p className="mb-6 text-sm text-zinc-300">We'll get back to you as soon as possible.</p>
            <button onClick={() => setStatus('idle')} className="text-sm font-semibold text-yellow-400 hover:text-yellow-300">
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="flex flex-col gap-4">
            <input type="text" name="_gotcha" tabIndex="-1" autoComplete="off" className="hidden" aria-hidden="true" />
            <div className="flex flex-col gap-4 sm:flex-row">
              <label className="flex-1">
                <span className="sr-only">Your name</span>
                <input type="text" name="name" required placeholder="Your Name" className={field} />
              </label>
              <label className="flex-1">
                <span className="sr-only">Your email</span>
                <input type="email" name="email" required placeholder="Your Email" className={field} />
              </label>
            </div>
            <label>
              <span className="sr-only">Inquiry type</span>
              <select name="inquiry" required defaultValue="" className={field}>
                <option value="" disabled>What's this about?</option>
                {INQUIRY_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </label>
            <label>
              <span className="sr-only">Subject</span>
              <input type="text" name="subject" placeholder="Subject (event name, date, location…)" className={field} />
            </label>
            <label>
              <span className="sr-only">Message</span>
              <textarea name="message" required placeholder="Your Message" rows="5" className={`${field} resize-none`}></textarea>
            </label>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="mt-2 w-full rounded-xl bg-yellow-500 py-4 text-sm font-bold uppercase tracking-wide text-black shadow-lg shadow-yellow-500/20 transition-all duration-200 hover:bg-yellow-400 disabled:opacity-60"
            >
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </button>
            {status === 'error' && (
              <p className="text-center text-sm text-red-400">
                Something went wrong. Please try again or email {CONTACT_EMAIL}.
              </p>
            )}
          </form>
        )}

        <div className="mt-14 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-zinc-500">Or connect on social</p>
          <SocialLinks />
        </div>
      </div>
    </section>
  )
}
