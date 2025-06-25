import { useEffect, useRef, useState } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Project from "./components/Project/Project"; // timeline page
import Projects from "./components/Projects";
import Skills from "./components/Skills";

// ✅ Landing Page (with intersection logic)
const LandingPage = () => {
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
      const visible = entries.find((entry) => entry.isIntersecting);
      if (visible) {
        setActiveSection(visible.target.id);
      }
    }, observerOptions);

    const elements = Object.values(sectionsRef).map((ref) => ref.current);
    elements.forEach((el) => el && observer.observe(el));

    return () => {
      elements.forEach((el) => el && observer.unobserve(el));
    };
  }, []);

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
      <Footer />
    </>
  );
};

// ✅ Timeline Page
const TimelinePage = () => (
  <>
    <Navbar activeSection="projects" setActiveSection={() => {}} />
    <Project />
    <Footer />
  </>
);

// ✅ Router Setup
const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/projects/timeline",
    element: <TimelinePage />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
