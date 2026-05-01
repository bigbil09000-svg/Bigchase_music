export default function About() {
  return (
    <section className="py-24 px-6 bg-black/40 backdrop-blur-sm border-y border-gray-800/50">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-yellow-500 text-xs font-bold tracking-[0.35em] uppercase mb-3">Our Story</p>
        <h2 className="text-4xl font-extrabold mb-8 tracking-tight">About BigChase Music</h2>
        <p className="text-gray-400 leading-relaxed text-lg max-w-2xl mx-auto mb-14">
          BigChase Music is an independent record label dedicated to creating powerful,
          purpose-driven sound. Rooted in authenticity and artistic freedom, the label
          delivers music that inspires, uplifts, and connects with listeners worldwide.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {[
            {
              title: 'Our Mission',
              body: 'To create and distribute music that carries purpose beyond entertainment — sound that moves hearts, shifts atmospheres, and leaves a lasting legacy.',
            },
            {
              title: 'Our Sound',
              body: 'A fusion of genres rooted in authenticity. From gospel-infused anthems to contemporary tracks, every release is crafted with intention and excellence.',
            },
            {
              title: 'Independence',
              body: 'BigChase Music operates fully independent — owning its masters, controlling its narrative, and building a brand that stands on its own terms.',
            },
            {
              title: 'The Vision',
              body: 'To build a global community of listeners and artists who believe music can be both powerful and purposeful — art that transcends and transforms.',
            },
          ].map(({ title, body }) => (
            <div key={title} className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6">
              <h4 className="text-yellow-400 font-bold tracking-widest uppercase text-xs mb-3">{title}</h4>
              <p className="text-gray-400 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
