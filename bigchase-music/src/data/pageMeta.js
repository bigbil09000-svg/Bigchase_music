// Page titles/descriptions. Plain data (no imports) so the build script can also use it
// to bake per-page tags into each static HTML file for link previews and search engines.

export const DEFAULT_DESCRIPTION =
  'BigChase Music — independent gospel hip-hop. Stream Guiding Lighting, Don\'t Stop Here and the Prophetic Declarations EP on Spotify, Apple Music, YouTube and more.'

export const pageMeta = {
  '': {
    title: 'BigChase Music | Independent Gospel Hip-Hop',
    description: DEFAULT_DESCRIPTION,
  },
  music: {
    title: 'Music | BigChase Music',
    description:
      'Stream every BigChase Music release — Guiding Lighting, Don\'t Stop Here and the Prophetic Declarations EP — on Spotify, Apple Music, YouTube, Audiomack, TIDAL and Deezer.',
  },
  about: {
    title: 'About | BigChase Music',
    description:
      'BigChase Music is an independent label creating purpose-driven gospel hip-hop that inspires, uplifts and connects with listeners worldwide.',
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
