import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = ({ setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", section: "home" },
    { label: "About Me", section: "about" },
    { label: "Projects", section: "projects" },
    { label: "Skills", section: "skills" },
    { label: "Contact", section: "contact" },
  ];

  return (
    <nav className="w-full bg-[#0f0f0f] text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          {/* <div className="text-3xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text drop-shadow-lg font-[Pacifico]">
            Sakshi
          </div> */}
          {/* Logo + Name */}
          <div className="flex items-center space-x-2">
            {/* Logo Icon */}
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 flex items-center justify-center">
              <span className="text-white text-sm font-bold">M</span>{" "}
              {/* Temporary Icon */}
            </div>

            {/* Name */}
            <div className="text-3xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text drop-shadow-lg font-[Pacifico]">
              Sakshi
            </div>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex space-x-6">
            {navItems.map(({ label, section }) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className="relative group text-lg font-medium transition-all duration-300"
              >
                <span className="text-white group-hover:text-pink-400 transition">
                  {label}
                </span>
                <span className="block h-[2px] max-w-0 group-hover:max-w-full transition-all duration-300 bg-pink-500"></span>
              </button>
            ))}
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={() => setActiveSection("contact")}
              className="bg-gradient-to-r from-pink-500 to-orange-400 text-white px-5 py-2 rounded-full shadow-lg font-semibold hover:scale-105 transform transition duration-300"
            >
              Connect With Me!
            </a>
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <FiX className="text-3xl text-white" />
              ) : (
                <FiMenu className="text-3xl text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0f0f0f] px-6 py-4 space-y-4">
          {navItems.map(({ label, section }) => (
            <button
              key={section}
              onClick={() => {
                setActiveSection(section);
                setIsOpen(false);
              }}
              className="block w-full text-left text-lg font-medium hover:text-pink-400 transition"
            >
              {label}
            </button>
          ))}

          {/* Mobile CTA */}
          <div>
            <a
              href="#contact"
              onClick={() => {
                setActiveSection("contact");
                setIsOpen(false);
              }}
              className="block text-center bg-gradient-to-r from-pink-500 to-orange-400 text-white px-5 py-2 rounded-full shadow-lg font-semibold hover:scale-105 transform transition duration-300"
            >
              Connect With Me!
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
