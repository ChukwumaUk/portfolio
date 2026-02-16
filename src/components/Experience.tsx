import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen px-6 py-24 flex flex-col items-center"
    >
      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={itemVariants}
        className="text-center mb-20 max-w-2xl"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Experience & Education
        </h2>
        <p className="text-black/70 dark:text-white/70">
          A track record of technical leadership, continuous learning, 
          and performance-driven execution.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-16">

        {/* ================= EDUCATION ================= */}
        <div>
          <h3 className="text-2xl font-semibold mb-10">Education</h3>

          {/* This is the Shared Relative Container for both line and dots */}
          <div className="relative pl-10">
            {/* Vertical line - Absolute to the parent div */}
            <div className="absolute left-0 top-0 h-full w-px bg-black/20 dark:bg-white/20"></div>

            <div className="space-y-14">
              {/* Item */}
              <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative" 
              >
                {/* Fixed Dot: Placed at left-[-40px] to reach back to the parent's left-0 line */}
                <span className="absolute left-[-40px] top-8 -translate-x-1/2 w-3 h-3 rounded-full bg-black dark:bg-white z-20"></span>

                <div className="pl-4 p-6 rounded-xl transition 
                  hover:shadow-lg hover:-translate-y-1 
                  hover:shadow-black/10 dark:hover:shadow-white/10">
                  <h4 className="font-semibold text-lg">
                    Diploma in Software Engineering
                  </h4>
                  <p className="text-black/70 dark:text-white/70">
                    MobileGigo Limited | 2025 - 2026
                  </p>
                  <p className="mt-3 text-black/80 dark:text-white/80">
                    Built and deployed production-grade full-stack applications, including an AI website generator, 
                    real-time news platform, and movie recommendation system.

                    Completed 60+ projects across React, Node.js, PostgreSQL, and modern web technologies 
                    — focused on scalability, clean architecture, and performance.
                  </p>
                </div>
              </motion.div>

              {/* Item */}
              <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative"
              >
                <span className="absolute left-[-40px] top-8 -translate-x-1/2 w-3 h-3 rounded-full bg-black dark:bg-white z-20"></span>

                <div className="pl-4 p-6 rounded-xl transition 
                  hover:shadow-lg hover:-translate-y-1 
                  hover:shadow-black/10 dark:hover:shadow-white/10">
                  <h4 className="font-semibold text-lg">
                    B.Tech Physics (Industrial Physics Option)
                  </h4>
                  <p className="text-black/70 dark:text-white/70">
                    Federal University of Technology, Owerri | 2010 - 2015
                  </p>
                  <p className="mt-3 text-black/80 dark:text-white/80">
                    Graduated with Second Class Upper Honors, ranking Top 10 in class.

                    Designed and developed a rechargeable digital blood pressure monitor as a final-year project, 
                    demonstrating strong applied engineering principles, system design capability, 
                    and hardware–software integration thinking.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* ================= WORK ================= */}
        <div>
          <h3 className="text-2xl font-semibold mb-10">Work</h3>

          <div className="relative pl-10">
            <div className="absolute left-0 top-0 h-full w-px bg-black/20 dark:bg-white/20"></div>

            <div className="space-y-14">
              <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative"
              >
                <span className="absolute left-[-40px] top-8 -translate-x-1/2 w-3 h-3 rounded-full bg-black dark:bg-white z-20"></span>

                <div className="pl-4 p-6 rounded-xl transition 
                  hover:shadow-lg hover:-translate-y-1 
                  hover:shadow-black/10 dark:hover:shadow-white/10">
                  <h4 className="font-semibold text-lg">
                    Full-stack — MobileGigo Limited
                  </h4>
                  <p className="text-black/70 dark:text-white/70">
                    Software Engineer (PERN Stack) | 2025 - Present
                  </p>
                  <p className="mt-3 text-black/80 dark:text-white/80">
                    Lead PERN Stack Engineer overseeing architecture, code quality, and delivery.

                    Spearheaded the AI Website Builder and University Admin Dashboard, building secure, scalable, production-ready systems. 
                    Also mentor developers as a Python instructor.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative"
              >
                <span className="absolute left-[-40px] top-8 -translate-x-1/2 w-3 h-3 rounded-full bg-black dark:bg-white z-20"></span>

                <div className="pl-4 p-6 rounded-xl transition 
                  hover:shadow-lg hover:-translate-y-1 
                  hover:shadow-black/10 dark:hover:shadow-white/10">
                  <h4 className="font-semibold text-lg">
                    UpSkill Universe
                  </h4>
                  <p className="text-black/70 dark:text-white/70">
                    Business Mentor | April 2022 - Present
                  </p>
                  <p className="mt-3 text-black/80 dark:text-white/80">
                    Mentored 200+ entrepreneurs across Nigeria, Kenya, and 
                    South Africa under the Google Hustle Academy initiative.

                    Guided founders in leveraging technology for growth, 
                    refining product-market positioning, 
                    and building scalable business systems — strengthening 
                    my ability to align technical solutions with real-world commercial objectives.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}