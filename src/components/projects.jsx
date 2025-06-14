const projects = [
  {
    title: "Portfolio Website",
    image: "/projects/portfolio.png",
    github: "https://github.com/yourusername/portfolio",
    live: "https://yourportfolio.com",
  },
  {
    title: "E-commerce Store",
    image: "/projects/ecommerce.png",
    github: "https://github.com/yourusername/ecommerce",
    live: "#",
  },
  {
    title: "Blog Platform",
    image: "/projects/blog.png",
    github: "https://github.com/yourusername/blog-platform",
    live: "#",
  },
  {
    title: "Weather App",
    image: "/projects/weather.png",
    github: "https://github.com/yourusername/weather-app",
    live: "#",
  },
  {
    title: "Task Manager",
    image: "/projects/taskmanager.png",
    github: "https://github.com/yourusername/task-manager",
    live: "#",
  },
  {
    title: "Chat App",
    image: "/projects/chat.png",
    github: "https://github.com/yourusername/chat-app",
    live: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      //   className="bg-[#0f0f0f] text-white py-20 px-4 scroll-mt-20"
      className="bg-[#0f0f0f] text-white pt-28 pb-20 px-4 scroll-mt-20"
    >
      {/* Section Heading */}
      <div className="text-center mb-9">
        <h2 className="text-5xl font-extrabold mb-3">
          <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
            My Work
          </span>
        </h2>
        <p className="text-gray-400 text-lg">
          A few things I've built recently
        </p>
      </div>

      {/* Project Grid */}
      <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#1a1a1a] rounded-xl shadow-lg hover:shadow-[0_0_20px_#22d3ee90] transition-all duration-300 overflow-hidden flex flex-col"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5 flex flex-col justify-between flex-grow">
              <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
              <div className="flex items-center justify-between mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-pink-500 to-orange-400 text-white px-4 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-transform"
                >
                  GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline text-sm font-medium"
                >
                  Read More →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      <div className="text-center mt-14">
        <button className="border border-white px-8 py-3 text-white rounded-full hover:bg-white hover:text-black transition duration-300">
          Show More →
        </button>
      </div>
    </section>
  );
};

export default Projects;
