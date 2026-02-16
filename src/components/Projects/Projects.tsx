import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-24 flex flex-col items-center"
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
        Projects
      </h2>

      <p className="text-center text-black/70 dark:text-white/70 mb-12 max-w-2xl">
        A curated selection of production-grade applications demonstrating scalable architecture, 
        intelligent automation, and user-centered design.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl w-full">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
