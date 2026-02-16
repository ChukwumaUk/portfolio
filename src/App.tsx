import Navbar from "./components/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
      <Navbar />

      <main className="pt-16">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
        <Analytics />
      </main>
    </div>
  );
}
