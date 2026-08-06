import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-dvh w-full bg-background text-foreground selection:bg-primary/30 selection:text-primary overflow-x-hidden font-sans relative">
      <div className="pointer-events-none fixed inset-0 z-100 opacity-[0.03] mix-blend-overlay bg-noise" />
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
