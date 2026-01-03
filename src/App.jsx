import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Project } from "@/sections/Project";
import { Experience } from "@/sections/Experience";
import { Contact } from "@/sections/Contact";
import { Navbar } from "@/layouts/Navbar";
import { Testimonials } from "@/sections/Testimonials";
import { Footer } from "./layouts/Footer";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Project />
        <Experience />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
