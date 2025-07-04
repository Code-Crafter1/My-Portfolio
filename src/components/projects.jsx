import { useNavigate } from "react-router-dom";
import MyWork from "./MyWork";
const Projects = () => {
  const navigate = useNavigate();

  const handleShowMore = () => {
    navigate("/projects/timeline");
  };

  return (
    <div className="bg-[#0f0f0f] text-white pt-28 pb-20 px-4">
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
        {MyWork.slice(0, 6).map((project) => (
          <div
            key={project.id}
            // className="bg-[#1a1a1a] rounded-xl shadow-lg hover:shadow-[0_0_20px_#22d3ee90] transition-all duration-300 overflow-hidden flex flex-col"
            className="bg-[#1a1a1a] border-2 border-pink-300 rounded-xl shadow-lg hover:shadow-[0_0_20px_#22d3ee90] transition-all duration-300 overflow-hidden flex flex-col"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48"
            />
            <div className="p-2 flex flex-col justify-between flex-grow">
              <div className="flex items-center justify-between mb-1">
                <h3
                  onClick={() => navigate(`/projects/${project.id}`)}
                  className="text-xl font-semibold text-white hover:underline cursor-pointer"
                >
                  {project.name}
                </h3>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-pink-500 to-orange-400 text-white px-4 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-transform"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      <div className="text-center mt-14">
        <button
          onClick={handleShowMore}
          className="border border-white px-8 py-3 text-white rounded-full hover:bg-white hover:text-black transition duration-300"
        >
          Show More →
        </button>
      </div>
    </div>
  );
};

export default Projects;
