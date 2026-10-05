import { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight, Download, Github, Maximize2, Minimize2, Moon, Sun } from "lucide-react";
import profilePhoto from "../assets/LINKEDIN PP 2.jpg";
import bmsThumbnail from "../assets/bms_thumbnail.webp";
import Contact from "../components/Contact";

const skillGroups = [
  {
    title: "Languages",
    skills: ["C", "C++", "Python", "JavaScript", "TypeScript", "Java"],
  },
  {
    title: "Tools",
    skills: ["Kicad", "STM32", "STM32CubeIDE", "Git", "Linux", "ROS 2", "Arduino", "ESP32", "React", "Node.js"],
  },
  {
    title: "Machine Learning",
    skills: ["TensorFlow", "PyTorch", "Keras", "OpenCV", "NumPy", "Pandas", "Matplotlib"],
  },
];

const Home = () => {
  const [skillsOpen, setSkillsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const theme = darkMode ? "dark" : "light";
    const themeColor = darkMode ? "#0a0a0a" : "#fafafa";
    const themeColorMeta = document.querySelector('meta[name="theme-color"]');

    document.documentElement.dataset.theme = theme;
    themeColorMeta?.setAttribute("content", themeColor);

    return () => {
      delete document.documentElement.dataset.theme;
      themeColorMeta?.setAttribute("content", "#fafafa");
    };
  }, [darkMode]);

  const toggleSection = (section) => {
    setActiveSection((current) => current === section ? null : section);
  };

  return (
    <main className="site-shell">
      <button
        className={`theme-toggle${darkMode ? " is-dark" : ""}`}
        type="button"
        aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        aria-pressed={darkMode}
        onClick={() => setDarkMode((enabled) => !enabled)}
      >
        <span className="theme-toggle-thumb">
          {darkMode
            ? <Moon size={15} strokeWidth={2.2} aria-hidden="true" />
            : <Sun size={15} strokeWidth={2.2} aria-hidden="true" />}
        </span>
      </button>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-intro">
          <img
            className="hero-photo"
            src={profilePhoto}
            alt="Shamik Goswami"
            draggable="false"
          />

          <div className="hero-copy">
            <p className="eyebrow">Hello, I&apos;m</p>
            <h1 id="hero-title">Shamik Goswami</h1>
            <p className="hero-role">Aspiring Embedded / Firmware Developer</p>
            <p className="hero-meta">
              B.Tech in Electrical &amp; Electronics Engineering, IEM Kolkata
              <span aria-hidden="true">·</span> 14 July 2004
              <span aria-hidden="true">·</span> Age 22
            </p>

            <div className={`skills-browser${skillsOpen ? " is-open" : ""}`}>
              <button
                className="skills-toggle"
                type="button"
                aria-expanded={skillsOpen}
                aria-controls="skills-content"
                onClick={() => setSkillsOpen((open) => !open)}
              >
                <span>See all Skills</span>
                {skillsOpen
                  ? <Minimize2 size={17} strokeWidth={2} aria-hidden="true" />
                  : <Maximize2 size={17} strokeWidth={2} aria-hidden="true" />}
              </button>

              <div className="top-skills" aria-label="Top skills">
                <span>C</span><span>Kicad</span><span>STM32</span>
                <span>Linux</span><span>C++</span>
              </div>

              <div className="skills-content" id="skills-content" aria-hidden={!skillsOpen}>
                {skillGroups.map((group) => (
                  <section className="skill-group" key={group.title}>
                    <h2>{group.title}</h2>
                    <div className="skill-pills">
                      {group.skills.map((skill) => <span key={skill}>{skill}</span>)}
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </div>

        <nav className="hero-nav" aria-label="Primary navigation">
          <button
            type="button"
            className={`nav-toggle${activeSection === "projects" ? " is-active" : ""}`}
            aria-expanded={activeSection === "projects"}
            aria-controls="projects-panel"
            onClick={() => toggleSection("projects")}
          >
            Projects
          </button>
          <button
            type="button"
            className={`nav-toggle${activeSection === "contact" ? " is-active" : ""}`}
            aria-expanded={activeSection === "contact"}
            aria-controls="contact-panel"
            onClick={() => toggleSection("contact")}
          >
            Contact
          </button>
          <a
            href="mailto:gshamik14@gmail.com?subject=Resume%20request"
            aria-label="Request Shamik's resume by email"
          >
            Resume <Download size={17} strokeWidth={1.8} />
          </a>
          <a
            href="https://github.com/shamikspeare"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub <ArrowUpRight size={17} strokeWidth={1.8} />
          </a>
        </nav>

        <div className={`projects-panel-shell${activeSection === "projects" ? " is-open" : ""}`}>
          <section
            className="projects-panel"
            id="projects-panel"
            aria-label="Projects"
            aria-hidden={activeSection !== "projects"}
            inert={activeSection !== "projects"}
          >
            <article className="project-card">
              <div className="project-image-stage">
                <img src={bmsThumbnail} alt="4S lithium-ion battery management system board" />
              </div>
              <div className="project-card-body">
                <h2>4S Li on BMS</h2>
                <a
                  href="https://github.com/shamikspeare?tab=repositories&q=BMS"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="project-github-icon" size={24} strokeWidth={1.8} />
                  <span>Explore the build on GitHub</span>
                  <ArrowRight className="project-link-arrow" size={18} strokeWidth={1.8} />
                </a>
              </div>
            </article>
          </section>
        </div>

        <div className={`contact-panel-shell${activeSection === "contact" ? " is-open" : ""}`}>
          <section
            className="contact-panel"
            id="contact-panel"
            aria-label="Contact Shamik"
            aria-hidden={activeSection !== "contact"}
            inert={activeSection !== "contact"}
          >
            <Contact />
          </section>
        </div>
      </section>
    </main>
  );
};

export default Home;
