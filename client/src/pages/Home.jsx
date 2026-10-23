import { useEffect, useState } from "react";
import { ArrowUpRight, ChevronDown, Download, Github, Settings } from "lucide-react";
import profilePhoto from "../assets/LINKEDIN PP 2.jpg";
import bmsThumbnail from "../assets/bms_thumbnail.webp";
import flashProject from "../assets/flashproject.webp";
import flashProjectMobile from "../assets/flashproject-mobile.webp";
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
  const [skillsOpen, setSkillsOpen] = useState(() =>
    typeof window !== "undefined" && window.matchMedia("(min-width: 641px)").matches
  );
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const laptopQuery = window.matchMedia("(min-width: 641px)");
    const syncSkillsState = (event) => setSkillsOpen(event.matches);

    laptopQuery.addEventListener("change", syncSkillsState);
    return () => laptopQuery.removeEventListener("change", syncSkillsState);
  }, []);

  const toggleSection = (section) => {
    setActiveSection((current) => current === section ? null : section);
  };

  return (
    <main className="site-shell">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-intro">
          <img
            className="hero-photo"
            src={profilePhoto}
            alt="Shamik Goswami"
            draggable="false"
          />

          <div className="hero-copy">
            <div className="hero-name-row">
              <h1 id="hero-title">Shamik Goswami</h1>
              <span className="pronouns">he/him</span>
            </div>
            <p className="hero-role">Aspiring Embedded / Firmware Developer</p>
            <p className="hero-meta">
              <span>B.Tech in Electrical &amp; Electronics Engineering, IEM Kolkata</span>
              <span className="hero-personal-meta">
                14 July 2004 <span aria-hidden="true">·</span> Age 22
              </span>
            </p>

            <div className={`skills-browser${skillsOpen ? " is-open" : ""}`}>
              <div className="skills-heading">
                <div className="skills-heading-label">
                  <span className="skills-icon" aria-hidden="true">
                    <Settings size={16} strokeWidth={1.9} />
                  </span>
                  <span className="skills-title">Skills</span>
                </div>
                <button
                  className="skills-toggle"
                  type="button"
                  aria-expanded={skillsOpen}
                  aria-controls="skills-content"
                  onClick={() => setSkillsOpen((open) => !open)}
                >
                  <span>{skillsOpen ? "Show less" : "See all"}</span>
                  <ChevronDown size={14} strokeWidth={2} aria-hidden="true" />
                </button>
              </div>

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
                <p className="project-category">Power electronics · Embedded</p>
                <h2>4S Li-ion BMS</h2>
                <p className="project-summary">
                  Compact protection and cell-balancing board for a four-cell lithium-ion pack.
                </p>

                <div className="project-contribution">
                  <p>My contribution</p>
                  <span>PCB design · Circuit validation · Embedded firmware</span>
                </div>

                <ul className="project-tools" aria-label="Project tools">
                  <li>KiCad</li>
                  <li>Embedded C</li>
                  <li>LTspice</li>
                </ul>

                <a
                  className="project-github-link"
                  href="https://github.com/shamikspeare?tab=repositories&q=BMS"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="project-github-icon" size={22} strokeWidth={1.9} />
                  <span>GitHub</span>
                  <ArrowUpRight className="project-link-arrow" size={20} strokeWidth={1.9} />
                </a>
              </div>
            </article>

            <article className="project-card flash-project-card">
              <div className="project-image-stage">
                <picture>
                  <source media="(max-width: 767px)" srcSet={flashProjectMobile} />
                  <img
                    src={flashProject}
                    alt="STM32 SPI NOR flash storage controller architecture"
                  />
                </picture>
              </div>
              <div className="project-card-body">
                <p className="project-category">Embedded systems · Firmware</p>
                <h2>RTOS-Based Flash Storage Controller</h2>
                <p className="project-summary">
                  STM32-based SPI NOR flash controller implementing read, page-program,
                  and sector-erase operations, with a foundation for RTOS scheduling and DMA.
                </p>

                <div className="project-contribution">
                  <p>My contribution</p>
                  <span>Bare-metal firmware · SPI driver · Flash memory interface</span>
                </div>

                <ul className="project-tools" aria-label="Flash storage controller tools">
                  <li>STM32</li>
                  <li>Embedded C</li>
                  <li>SPI NOR</li>
                  <li>FreeRTOS</li>
                </ul>

                <a
                  className="project-github-link"
                  href="https://github.com/shamikspeare/rtos-based-flash-storage-controller"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="project-github-icon" size={22} strokeWidth={1.9} />
                  <span>GitHub</span>
                  <ArrowUpRight className="project-link-arrow" size={20} strokeWidth={1.9} />
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
