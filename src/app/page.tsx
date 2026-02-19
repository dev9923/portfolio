import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Certifications from "../components/Certifications";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Experience from "../components/Experience";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Certifications />
      <Projects />
      <Contact />
    </main>
  );
}
