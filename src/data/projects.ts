import type { Project } from "@/types/project"
import Movie from "@/assets/images/movie.png";
import Crypto from "@/assets/images/crypto-app.png";
import Music from "@/assets/images/music-box.png";
import News from "@/assets/images/news-website.png";
import Classroom from "@/assets/images/classroom-management.png";
import Blog from "@/assets/images/blog.png";
import WebsiteBuilder from "@/assets/images/site-builder.png";
import NoteApp from "@/assets/images/note-app.png";
import LoomClone from "@/assets/images/loom_clone.png";

export const projects: Project[] = [
  {
    title: "AI Website Builder",
    description:
      "An AI-powered website generator that transforms user prompts into fully functional websites in seconds. Features a credit-based monetization system with seamless Paystack integration for secure payments and scalable revenue handling.",
    tech: ["React", "Tailwind", "Node.js", "Express", "Neon(Postgres)", "Prisma"],
    link: "https://ai-website-builder-omega-indol.vercel.app/",
    image: WebsiteBuilder
  },
  {
    title: "Full-Stack Note Taking App",
    description:
      "A modern note management platform with secure user authentication powered by NextAuth.js, supporting both credential-based sign-up and GitHub OAuth login. Authenticated users access a personalized dashboard to create, edit, and delete notes through a clean, responsive interface.",
    tech: ["Next.js 16", "TypeScript", "Tailwind CSS", "NextAuth.js"],
    link: "https://note-taking-app-lake-three.vercel.app/",
    image: NoteApp,
  },
  {
    title: "Loom-Inspired Screen Recorder",
    description:
      "A feature-rich screen recording platform with Google authentication, offering custom screen and microphone capture, AI-powered transcription and summaries, animated GIF thumbnails, MP4 downloads, and seamless video uploads to Mux with shareable video pages.",
    tech: ["Next.js 16", "TypeScript", "Tailwind CSS", "Mux", "NextAuth.js"],
    link: "https://screen-recorder-liart-five.vercel.app/",
    image: LoomClone,
  },
  {
    title: "Movie Recommendation Site",
    description:
      "A Netflix-inspired movie discovery platform powered by the TMDB API, delivering real-time search-driven recommendations, trailer previews, ratings, and dynamic content ranking.",
    tech: ["React", "Tailwind", "Appwrite"],
    link: "https://chukwumauk.github.io/trendymovies/",
    image: Movie,
  },
  {
    title: "Music Box - Stream & Play",
    description:
      "A sleek single-page music streaming interface built with React, featuring dynamic playback controls, seamless track transitions, and an intuitive user experience.",
    tech: ["React", "Tailwind"],
    link: "https://music-box-rho.vercel.app/",
    image: Music,
  },

  {
    title: "University Admin Dashboard",
    description:
      "A production-ready university management system built with the PERN stack, featuring multi-role authentication, secure join-code access, and cloud-based media management for scalable institutional operations.",
    tech: ["React", "Tailwind", "Shadcn/UI", "Node.js", "Express", "Neon(Postgres)", "Drizzle", "Arcject"],
    link: "https://classroom-frontend-bice.vercel.app/",
    image: Classroom,
  },

  {
    title: "Current Global News Site",
    description:
      "A real-time global news aggregator with category filtering, bookmarking functionality, and dark/light mode support — built using pure HTML, CSS, and JavaScript for optimized frontend performance.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    link: "https://chukwumauk.github.io/current-news/",
    image: News,
  },

  {
    title: "Crypto Live Market Data",
    description:
      "A dynamic cryptocurrency market dashboard displaying ranked pricing data and 24-hour updates, powered by Node.js, Express, and live API integrations.",
    tech: ["Node.js", "Express", "EJS"],
    link: "https://crypto-live-app.onrender.com/",
    image: Crypto,
  },

  {
    title: "Public Blog Platform",
    description:
      "A full-featured content publishing platform enabling users to create, edit, manage, and publish posts with media support through a robust Node.js and Express backend.",
    tech: ["Node.js", "Express", "EJS"],
    link: "https://dynamic-blog-47r1.onrender.com/",
    image: Blog,
  },
];
