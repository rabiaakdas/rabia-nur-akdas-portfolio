import { MotionConfig } from "framer-motion";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { ExperienceTimeline } from "./components/ExperienceTimeline";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="app-shell">
        <Navbar />
        <main className="relative z-10">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <ExperienceTimeline />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
