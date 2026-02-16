import type { Project } from "@/types/project"
import SiteBuilder from "@/assets/images/sitebuilder.png";
import Movie from "@/assets/images/movie.png";
import Crypto from "@/assets/images/cryptoapp.png";
import Music from "@/assets/images/music-box.png";
import News from "@/assets/images/news-website.png";
import Classroom from "@/assets/images/classroom-management.png";
import Blog from "@/assets/images/blog.png";

export const projects: Project[] = [
  {
    title: "AI Website Builder",
    description:
      "An AI-powered website generator that transforms user prompts into fully functional websites in seconds. Features a credit-based monetization system with seamless Paystack integration for secure payments and scalable revenue handling.",
    tech: ["React", "Tailwind", "Node.js", "Express", "Neon(Postgres)", "Prisma"],
    link: "https://ai-website-builder-omega-indol.vercel.app/",
    image: SiteBuilder,
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
