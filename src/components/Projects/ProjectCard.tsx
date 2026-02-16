import { ExternalLink } from "lucide-react";
import type { Project } from "@/types/project";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <div className="group bg-white dark:bg-black border border-black/5 dark:border-white/10 rounded-2xl overflow-hidden shadow-md transition hover:-translate-y-2 hover:shadow-xl flex flex-col">
      
      {/* Image */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-6 flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-xl font-semibold mb-3">
            {project.title}
          </h3>

          <p className="text-sm text-black/70 dark:text-white/70 mb-6 leading-relaxed">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="text-xs px-3 py-1 rounded-full bg-gray-200 dark:bg-white/10 text-black dark:text-white"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm font-medium hover:underline"
        >
          View More
          <ExternalLink className="w-4 h-4 ml-1" />
        </a>
      </div>
    </div>
  );
}
