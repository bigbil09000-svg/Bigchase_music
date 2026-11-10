// Single source of truth for links and releases.
// To add a new release, put it at the TOP of `releases` — Home and Music update automatically.

import dshCoverWebp from '../assets/Untitled.webp'
import dshCoverPng from '../assets/Untitled.png'
import epCoverWebp from '../assets/design.webp'
import epCoverPng from '../assets/design (1).png'

export const SITE_URL = 'https://bigchasemusic.com'
export const CONTACT_EMAIL = 'contact@bigchasemusic.com'
// Formspree endpoint used by the contact form and the newsletter signup.
export const FORMSPREE_URL = 'https://formspree.io/f/mgodegwk'

export const ARTIST = {
  name: 'BigChase Music',
  genre: 'Independent Gospel Hip-Hop',
  tagline: 'Create • Elevate • Inspire',
}

// Artist profiles (used for footer, short links, Follow sections and SEO data)
export const PROFILES = {
  spotify: 'https://open.spotify.com/artist/5MYZVo1JksOviGgh2wNh8s',
  apple: 'https://music.apple.com/gb/artist/bigchase-music/1895686161',
  youtube: 'https://www.youtube.com/@BigChase_Music',
  instagram: 'https://www.instagram.com/bigchase_music/',
  tiktok: 'https://www.tiktok.com/@bigchase_music',
  audiomack: 'https://audiomack.com/bigchase_music',
  tidal: 'https://tidal.com/artist/78709665/u',
  deezer: 'https://link.deezer.com/s/33eoGfO2xOvTszYk2DbwT',
}

export const SOCIALS = [
  { key: 'instagram', label: 'Instagram', href: PROFILES.instagram },
  { key: 'tiktok', label: 'TikTok', href: PROFILES.tiktok },
  { key: 'youtube', label: 'YouTube', href: PROFILES.youtube },
  { key: 'spotify', label: 'Spotify', href: PROFILES.spotify },
  { key: 'apple', label: 'Apple Music', href: PROFILES.apple },
]

export const releases = [
  {
    id: 'guiding-lighting',
    title: 'Guiding Lighting',
    type: 'Single',
    status: 'New Single',
    blurb: 'The brand new single from BigChase Music. Stream Guiding Lighting now and be among the first to hear it.',
    cover: { src: 'https://i.scdn.co/image/ab67616d0000b2734f2038104b0b39b3bbf41d19' },
    spotifyEmbed: 'https://open.spotify.com/embed/album/284aFe5DkKuHcQfrfB5Anf?utm_source=generator',
    links: {
      spotify: 'https://open.spotify.com/track/2HLlZt3ombCKwHLAiU7pqx',
      apple: 'https://music.apple.com/gb/song/guiding-lighting/6787206467',
      youtube: PROFILES.youtube,
      audiomack: 'https://audiomack.com/bigchase_music/song/guiding-lighting',
      tidal: 'https://tidal.com/track/539642973',
      deezer: 'https://www.deezer.com/track/4129771121',
    },
  },
  {
    id: 'dont-stop-here',
    title: "Don't Stop Here",
    type: 'Single',
    status: 'Fan Favorite',
    blurb: "Keep the momentum going with Don't Stop Here, one of the standout singles from BigChase Music.",
    cover: { webp: dshCoverWebp, src: dshCoverPng },
    spotifyEmbed: 'https://open.spotify.com/embed/album/5y7oVwkDW7fvJSM3p9U1vK?utm_source=generator',
    links: {
      spotify: 'https://open.spotify.com/track/3cWUtJyDv505XmNatOstQQ',
      apple: 'https://music.apple.com/gb/album/dont-stop-here-single/6778704531',
      youtube: PROFILES.youtube,
      audiomack: PROFILES.audiomack,
      tidal: PROFILES.tidal,
      deezer: PROFILES.deezer,
    },
  },
  {
    id: 'prophetic-declarations',
    title: 'Prophetic Declarations',
    type: 'EP',
    status: '4 Tracks',
    blurb:
      'A soul-forward release built with cinematic textures, bold drums, and scripture-rooted lyrics. Every track is crafted to uplift faith, sharpen focus, and keep your spirit moving.',
    cover: { webp: epCoverWebp, src: epCoverPng },
    spotifyEmbed: 'https://open.spotify.com/embed/album/4j3nWINWNwY8dfoORZgGD0?utm_source=generator',
    links: {
      spotify: 'https://open.spotify.com/album/4j3nWINWNwY8dfoORZgGD0',
      apple: 'https://music.apple.com/gb/album/prophetic-declarations-ep/1895711445',
      youtube: PROFILES.youtube,
      audiomack: PROFILES.audiomack,
      tidal: PROFILES.tidal,
      deezer: PROFILES.deezer,
    },
  },
]

export const PLATFORM_LABELS = {
  spotify: 'Spotify',
  apple: 'Apple Music',
  youtube: 'YouTube',
  audiomack: 'Audiomack',
  tidal: 'TIDAL',
  deezer: 'Deezer',
}
