import { motion } from "framer-motion";
import { Mail, Linkedin, Github, ChevronDown } from "lucide-react";
import "./index.css";

import pizzamenu from "./pizza-menu.png";
import eatnsplit from "./eat-n-split.png";
import usepopcorn from "./use-popcorn.png";
import cityphoria from "./cityphoria.png";
import multisearch from "./multi-search.png";

export default function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <Header />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="navbar"
    >
      <div className="nav-content">
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
      </div>
    </motion.nav>
  );
}

function Header() {
  return (
    <header className="header">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="headerContent"
      >
        <h1 className="title">
          Hi, I'm <span className="highlight">Vasudev Soni</span>
        </h1>
        <p className="subtitle">Web Developer • Entrepreneur</p>
        <p className="about">
          I build clean, modern web apps using React.js and other technologies.
          I also enjoy creating scalable, user-centric products that solve
          real-world problems.
        </p>

        <motion.div
          className="contactLinks"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <a href="mailto:vasudevsoni2001@gmail.com" className="contact-link">
            <Mail />
          </a>
          <a
            href="https://www.linkedin.com/in/vasudevsoni"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            <Linkedin />
          </a>
          <a
            href="https://github.com/vasudevsoni"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            <Github />
          </a>
        </motion.div>

        <motion.div
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.div>
    </header>
  );
}

function Skills() {
  const skills = [
    {
      title: "React.js",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    },
    {
      title: "JavaScript",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    },
    {
      title: "Flutter",
      image:
        "https://storage.googleapis.com/cms-storage-bucket/0dbfcc7a59cd1cf16282.png",
    },
    {
      title: "Python",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png",
    },
    {
      title: "Firebase",
      image: "https://brandeps.com/logo-download/F/Firebase-logo-02.png",
    },
    {
      title: "Supabase",
      image:
        "https://images.seeklogo.com/logo-png/43/1/supabase-logo-png_seeklogo-435677.png",
    },
    {
      title: "Tailwind CSS",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png",
    },
    {
      title: "shadcn/ui",
      image: "https://ui.shadcn.com/apple-touch-icon.png",
    },
  ];

  return (
    <section id="skills" className="section">
      <motion.h2
        className="sectionTitle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Skills
      </motion.h2>
      <div className="skillsGrid">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            className="skill-card"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <img src={skill.image} alt={skill.title} className="skillImg" />
            <p className="skill-title">{skill.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  const projects = [
    {
      title: "Cityphoria",
      desc: "Find Your Next Home City",
      img: cityphoria,
      link: "https://www.cityphoria.com",
      github: "https://github.com/vasudevsoni/city-reviews-app",
    },
    {
      title: "Multi Search Boost",
      desc: "Chrome Extension to Search Across Sites",
      img: multisearch,
      link: "https://chromewebstore.google.com/detail/multi-search-boost-search/kcmfnehklmflhlmcjmjpkeccclijefag",
      github: "https://github.com/vasudevsoni/multi-search",
    },
    {
      title: "Use-Popcorn",
      desc: "Movies app with OMDb API",
      img: usepopcorn,
      link: "https://vasudevsoni.github.io/use-popcorn/",
      github: "https://github.com/vasudevsoni/use-popcorn",
    },
    {
      title: "Eat-n-Split",
      desc: "Split expenses with friends",
      img: eatnsplit,
      link: "https://vasudevsoni.github.io/eat-n-split/",
      github: "https://github.com/vasudevsoni/eat-n-split",
    },
    {
      title: "Pizza Menu",
      desc: "Restaurant menu",
      img: pizzamenu,
      link: "https://vasudevsoni.github.io/pizza-menu/",
      github: "https://github.com/vasudevsoni/pizza-menu",
    },
  ];

  return (
    <section id="projects" className="section">
      <motion.h2
        className="sectionTitle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="project-image-container">
              <img src={p.img} alt={p.title} className="projectImg" />
            </div>
            <div className="project-content">
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
              <div className="project-buttons">
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  View Project
                </a>
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="github-link"
                  >
                    Github Repo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Thanks for visiting ✨
      </motion.p>
    </footer>
  );
}
