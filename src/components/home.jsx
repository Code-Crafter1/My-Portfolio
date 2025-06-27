import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleConnectClick = () => {
    navigate("/", { state: { scrollTo: "contact" } });
  };

  return (
    <div className="w-full min-h-screen bg-[#0f0f0f] text-white flex items-center justify-center px-4 py-6 -mt-25">
      <div className="max-w-7xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* 📝 Left Side: Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
            <span className="text-red-400">I'm</span>{" "}
            <span className="text-[#FFA500]">Sakshi</span>, a Frontend Developer{" "}
            <span className="text-green-400">Enthusiast</span>
          </h1>

          <p className="text-gray-300 text-base sm:text-lg mt-2 max-w-xl">
            I craft responsive, user-friendly web interfaces using React and the
            MERN stack. Passionate about clean code, modern design, and turning
            ideas into smooth user experiences.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleConnectClick}
              className="bg-gradient-to-r from-purple-500 to-orange-400 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition"
            >
              Connect With Me!
            </button>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-400 text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition"
            >
              My Resume
            </a>
          </div>
        </div>

        {/* 👤 Right Side: Profile Image */}
        <div className="flex-1 flex justify-center">
          <div className="w-40 h-40 sm:w-78 sm:h-78 md:w-78 md:h-78 rounded-full overflow-hidden border-4 border-pink-300">
            <img
              src="src\assets\images\portfolio3.jpg" // Replace with your actual image path
              alt="Sakshi"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
