// "A New Beginning" — album page content.
//
// HOW TO FILL THIS IN:
// - `story`: a few paragraphs about the album (each string = one paragraph).
// - For each song: paste lyrics between the backticks (` `), keeping line breaks as they are.
//   Leave a blank line between verses/choruses.
// - `scripture`: the Bible references behind the song, e.g. ['Acts 2:1-4', 'Joel 2:28'].
// - Anything left empty is simply hidden on the site (it shows "Lyrics coming soon").

export const albumStory = [
  // 'Paragraph one…',
  // 'Paragraph two…',
]

export const trackNotes = {
  'Glory Fills': { lyrics: ``, scripture: [] },
  'Christ in Me': { lyrics: ``, scripture: [] },
  "Don't Stop Here 2.0": { lyrics: ``, scripture: [] },
  'Growing Unto Maturity': { lyrics: ``, scripture: [] },
  'Tongues of Fire': { lyrics: ``, scripture: [] },
  'Fruits of The Spirit': { lyrics: ``, scripture: [] },
  'Your Name': { lyrics: ``, scripture: [] },
  'Fullness': { lyrics: ``, scripture: [] },
  'Rise Again': { lyrics: ``, scripture: [] },
  'Recreate My World': { lyrics: ``, scripture: [] },
  'Keep Movin': { lyrics: ``, scripture: [] },
  'Power of Attorney': { lyrics: ``, scripture: [] },
  'Book of My Life': { lyrics: ``, scripture: [] },
  'Book of My Life (Bonus)': { lyrics: ``, scripture: [] },
}

export const slugify = s =>
  s.toLowerCase().replace(/['’]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
