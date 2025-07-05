import { useState } from "react";

import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [result, setResult] = useState("");
  // added for otp
  const [showOtp, setShowOtp] = useState(false);
  const [otp, setOtp] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_HARSA_ACCESS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      setForm({ name: "", email: "", message: "" });

      setTimeout(() => setResult(""), 1000);
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="bg-[#0f0f0f] text-white pt-28 pb-20 px-4">
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
            <span className="bg-gradient-to-r from-orange-400 to-pink-500 text-transparent bg-clip-text">
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
          {result && (
            <p className="text-sm mt-2 text-green-400 font-medium">{result}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
