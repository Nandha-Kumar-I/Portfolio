import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-purple-500/30">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
