import { useEffect } from "react";

const services = [
  {
    title: "Frontend Development",
    description:
      "Responsive and modern UI development using React.js, Tailwind CSS, and CSS3 for seamless user experiences.",
  },
  {
    title: "UI/UX Design",
    description:
      "Designing clean, intuitive, and user-friendly interfaces that ensure both aesthetics and usability.",
  },
  {
    title: "Web Prototyping",
    description:
      "Building interactive prototypes and mockups for web apps using HTML, CSS, and JavaScript to showcase ideas.",
  },
  {
    title: "API Integration",
    description:
      "Connecting frontend apps with third-party and custom APIs for dynamic, real-time features and functionality.",
  },
];

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#0f0f0f] text-white pt-10 pb-20 px-4">
      <div className="text-center mb-14">
        <h2 className="text-5xl font-extrabold mb-3">
          <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
            Services
          </span>
        </h2>
        <p className="text-gray-400 text-lg">What I can help you with</p>
      </div>

      <div className="max-w-6xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-2">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#1a1a1a] border border-pink-500 rounded-xl p-6 hover:shadow-[0_0_20px_#22d3ee90] transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-3 text-pink-400">
              {service.title}
            </h3>
            <p className="text-gray-300 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
