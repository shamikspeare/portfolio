import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import loginVideo from "../assets/MyStream_login_vid.mp4";

const features = [
  "High-quality real-time video calls powered by Stream",
  "Secure instant messaging alongside every call",
  "Custom authentication without a third-party auth service",
  "Friend requests, notifications and generated profile avatars",
];

const MyStream = () => {
  return (
    <main className="case-study">
      <header className="case-nav">
        <Link to="/"><ArrowLeft size={17} /> Back home</Link>
        <a href="https://mystream.onrender.com/" target="_blank" rel="noopener noreferrer">
          View live <ArrowUpRight size={17} />
        </a>
      </header>

      <section className="case-hero">
        <p className="section-index">Case study / 01</p>
        <h1>MyStream</h1>
        <p>A full-stack social platform for real-time video, messaging and meaningful connections.</p>
      </section>

      <section className="case-video" aria-label="MyStream login preview">
        <video src={loginVideo} autoPlay loop muted playsInline />
      </section>

      <section className="case-content">
        <div>
          <p className="section-index">The project</p>
          <h2>Communication, without the clutter.</h2>
        </div>
        <div className="case-copy">
          <p>
            MyStream combines real-time calling, chat and social discovery in a focused interface. I designed and developed the React frontend, Node.js API and MongoDB data layer, then integrated Stream for dependable live communication.
          </p>
          <ul>{features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
          <div className="case-stack">
            <span>React</span><span>Tailwind CSS</span><span>Node.js</span>
            <span>Express</span><span>MongoDB</span><span>Stream SDK</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MyStream;
