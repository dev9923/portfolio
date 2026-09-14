import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProofStrip from "@/components/ProofStrip";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { AuroraBackground } from "@/components/ui/AuroraBackground";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      {/* No overflow-hidden here: it would make <main> a scroll container,
          so #anchors would scroll inside it and sticky rails would break.
          Clipping is done per-section instead. */}
      <main id="content" className="grain relative">
        <Hero />
        <ProofStrip />
        <Experience />
        <Projects />
        <div className="relative isolate">
          <AuroraBackground className="opacity-60" />
          <Skills />
          <About />
        </div>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
