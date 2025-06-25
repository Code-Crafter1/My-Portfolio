import { FiGithub, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
import { Link } from "react-scroll";

const Footer = ({ setShowTimeline }) => {
  return (
    <footer className="bg-[#0f0f0f] text-white px-6 pt-8 pb-6">
      {/* Top Content */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Left Section: Logo and Description (hidden on small screens) */}
        <div className="hidden md:block flex-1">
          <div className="mb-2 -ml-13">
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

          <p className="text-sm text-gray-300 -mt-6 max-w-md">
            As a <span className="text-cyan-400">Frontend Developer</span>, I’m
            committed to continuous learning through hands-on projects and
            solving real-world challenges with creative code. Every bug is an
            opportunity to grow!
          </p>
        </div>

        {/* Right Section: Social Icons (centered on small screens) */}
        <div className="w-full md:w-auto mt-4 md:mt-35 flex justify-center md:justify-end">
          <div className="flex space-x-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="text-3xl hover:text-cyan-400 transition" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FiGithub className="text-3xl hover:text-cyan-400 transition" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FiInstagram className="text-3xl hover:text-cyan-400 transition" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FiTwitter className="text-3xl hover:text-cyan-400 transition" />
            </a>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="flex justify-center my-6">
        <hr className="w-full max-w-7xl border-t-3 border-white" />
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto -mt-3 flex flex-col md:flex-row justify-between items-center text-sm text-white space-y-2 md:space-y-0">
        <p>© {new Date().getFullYear()} Sakshi. All rights reserved.</p>
        <div className="flex space-x-4">
          <a
            href="#terms"
            className="hover:underline hover:underline-offset-4 hover:decoration-white transition"
          >
            Terms of Service
          </a>
          <a
            href="#privacy"
            className="hover:underline hover:underline-offset-4 hover:decoration-white transition"
          >
            Privacy Policy
          </a>

          <a
            href="#contact"
            className="hover:underline hover:underline-offset-4 hover:decoration-white transition"
          >
            Connect with me
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
