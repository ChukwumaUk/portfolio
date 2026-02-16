import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {

  const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT;

  return (
    <section
      id="contact"
      className="min-h-screen px-6 py-24 flex flex-col items-center"
    >
      {/* Section Title */}
      <div className="text-center mb-16 max-w-2xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Get in Touch
        </h2>
        <p className="text-black/70 dark:text-white/70">
          Looking for a technical partner who understands both code and business? 
          Let’s connect.
        </p>
      </div>

      {/* Content Grid */}
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-12">

        {/* LEFT SIDE — CONTACT INFO CARDS */}
        <div className="space-y-6">

          {/* Email */}
          <div className="p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-black transition hover:shadow-md hover:-translate-y-1 duration-300">
            <Mail className="mb-4" />
            <h3 className="font-semibold mb-1">Email</h3>
            <p className="text-black/70 dark:text-white/70">
              chukwumaukaha@gmail.com
            </p>
          </div>

          {/* Phone */}
          <div className="p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-black transition hover:shadow-md hover:-translate-y-1 duration-300">
            <Phone className="mb-4" />
            <h3 className="font-semibold mb-1">Phone</h3>
            <p className="text-black/70 dark:text-white/70">
              +2349049737038
            </p>
          </div>

          {/* Location */}
          <div className="p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-black transition hover:shadow-md hover:-translate-y-1 duration-300">
            <MapPin className="mb-4" />
            <h3 className="font-semibold mb-1">Location</h3>
            <p className="text-black/70 dark:text-white/70">
              Remote — Any Location
            </p>
          </div>

        </div>

        {/* RIGHT SIDE — FORM BOX */}
        <div className="p-8 rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-black transition shadow-sm">

          <h3 className="text-2xl font-bold mb-2">
            Send a Message
          </h3>
          <p className="text-black/70 dark:text-white/70 mb-6">
            Tell me about your project, I’ll get back to you shortly.
          </p>

          <form
            action={FORMSPREE_ENDPOINT}
            method="POST"
            className="space-y-6"
          >
            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl border border-black/10 dark:border-white/20 bg-gray-100 dark:bg-black focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="youremail@example.com"
                className="w-full px-4 py-3 rounded-xl border border-black/10 dark:border-white/20 bg-gray-100 dark:bg-black focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                required
                placeholder="Your message..."
                className="w-full px-4 py-3 rounded-xl border border-black/10 dark:border-white/20 bg-gray-100 dark:bg-black focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition"
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-black text-white dark:bg-white dark:text-black font-medium transition hover:opacity-90"
            >
              Send Message
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}
