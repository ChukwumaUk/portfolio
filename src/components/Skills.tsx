import { Code, Server } from "lucide-react";

// Skill data
const frontendSkills = [
  "React",
  "CSS3",
  "Typescript",
  "HTML5",
  "Javascript",
  "Tailwind CSS",
  "Shadcn/UI",
];

const backendSkills = [
  "Python",
  "Node.js",
  "Express",
  "REST API",
  "Postgres",
  "SQL",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen px-6 py-24 flex flex-col items-center justify-center"
    >
      {/* Title */}
      <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
        My Skillset
      </h2>

      <p className="text-center text-black/70 dark:text-white/70 mb-12 max-w-2xl">
        As a full-stack software engineer my super-powers include, but are not limited to:
      </p>

      {/* Skills Boxes */}
      <div className="flex flex-col md:flex-row gap-12">
        {/* Frontend */}
        <div className="bg-white dark:bg-black border border-black/5 dark:border-white/10 rounded-2xl p-6 flex-1 shadow-md transition">
          <div className="flex items-center mb-4">
            <Code className="w-6 h-6 mr-2 text-black dark:text-white" />
            <h3 className="text-xl font-semibold">Frontend</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {frontendSkills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 rounded-full bg-gray-200 dark:bg-white/10 text-sm dark:text-white text-black transform transition hover:-translate-y-1 hover:shadow-md"
              >
                {skill}
              </span>

            ))}
          </div>
        </div>

        {/* Backend */}
        <div className="bg-white dark:bg-black border border-black/5 dark:border-white/10 rounded-2xl p-6 flex-1 shadow-md transition">
          <div className="flex items-center mb-4">
            <Server className="w-6 h-6 mr-2 text-black dark:text-white" />
            <h3 className="text-xl font-semibold">Backend</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {backendSkills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 rounded-full bg-gray-200 dark:bg-white/10 text-sm dark:text-white text-black transform transition hover:-translate-y-1 hover:shadow-md"
              >
                {skill}
              </span>

            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
