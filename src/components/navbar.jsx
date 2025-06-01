import { useState } from "react";

const navbar = ({ setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (section) => {
    setActiveSection(section);
    setIsOpen(false); // Close mobile menu after clicking
  };

  return (
    <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-cyan-400">
          Sakshi's Portfolio
        </div>

        {/* Hamburger (mobile) */}
        <div
          className="md:hidden flex flex-col space-y-1 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </div>

        {/* Menu (desktop) */}
        <ul className="hidden md:flex space-x-8 font-medium">
          <li
            className="cursor-pointer hover:text-cyan-400"
            onClick={() => handleClick("home")}
          >
            Home
          </li>
          <li
            className="cursor-pointer hover:text-cyan-400"
            onClick={() => handleClick("about")}
          >
            About
          </li>
          <li
            className="cursor-pointer hover:text-cyan-400"
            onClick={() => handleClick("projects")}
          >
            Projects
          </li>
          <li
            className="cursor-pointer hover:text-cyan-400"
            onClick={() => handleClick("skills")}
          >
            Skills
          </li>
          <li
            className="cursor-pointer hover:text-cyan-400"
            onClick={() => handleClick("contact")}
          >
            Contact
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center bg-slate-800 space-y-4 py-4 font-medium">
          <li
            className="cursor-pointer hover:text-cyan-400"
            onClick={() => handleClick("home")}
          >
            Home
          </li>
          <li
            className="cursor-pointer hover:text-cyan-400"
            onClick={() => handleClick("about")}
          >
            About
          </li>
          <li
            className="cursor-pointer hover:text-cyan-400"
            onClick={() => handleClick("projects")}
          >
            Projects
          </li>
          <li
            className="cursor-pointer hover:text-cyan-400"
            onClick={() => handleClick("skills")}
          >
            Skills
          </li>
          <li
            className="cursor-pointer hover:text-cyan-400"
            onClick={() => handleClick("contact")}
          >
            Contact
          </li>
        </ul>
      )}
    </nav>
  );
};

export default navbar;
