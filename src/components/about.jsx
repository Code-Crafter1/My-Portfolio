const About = () => {
  return (
    <section id="about" className="bg-[#0f0f0f] text-white py-16 px-4">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-cyan-400">About Me</h2>
        <p className="text-gray-400 mt-4 text-lg">
          Let’s get to know each other
        </p>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Profile Image */}
        <div className="w-48 h-48 md:w-60 md:h-60 bg-[#1a1a1a] rounded-full overflow-hidden shadow-inner hover:shadow-[0_0_30px_#00FFFF] transition-shadow duration-300">
          <img
            src="/your-image.jpg" // <-- Replace with your image path or URL
            alt="Your Name"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="text-center md:text-left max-w-xl">
          <h3 className="text-3xl font-semibold mb-4">Hi, I’m [Your Name]</h3>
          <p className="text-gray-300 text-lg leading-relaxed">
            I’m a passionate front-end developer who loves turning ideas into
            elegant, interactive web experiences. From pixel-perfect designs to
            scalable components, I enjoy building modern UIs using tools like
            React.js, Tailwind CSS, and more.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
