import Chukwuma from "@/assets/images/chukwumamain.png";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-24"
    >
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-16 items-center">
        
        {/* TEXT SIDE */}
        <div className="order-2 md:order-1 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-8">
            About Me
          </h2>

          <div className="space-y-6 text-sm md:text-base text-black/70 dark:text-white/70 leading-relaxed">
            <p>
              Great software isn’t just written — it’s engineered<br />
              I’m a full-stack software engineer passionate about building high-performance web applications and scalable digital systems. 
              I specialize in transforming complex problems into elegant, 
              intuitive solutions that balance user experience with architectural integrity.
            </p>

            <p>
              What began as curiosity about how systems work has evolved into expertise across modern technologies including React, 
              TypeScript, Node.js, Postgres, Python, and cloud infrastructure. I design and deliver applications that are not only functional, 
              but reliable, maintainable, and built for growth.
            </p>

            <p>
              
              Beyond coding, I mentor entrepreneurs, explore emerging technologies, and write technical insights. 
              I’m also an avid reader — constantly sharpening both technical and strategic thinking.
            </p>
          </div>

          {/* What I Do */}
          <div className="mt-10">
            <h3 className="text-lg md:text-xl font-semibold mb-4">
              What I Do
            </h3>

            <ul className="space-y-2 text-sm md:text-base text-black/70 dark:text-white/70 md:list-disc md:pl-5">
              <li>End-to-end full-stack application engineering</li>
              <li>RESTful API architecture & implementation</li>
              <li>Database design, optimization & performance tuning</li>
              <li>Cloud-native deployment & infrastructure management</li>
            </ul>
          </div>
        </div>

        {/* IMAGE SIDE */}
        <div className="order-1 md:order-2 relative flex justify-center md:justify-end">
          
          <div className="relative w-[280px] md:w-[360px] h-[360px] md:h-[460px]">

            {/* Left Decorative Block */}
            <div className="absolute left-0 bottom-0 w-3/4 h-5/6 bg-black rounded-2xl dark:bg-white"></div>

            {/* Right Decorative Block */}
            <div className="absolute right-0 top-0 w-3/4 h-5/6 bg-gray-200 rounded-2xl dark:bg-white/20"></div>

            {/* Main Image */}
            <img
              src={Chukwuma}
              alt="Chukwuma Ukaha"
              className="absolute inset-0 m-auto w-4/5 sm:w-[85%] h-4/5 sm:h-[85%] object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
