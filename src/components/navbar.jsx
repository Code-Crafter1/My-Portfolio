import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = ({ activeSection, setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", section: "home" },
    { label: "About Me", section: "about" },
    { label: "Projects", section: "projects" },
    { label: "Skills", section: "skills" },
    { label: "Contact", section: "contact" },
  ];

  const handleClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setActiveSection(id);
    setIsOpen(false);
  };

  return (
    <nav className="w-full bg-[#0f0f0f] text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2 -ml-14">
            <svg
              viewBox="0 0 200 120"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[210px] h-[130px]"
            >
              <g transform="translate(100, 60) scale(1.5)">
                <path
                  d="M -35 0
         C -35 -20, -15 -20, -5 0
         C 5 20, 25 20, 35 0
         C 25 -20, 5 -20, -5 0
         C -15 20, -35 20, -35 0
         Z"
                  fill="url(#grad)"
                />
                <defs>
                  <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#ec4899" />
                    <stop offset="100%" stopColor="#f97316" />
                  </linearGradient>
                </defs>
                <text
                  x="0"
                  y="6"
                  textAnchor="middle"
                  fontFamily="Georgia, 'Times New Roman', serif"
                  fontSize="18"
                  fontWeight="600"
                  fill="white"
                  style={{ fontStyle: "italic", letterSpacing: "1px" }}
                >
                  Sakshi
                </text>
              </g>
            </svg>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6">
            {navItems.map(({ label, section }) => (
              <button
                key={section}
                onClick={() => handleClick(section)}
                className={`relative group text-lg font-medium transition-all duration-300 ${
                  activeSection === section ? "text-pink-400" : "text-white"
                }`}
              >
                {label}
                <span
                  className={`block h-[2px] ${
                    activeSection === section ? "max-w-full" : "max-w-0"
                  } transition-all duration-300 bg-pink-500`}
                ></span>
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button
              onClick={() => handleClick("contact")}
              className="bg-gradient-to-r from-pink-500 to-orange-400 text-white px-5 py-2 rounded-full shadow-lg font-semibold hover:scale-105 transform transition duration-300"
            >
              Connect With Me!
            </button>
          </div>

          {/* Mobile Toggle */}
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
              onClick={() => handleClick(section)}
              className={`block w-full text-left text-lg font-medium ${
                activeSection === section ? "text-pink-400" : "text-white"
              }`}
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => handleClick("contact")}
            className="block w-full text-center bg-gradient-to-r from-pink-500 to-orange-400 text-white px-5 py-2 rounded-full shadow-lg font-semibold hover:scale-105 transform transition duration-300"
          >
            Connect With Me!
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
