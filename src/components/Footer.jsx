import { FiGithub, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-[#0f0f0f] text-white px-6 pt-12 pb-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Left Section */}
        <div>
          {/* Custom Logo */}
          <div className="flex items-center space-x-2 -ml-4 mb-4">
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

          {/* About Text */}
          <p className="text-sm text-gray-300 -mt-4">
            As a <span className="text-cyan-400">Frontend Developer</span>, I’m
            committed to continuous learning through hands-on projects and
            solving real-world challenges with creative code. Every bug is an
            opportunity to grow!
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col justify-between">
          {/* Social Icons */}
          <div className="flex space-x-5 mb-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiLinkedin className="text-xl hover:text-cyan-400 transition" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub className="text-xl hover:text-cyan-400 transition" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiInstagram className="text-xl hover:text-cyan-400 transition" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiTwitter className="text-xl hover:text-cyan-400 transition" />
            </a>
          </div>

          {/* Footer Links */}
          <div className="flex flex-wrap items-center text-sm text-gray-400 justify-between">
            <p>© {new Date().getFullYear()} Sakshi. All rights reserved.</p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <a href="#terms" className="hover:text-white transition">
                Terms of Service
              </a>
              <a href="#privacy" className="hover:text-white transition">
                Privacy Policy
              </a>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-100}
                className="cursor-pointer hover:text-white transition"
              >
                Connect with me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
