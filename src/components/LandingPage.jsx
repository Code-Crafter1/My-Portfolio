import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

import About from "./about";
import Contact from "./contact";
import Footer from "./Footer";
import Home from "./home";
import Navbar from "./navbar";
import Projects from "./projects";
import Skills from "./Skills";

const LandingPage = () => {
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();

  const sectionsRef = {
    home: useRef(null),
    about: useRef(null),
    projects: useRef(null),
    skills: useRef(null),
    contact: useRef(null),
  };

  // 🔁 Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveSection(visible.target.id);
      },
      { threshold: 0.5 }
    );

    const elements = Object.values(sectionsRef).map((ref) => ref.current);
    elements.forEach((el) => el && observer.observe(el));

    return () => {
      elements.forEach((el) => el && observer.unobserve(el));
    };
  }, []);

  // 🔁 Scroll to section on route change (e.g. from Timeline)
  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = location.state.scrollTo;
      const el = sectionsRef[section]?.current;
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
          setActiveSection(section);
          window.history.replaceState({}, "", location.pathname);
        }, 100);
      }
    }
  }, [location]);

  // 🔁 Scroll on navbar/footer click
  const scrollToSection = (id) => {
    const el = sectionsRef[id]?.current;
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <>
      <Navbar
        activeSection={activeSection}
        setActiveSection={scrollToSection}
      />

      <main className="scroll-smooth">
        <div id="home" ref={sectionsRef.home}>
          <Home />
        </div>
        <div id="about" ref={sectionsRef.about}>
          <About />
        </div>
        <div id="projects" ref={sectionsRef.projects}>
          <Projects />
        </div>
        <div id="skills" ref={sectionsRef.skills}>
          <Skills />
        </div>
        <div id="contact" ref={sectionsRef.contact}>
          <Contact />
        </div>
      </main>

      <Footer />
    </>
  );
};

export default LandingPage;
