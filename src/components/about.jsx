import aboutImg from "../assets/images/portfolio2.jpg";

const About = () => {
  return (
    <div className="bg-[#0f0f0f] text-white py-20 px-6 scroll-mt-24">
      {/* Section Heading */}
      <div className="text-center mt-8 mb-16">
        <h2 className="text-5xl font-bold">
          <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
            About Me
          </span>
        </h2>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-14">
        {/* Image Box */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-74 h-90 bg-[#1a1a1a] shadow-lg overflow-hidden rounded-xl border-4 border-pink-300">
            <img
              src={aboutImg}
              alt="Sakshi"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content Box */}
        <div className="w-full md:w-1/2 text-left space-y-4">
          <p className="text-gray-300 text-lg">
            I'm <span className="text-pink-400 font-semibold">Sakshi</span>, a
            frontend developer driven by creativity and curiosity. I specialize
            in crafting modern, responsive web apps using the{" "}
            <span className="text-green-400 font-medium">MERN</span> stack.
          </p>

          <ul className="text-gray-300 space-y-3 text-base">
            <li>
              🛠️ <span className="text-white font-semibold">Tech Stack:</span>{" "}
              HTML5 , CSS3 , Javascript , React.js , Tailwind.CSS, Bootstrap
            </li>
            <li>
              💡{" "}
              <span className="text-white font-semibold">
                Currently Exploring:
              </span>{" "}
              API , Next.js, Framer Motion
            </li>
            <li>
              🧰 <span className="text-white font-semibold">Tools:</span> Git,
              GitHub, VS Code , Netlify
            </li>
            <li>
              🚀 <span className="text-white font-semibold">Passion:</span>{" "}
              Clean UI, smooth UX, and scalable frontend architecture
            </li>
            <li>
              🎯 <span className="text-white font-semibold">Fun Fact:</span> I
              love turning coffee into clean code and UI magic ☕✨
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
