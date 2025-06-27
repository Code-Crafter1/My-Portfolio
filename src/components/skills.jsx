const skills = [
  {
    name: "HTML5",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "React.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Bootstrap",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  {
    name: "Tailwind CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
];

const Skills = () => {
  return (
    <div className="bg-[#0f0f0f] text-white pt-28 pb-20 px-4">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-extrabold mb-3">
          <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
            Tech Stack
          </span>
        </h2>
        <p className="text-gray-400 mt-2 text-lg">
          Technologies I work with and love to use
        </p>
      </div>

      {/* First Row: 4 items */}
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 place-items-center mb-10">
        {skills.slice(0, 4).map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center justify-center space-y-3"
          >
            <div className="w-24 h-24 bg-[#1a1a1a] rounded-full flex items-center justify-center shadow-inner transition-all duration-300 hover:shadow-[0_0_20px_#22d3ee] hover:scale-110">
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-12 h-12 object-contain"
              />
            </div>
            <p className="text-base font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>

      {/* Second Row: 2 items centered */}
      <div className="max-w-xl mx-auto grid grid-cols-2 gap-10 place-items-center">
        {skills.slice(4).map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center justify-center space-y-3"
          >
            <div className="w-22 h-22 bg-[#1a1a1a] rounded-full flex items-center justify-center shadow-inner transition-all duration-300 hover:shadow-[0_0_20px_#22d3ee] hover:scale-110">
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-12 h-12 object-contain"
              />
            </div>
            <p className="text-base font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
