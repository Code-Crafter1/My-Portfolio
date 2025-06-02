const Home = () => {
  return (
    <section
      id="home"
      className="w-full min-h-screen bg-[#0f0f0f] text-white flex items-center justify-center px-4 py-16"
    >
      <div className="max-w-7xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* 📝 Left Side: Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
            <span className="text-red-400">I'm</span>{" "}
            <span className="text-[#FFA500]">Sakshi</span>{" "}
            <span className="text-green-400"></span>, Full Stack Web Developer
            Based <br className="hidden sm:inline" /> In{" "}
            <span className="text-cyan-400">India</span>
          </h1>

          <p className="text-gray-300 text-base sm:text-lg mt-2 max-w-xl">
            I am a full-stack web developer dedicated to continuous learning
            through hands-on experience and embracing challenges as
            opportunities for growth.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="bg-gradient-to-r from-purple-500 to-orange-400 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition"
            >
              Connect With Me!
            </a>
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
          <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-lg grayscale hover:grayscale-0 transition duration-300">
            <img
              src="/your-image.jpg" // 🔁 Replace with your image in /public
              alt="Hari Om"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
