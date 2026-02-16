import Chukwuma from "@/assets/images/chukwumafront.png";


export default function HeroSlideTwo() {
  return (
    <div className="h-full flex flex-col md:flex-row items-center justify-center gap-10 px-6">
      {/* Image */}
      <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden bg-gray-200 dark:bg-white/10">
        <img
          src={Chukwuma}
          alt="Chukwuma Ukaha portrait"
          width={256}
          height={256}
          loading="eager"
          decoding="async"
          fetchPriority="high"
          className="w-full h-full object-cover"
        />

      </div>

      {/* Text */}
      <div className="max-w-md text-center md:text-left">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          Engineering Meets Strategy
        </h2>

        <p className="text-sm md:text-base text-black/70 dark:text-white/70 mb-6">
          Beyond writing code, I understand business.
          Having mentored 200+ entrepreneurs across Africa through the Google Hustle Academy program, 
          I build technology aligned with strategy, growth, and real-world impact.
        </p>


        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-10 w-full sm:w-auto justify-center md:justify-start">
          <a
            href="#contact"
            className="cta-btn px-4 py-2 md:px-6 md:py-3 rounded-full
               bg-black text-white dark:bg-white dark:text-black
               text-xs md:text-sm font-medium text-center"
          >
            Partner With Me
          </a>
        </div>

      </div>
    </div>
  );
}
