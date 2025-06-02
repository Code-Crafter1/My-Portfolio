import { useEffect, useRef, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const sectionsRef = {
    home: useRef(null),
    about: useRef(null),
    projects: useRef(null),
    skills: useRef(null),
    contact: useRef(null),
  };

  // Handle intersection on scroll
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      const visibleEntry = entries.find((entry) => entry.isIntersecting);
      if (visibleEntry) {
        setActiveSection(visibleEntry.target.id);
      }
    }, observerOptions);

    const sectionElements = Object.values(sectionsRef).map(
      (ref) => ref.current
    );
    sectionElements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      sectionElements.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div>
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <main className="scroll-smooth">
        <section id="home" ref={sectionsRef.home}>
          <Home />
        </section>
        <section id="about" ref={sectionsRef.about}>
          <About />
        </section>
        <section id="projects" ref={sectionsRef.projects}>
          <Projects />
        </section>
        <section id="skills" ref={sectionsRef.skills}>
          <Skills />
        </section>
        <section id="contact" ref={sectionsRef.contact}>
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
