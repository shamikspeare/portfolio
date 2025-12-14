import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { Mail, Linkedin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const API_URI = import.meta.env.VITE_API_URL;

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!API_URI) {
      toast.error("API endpoint not configured");
      return;
    }

    console.log("Submitting form data:", formData);

    const toastId = toast.loading("...sending message");

    try {
      const response = await axios.post(`${API_URI}/api/contact`, formData, {
        headers: { "Content-Type": "application/json" },
      });
      toast.success(response.data.message || "Message sent successfully", { id: toastId });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error details:", error.response?.data);
      const errorMessage = typeof error.response?.data?.error === 'string'
        ? error.response.data.error
        : "Unexpected error occurred, message not sent";
      toast.error(errorMessage, { id: toastId });
    }
  };

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2">
      {/* Left Column: Contact Me Text */}
      <div>
        <div className="flex flex-col justify-start p-4 sm:p-12 gap-4">
          <h1 className="font-bold text-4xl md:text-6xl text-center md:text-left text-neutral-200">Contact Me</h1>
          <h2 className="text-center md:text-left text-sm text-neutral-400">Always open to discussing new projects or ideas. Drop a message, and I'll get back to you within one business day.</h2>
        </div>

        {/* Outer container: Centers the wrapper on mobile (items-center), aligns left on desktop (md:items-start) */}
        <div className="flex flex-col p-4 sm:p-12 items-center md:items-start">

          {/* NEW WRAPPER: w-fit ensures the box is only as wide as the content, keeping items left-aligned relative to each other */}
          <div className="flex flex-col gap-4 w-fit">

            {/* Removed 'w-full', 'justify-center' and 'md:justify-start' - natural flow handles it now */}
            <p className="flex items-center gap-2">
              <span className="bg-neutral-200/50 border border-white/50 backdrop-blur-sm rounded-full p-1">
                <Mail className="w-4 h-4 text-white" />
              </span>
              <a href="mailto:gshamik14@gmail.com" className="text-neutral-300 hover:text-neutral-200 transition-colors">
                gshamik14@gmail.com
              </a>
            </p>

            <p className="flex items-center gap-2">
              <span className="bg-neutral-200/50 border border-white/50 backdrop-blur-sm rounded-full p-1">
                <Linkedin className="w-4 h-4 text-white" />
              </span>
              <a href="https://www.linkedin.com/in/shamikspeare/" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-neutral-200 transition-colors">
                linkedin.com/in/shamikspeare/
              </a>
            </p>

          </div>
        </div>
      </div>

      {/* Right Column: Contact Form */}
      <div className="flex items-center justify-center p-4">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full max-w-md">
          {/* Email */}
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-semibold text-neutral-400">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="bg-white/20 backdrop-blur-sm border border-white/30 px-5 sm:px-6 py-2 sm:py-3 rounded-xl shadow-md text-neutral-200 placeholder:text-neutral-200 outline-none focus:ring-2 focus:ring-white/50 transition-all"
            />
          </div>

          {/* Name */}
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-semibold text-neutral-400">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="bg-white/20 backdrop-blur-sm border border-white/30 px-5 sm:px-6 py-2 sm:py-3 rounded-xl shadow-md text-neutral-200 placeholder:text-neutral-200 outline-none focus:ring-2 focus:ring-white/50 transition-all"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-semibold text-neutral-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Type your message here."
              value={formData.message}
              onChange={handleChange}
              className="bg-white/20 backdrop-blur-sm border border-white/30 px-5 sm:px-6 py-2 sm:py-3 rounded-xl shadow-md text-neutral-200 placeholder:text-neutral-200 min-h-[120px] outline-none focus:ring-2 focus:ring-white/50 transition-all resize-y"
            />
          </div>

          {/* Button */}
          <div className="flex justify-start">
            <button
              type="submit"
              className="bg-white/50 border border-white text-black px-5 py-1 rounded-full font-bold hover:bg-neutral-200 transition-colors shadow-md"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
