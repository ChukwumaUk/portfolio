import { Github, Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white dark:bg-white dark:text-black overflow-hidden">

      {/* Top marquee with fade mask */}
      <div className="relative border-b border-white/10 dark:border-black/10">
        {/* Fade overlays */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black dark:from-white to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black dark:from-white to-transparent z-10" />

        {/* Marquee text */}
        <div className="animate-marquee text-4xl md:text-6xl font-bold py-6 opacity-20 whitespace-nowrap">
          Chukwuma Ukaha — Chukwuma Ukaha — Chukwuma Ukaha — Chukwuma Ukaha —
        </div>
      </div>

      {/* Bottom content */}
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Copyright */}
        <p className="text-sm text-white/70 dark:text-black/70">
          © {new Date().getFullYear()} Chukwuma Ukaha. All rights reserved.
        </p>

        {/* Social icons */}
        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/chukwuma-ukaha/"
            target="_blank"
            className="transition transform hover:scale-110 hover:opacity-80"
          >
            <Linkedin size={20} />
          </a>

          <a
            href="https://github.com/ChukwumaUk"
            target="_blank"
            className="transition transform hover:scale-110 hover:opacity-80"
          >
            <Github size={20} />
          </a>

          <a
            href="mailto:chukwumaukaha@gmail.com"
            className="transition transform hover:scale-110 hover:opacity-80"
          >
            <Mail size={20} />
          </a>

          <a
            href="https://wa.me/2349049737038"
            target="_blank"
            className="transition transform hover:scale-110 hover:opacity-80"
          >
            <Phone size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
