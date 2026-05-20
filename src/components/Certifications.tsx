import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import CopilotCert from "@/assets/images/copilot.png";
import AiCoderCert from "@/assets/images/ai_coder_cert.jpg";

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

type Certification = {
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  credentialUrl: string;
  image: string;
  skills: string[];
  summary: string;
};

const certifications: Certification[] = [
  {
    title: "GitHub Copilot Certification",
    issuer: "Microsoft & GitHub",
    date: "Issued 2026",
    credentialId: "43303B69B2675854",
    credentialUrl:
      "https://learn.microsoft.com/api/credentials/share/en-us/ChukwumaUkaha-6079/43303B69B2675854?sharingId=1168E3099C788D7F",
    image: CopilotCert,
    skills: [
      "Prompt Engineering",
      "Context Crafting",
      "Responsible AI",
      "Developer Productivity",
      "Privacy & Safeguards",
    ],
    summary:
      "Validated proficiency in leveraging GitHub Copilot to accelerate software delivery — covering prompt engineering, responsible AI use, and configuring privacy, content exclusions, and enterprise safeguards.",
  },
  {
    title: "AI Coder: Complete Claude Code & Coding Agents",
    issuer: "Udemy — Ligency & Ed Donner",
    date: "May 2026",
    credentialId: "UC-04bfdffc-3387-4841-944f-75ba90f20a5a",
    credentialUrl:
      "https://www.udemy.com/certificate/UC-04bfdffc-3387-4841-944f-75ba90f20a5a/",
    image: AiCoderCert,
    skills: [
      "Claude Code",
      "Sub-agents & Swarms",
      "MCP, Hooks & Plugins",
      "Cursor, Codex, Copilot",
      "AGENTS.md & CLAUDE.md",
    ],
    summary:
      "Deep specialization in agentic AI engineering — building production systems with Claude Code, orchestrating sub-agents and swarms, and shipping advanced workflows across Cursor, Codex, Copilot, and the Claude Agent SDK.",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="min-h-screen px-6 py-24 flex flex-col items-center"
    >
      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={itemVariants}
        className="text-center mb-16 max-w-2xl"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Certifications
        </h2>
        <p className="text-black/70 dark:text-white/70">
          Industry-recognized credentials validating expertise in
          AI-augmented engineering and modern developer workflows.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8">
        {certifications.map((cert) => (
          <motion.article
            key={cert.credentialId}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group flex flex-col bg-white dark:bg-black border border-black/5 dark:border-white/10 rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300"
          >
            {/* Certificate image */}
            <a
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden bg-gray-100 dark:bg-white/5"
              aria-label={`View ${cert.title} credential`}
            >
              <img
                src={cert.image}
                alt={`${cert.title} certificate`}
                loading="lazy"
                decoding="async"
                className="w-full h-56 md:h-64 object-cover object-top transform transition duration-500 group-hover:scale-[1.03]"
              />
            </a>

            {/* Body */}
            <div className="flex flex-col flex-1 p-6">
              <div className="flex items-center gap-2 mb-3 text-xs uppercase tracking-wider text-black/50 dark:text-white/50">
                <Award className="w-4 h-4" />
                <span>{cert.issuer}</span>
                <span className="text-black/30 dark:text-white/30">•</span>
                <span>{cert.date}</span>
              </div>

              <h3 className="text-lg md:text-xl font-semibold mb-3 leading-snug">
                {cert.title}
              </h3>

              <p className="text-sm md:text-base text-black/70 dark:text-white/70 mb-5 leading-relaxed">
                {cert.summary}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full bg-gray-200 dark:bg-white/10 text-xs text-black dark:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="mt-auto flex items-center justify-between pt-4 border-t border-black/5 dark:border-white/10">
                <p className="text-[11px] md:text-xs text-black/50 dark:text-white/50 font-mono truncate pr-3">
                  ID: {cert.credentialId}
                </p>
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs md:text-sm font-medium text-black dark:text-white hover:opacity-70 transition"
                >
                  Verify
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
