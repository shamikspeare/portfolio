import React, { useState } from "react";
import { Input } from "../animate-components/ui/input.jsx";
import { Textarea } from "../animate-components/ui/textarea.jsx";
import { InteractiveHoverButton } from "./magicui/interactive-hover-button.jsx";
import linkedin from "../assets/linkedin2.svg";
import github from "../assets/github.svg";
import MailButton from "./MailButton";
import { Tooltip, TooltipTrigger, TooltipContent } from "./animate-ui/components/radix/tooltip.jsx";
import { Highlighter } from "@/components/magicui/highlighter";
import toast from "react-hot-toast";
import axios from "axios";

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
    <div className="w-full max-w-[1000px] rounded-md bg-white border mt-14">
      {/* Header */}
      <div className="flex items-center justify-center bg-black rounded-t-md py-4">
        <div className="font-goldman text-3xl sm:text-3xl lg:text-[50px] text-white">
          <Highlighter action="underline" color="hsl(198.4 93.2% 59.6%)" isView={true}>
            Get In Touch
          </Highlighter>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-10">
        {/* Left Column: Social Links */}
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="flex gap-6 items-center justify-center flex-nowrap">
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="https://www.linkedin.com/in/shamikspeare/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={linkedin}
                    alt="linkedin"
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full hover:shadow-xl hover:scale-110 active:scale-95 active:shadow-md transition-transform duration-200 ease-in-out"
                  />
                </a>
              </TooltipTrigger>
              <TooltipContent>LinkedIn</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <a href="https://github.com/shamikspeare" target="_blank" rel="noopener noreferrer">
                  <img
                    src={github}
                    alt="github"
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full hover:shadow-xl hover:scale-110 active:scale-95 active:shadow-md transition-transform duration-200 ease-in-out"
                  />
                </a>
              </TooltipTrigger>
              <TooltipContent>GitHub</TooltipContent>
            </Tooltip>

            <MailButton />
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full max-w-md mx-auto">
          {/* Email */}
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-bold text-gray-700">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {/* Name */}
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-bold text-gray-700">
              Name
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-bold text-gray-700">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              required
              placeholder="Type your message here."
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          {/* Button */}
          <div className="flex justify-start">
            <InteractiveHoverButton type="submit">Send</InteractiveHoverButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
