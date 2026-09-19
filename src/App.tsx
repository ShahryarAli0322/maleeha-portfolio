import { Footer, Navbar } from "./components/Navbar";
import { Contact } from "./sections/Contact";
import { Education, Interests, Workshops } from "./sections/Education";
import { About, Hero } from "./sections/Hero";
import { Internship } from "./sections/Internship";
import { Maps } from "./sections/Maps";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#about">
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Internship />
        <Projects />
        <Maps />
        <Education />
        <Workshops />
        <Interests />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
