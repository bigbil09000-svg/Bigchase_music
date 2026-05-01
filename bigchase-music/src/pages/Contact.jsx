export default function Contact() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-xl mx-auto">
        <p className="text-yellow-500 text-xs font-bold tracking-[0.35em] uppercase text-center mb-3">Get In Touch</p>
        <h2 className="text-4xl font-extrabold text-center mb-4 tracking-tight">Contact Us</h2>
        <p className="text-gray-500 text-center mb-10">For bookings, features, and business inquiries.</p>

        <form action="https://formspree.io/f/mgodegwk" method="POST" className="flex flex-col gap-4">
          <div className="flex gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="flex-1 p-4 rounded-xl bg-gray-900 border border-gray-700 text-white placeholder-gray-600 focus:outline-none focus:border-yellow-500 transition-colors duration-200"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="flex-1 p-4 rounded-xl bg-gray-900 border border-gray-700 text-white placeholder-gray-600 focus:outline-none focus:border-yellow-500 transition-colors duration-200"
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="p-4 rounded-xl bg-gray-900 border border-gray-700 text-white placeholder-gray-600 focus:outline-none focus:border-yellow-500 transition-colors duration-200"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            className="p-4 rounded-xl bg-gray-900 border border-gray-700 text-white placeholder-gray-600 focus:outline-none focus:border-yellow-500 transition-colors duration-200 resize-none"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-black py-4 rounded-xl font-bold tracking-wide text-sm uppercase hover:bg-yellow-400 transition-all duration-200 shadow-lg shadow-yellow-500/20 mt-2"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
