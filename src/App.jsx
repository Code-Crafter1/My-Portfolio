import "./App.css";
import About from "./components/about";
import Contact from "./components/contact";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Skills from "./components/skills";

function App() {
  return (
    <>
      <Navbar />

      <main className="text-white bg-gradient-to-br from-slate-900 to-slate-800 scroll-smooth">
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  );
}

export default App;
