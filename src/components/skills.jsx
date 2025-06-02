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
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-[#0f0f0f] text-white py-16 px-4">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-cyan-400">Tech Stack</h2>
        <p className="text-gray-400 mt-4 text-lg">
          Technologies I work with and love to use
        </p>
      </div>

      {/* Skills Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10 place-items-center">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center justify-center space-y-3"
          >
            {/* Circle with isolated hover effect */}
            <div className="w-20 h-20 bg-[#1a1a1a] rounded-full flex items-center justify-center shadow-inner transition-all duration-300 hover:shadow-[0_0_20px_#00FFFF] hover:scale-110">
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-10 h-10 object-contain"
              />
            </div>
            <p className="text-lg font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
