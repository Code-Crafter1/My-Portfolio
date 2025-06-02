import { useState } from "react";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle submission logic here
    console.log(form);
  };

  return (
    <section id="contact" className="bg-[#0f0f0f] text-white py-16 px-4">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold">
          <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
            Get In Touch
          </span>
        </h2>
      </div>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Side */}
        <div>
          <h3 className="text-3xl font-bold mb-4">
            <span className="bg-gradient-to-r from-red-500 via-orange-400 to-green-400 text-transparent bg-clip-text">
              Let's talk
            </span>
          </h3>
          <p className="text-gray-300 mb-6">
            I'm currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>

          <div className="space-y-4 text-gray-200 text-base">
            <div className="flex items-center gap-3">
              <FiMail className="text-xl text-pink-400" />
              <span>sakshikumarizen@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <FiPhone className="text-xl text-pink-400" />
              <span>+91 8709719771</span>
            </div>
            <div className="flex items-center gap-3">
              <FiMapPin className="text-xl text-pink-400" />
              <span>Bihar, India</span>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium">Your Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-md bg-[#1a1a1a] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Enter Your Name"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Your Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-md bg-[#1a1a1a] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Enter Your Email"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">
              Write Your Message Here
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 rounded-md bg-[#1a1a1a] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Enter Your Message"
            />
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-pink-500 to-orange-400 text-white px-6 py-3 rounded-full shadow-lg font-semibold hover:scale-105 transform transition duration-300"
          >
            Submit Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
