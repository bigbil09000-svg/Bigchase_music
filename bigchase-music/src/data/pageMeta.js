// Page titles/descriptions. Plain data (no imports) so the build script can also use it
// to bake per-page tags into each static HTML file for link previews and search engines.

export const DEFAULT_DESCRIPTION =
  'BigChase Music — independent gospel hip-hop. New album A New Beginning out November 27 — pre-order now on Apple Music. Stream Guiding Lighting, Don\'t Stop Here and Prophetic Declarations.'

export const pageMeta = {
  '': {
    title: 'BigChase Music | Independent Gospel Hip-Hop',
    description: DEFAULT_DESCRIPTION,
  },
  music: {
    title: 'Music | BigChase Music',
    description:
      'Pre-order the new album A New Beginning (Nov 27) and stream every BigChase Music release — Guiding Lighting, Don\'t Stop Here and the Prophetic Declarations EP — on Spotify, Apple Music, YouTube, Audiomack, TIDAL and Deezer.',
  },
  about: {
    title: 'About | BigChase Music',
    description:
      'BigChase Music is an independent label creating purpose-driven gospel hip-hop that inspires, uplifts and connects with listeners worldwide.',
  },
  'a-new-beginning': {
    title: 'A New Beginning — New Album | BigChase Music',
    description:
      'A New Beginning, the new 14-track album from BigChase Music, out November 27, 2026. Pre-order on Apple Music, read the lyrics and the scripture behind every song.',
    image: { path: '/press/a-new-beginning-cover.jpg', width: 1500, height: 1500 },
  },
  press: {
    title: 'Press Kit (EPK) | BigChase Music',
    description:
      'BigChase Music electronic press kit: bio, quick facts, logo and cover art downloads, and booking contact.',
  },
  contact: {
    title: 'Contact & Booking | BigChase Music',
    description:
      'Book BigChase Music for events, features, press and business inquiries.',
  },
}
