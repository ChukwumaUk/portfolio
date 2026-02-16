import { useEffect, useState } from "react";
import HeroSlideOne from "./HeroSlideOne";
import HeroSlideTwo from "./HeroSlideTwo";

const slides = [HeroSlideOne, HeroSlideTwo];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  const CurrentSlide = slides[current];

  return (
    <section className="min-h-[calc(100vh-4rem)] flex flex-col justify-between">
      {/* Slide */}
      <div className="flex-1 flex items-center justify-center transition-opacity duration-500 min-h-[400px]">
        <CurrentSlide />
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 pb-6">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 rounded-full transition ${
              current === index
                ? "bg-black dark:bg-white"
                : "bg-black/30 dark:bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
