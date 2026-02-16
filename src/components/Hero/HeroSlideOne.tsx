import {
  Linkedin,
  Github,
  Mail,
  Phone,
} from "lucide-react";

export default function HeroSlideOne() {

  const socialLinks = [
    { Icon: Linkedin, href: "https://www.linkedin.com/in/chukwuma-ukaha/" },
    { Icon: Github, href: "https://github.com/ChukwumaUk" },
    { Icon: Mail, href: "mailto:chukwumaukaha@gmail.com" },
    { Icon: Phone, href: "https://wa.me/2349049737038" },
  ];

  return (
    <div className="h-full flex flex-col items-center justify-center text-center px-6 space-y-3">
      <p className="text-base md:text-3xl text-black/60 dark:text-white/60 mb-2">
        Hi, I am
      </p>

      <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-2">
        Chukwuma Ukaha
      </h1>

      <p className="text-base md:text-3xl text-black/60 dark:text-white/60 mb-2">
        Full-Stack Software Engineer | Scalable Systems Architect
      </p>

      <p className="max-w-2xl text-sm md:text-lg text-black/70 dark:text-white/70 mb-8 leading-relaxed">
        I design and engineer high-performance digital products that merge elegant user experience with robust, 
        scalable backend architecture. From concept to deployment, I build software that doesn’t just work — it drives measurable business results.
        
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-10 w-full sm:w-auto justify-center">
        <a
          href="#projects"
          className="cta-btn px-4 py-2 md:px-6 md:py-3 rounded-full
               bg-black text-white dark:bg-white dark:text-black
               text-xs md:text-sm font-medium text-center"
        >
          Explore My Projects
        </a>

        <a
          href="#contact"
          className="cta-btn px-4 py-2 md:px-6 md:py-3 rounded-full
               border border-black dark:border-white
               text-black dark:text-white
               text-xs md:text-sm font-medium text-center"
        >
          Let’s Build Something Exceptional
        </a>
      </div>

      {/* Social Icons */}
      <div className="flex gap-6 mb-12 mt-10">
        {socialLinks.map((item, index) => (
          <a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 sm:p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition"
          >
            <item.Icon className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        ))}
      </div>

      
    </div>
  );
}
