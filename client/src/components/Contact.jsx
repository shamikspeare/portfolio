import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({ email: "", name: "", message: "" });
  const [status, setStatus] = useState("");
  const API_URI = import.meta.env.VITE_API_URL;

  const handleChange = (event) => {
    setFormData((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!API_URI) {
      setStatus("The contact endpoint is not configured yet.");
      return;
    }

    setStatus("Sending…");

    try {
      const response = await axios.post(`${API_URI}/api/contact`, formData, {
        headers: { "Content-Type": "application/json" },
      });
      setStatus(response.data.message || "Message sent successfully.");
      setFormData({ email: "", name: "", message: "" });
    } catch (error) {
      setStatus(
        typeof error.response?.data?.error === "string"
          ? error.response.data.error
          : "Message could not be sent. Please use email instead."
      );
    }
  };

  return (
    <div className="contact-card">
      <div className="contact-links" aria-label="Direct contact links">
        <a href="mailto:gshamik14@gmail.com">Email</a>
        <a
          href="https://www.linkedin.com/in/shamikspeare/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          <span>Email</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
          />
        </label>

        <label>
          <span>Name</span>
          <input
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>

        <label>
          <span>Message</span>
          <textarea
            name="message"
            required
            placeholder="Write your message"
            value={formData.message}
            onChange={handleChange}
          />
        </label>

        <div className="contact-form-footer">
          <button type="submit">Send message</button>
          <p role="status" aria-live="polite">{status}</p>
        </div>
      </form>
    </div>
  );
};

export default Contact;
