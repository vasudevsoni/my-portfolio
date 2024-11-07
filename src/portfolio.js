import React from "react";
import { Mail, Linkedin, Github } from "lucide-react";
import "./index.css";
import pizzamenu from "./pizza-menu.png";
import eatnsplit from "./eat-n-split.png";

const Portfolio = () => {
  return (
    <div className="container">
      <Header />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
};

const Header = () => (
  <header className="header">
    <div className="headerContent">
      <h1 className="title">
        Hi, I'm <span className="title-name">Vasudev Soni</span>
      </h1>
      <p className="subtitle">Web Developer 👨🏻‍💻 + Entrepreneur 👨🏻‍💼</p>
      <p className="about-me">
        I'm a passionate web developer with experience in creating responsive
        and user-friendly web applications. I specialize in React.js and enjoy
        turning complex problems into simple, beautiful, and intuitive designs.
      </p>
      <div className="contactLinks">
        <a
          data-tooltip="Email"
          data-flow="bottom"
          href="mailto:vasudevsoni2001@gmail.com"
          className="iconLink"
        >
          <Mail size={24} />
        </a>
        <a
          data-tooltip="LinkedIn"
          data-flow="bottom"
          href="https://www.linkedin.com/in/vasudevsoni"
          target="_blank"
          rel="noopener noreferrer"
          className="iconLink"
        >
          <Linkedin size={24} />
        </a>
        <a
          data-tooltip="GitHub"
          data-flow="bottom"
          href="https://github.com/vasudevsoni"
          target="_blank"
          rel="noopener noreferrer"
          className="iconLink"
        >
          <Github size={24} />
        </a>
      </div>
    </div>
  </header>
);

const Skills = () => (
  <section className="section">
    <h2 className="sectionTitle">Skills</h2>
    <div className="skills">
      {skills.map((skill, index) => (
        <SkillCard key={index} skill={skill} />
      ))}
    </div>
  </section>
);

function SkillCard({ skill }) {
  return (
    <div data-tooltip={skill.title} data-flow="bottom">
      <img className="skillCard" src={skill.image} alt={skill.title} />
    </div>
  );
}

const Projects = () => (
  <section className="section">
    <h2 className="sectionTitle">Projects</h2>
    <div className="projectGrid">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  </section>
);

const ProjectCard = ({ project }) => (
  <div className={`card project${project.id}`}>
    <img src={project.image} alt={project.title} className="cardImage" />
    <div className="cardContent">
      <h3 className="cardTitle">{project.title}</h3>
      <p className="cardDescription">{project.description}</p>
      <p className="cardTech">
        Technologies: {project.technologies.join(", ")}
      </p>
      <ul className="featureList">
        {project.features.map((feature, index) => (
          <li key={index} className="featureItem">
            {feature.emoji} {feature.text}
          </li>
        ))}
      </ul>
      <div className="buttons">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="button"
        >
          Live Project ↗️
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="button"
        >
          GitHub Repo ↗️
        </a>
      </div>
    </div>
  </div>
);

function Footer() {
  return (
    <section className="section">
      <p className="about-me">
        Thank you for checking out my portfolio.{" "}
        <span data-tooltip="Have a good day!" data-flow="bottom">
          😀
        </span>
      </p>
    </section>
  );
}

const skills = [
  {
    title: " HTML",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png",
  },
  {
    title: "CSS",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
  },

  {
    title: "JavaScript",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png",
  },
  {
    title: "React.js",
    image:
      "https://static-00.iconduck.com/assets.00/react-original-wordmark-icon-840x1024-vhmauxp6.png",
  },
  {
    title: "Flutter",
    image:
      "https://storage.googleapis.com/cms-storage-bucket/0dbfcc7a59cd1cf16282.png",
  },
];

const projects = [
  {
    id: 1,
    title: "Eat-n-Split",
    image: eatnsplit,
    technologies: ["HTML", "CSS", "JavaScript", "React.js", "GitHub"],
    description:
      "Split your bills/expenses among friends and keep track of balance.",
    link: "https://vasudevsoni.github.io/eat-n-split",
    github: "https://github.com/vasudevsoni/eat-n-split",
    features: [
      { text: "Dynamic Web App", emoji: "🪄" },
      { text: "Cool, minimalistic UI", emoji: "😍" },
      { text: "Fully responsive", emoji: "📱" },
    ],
  },
  {
    id: 2,
    title: "Pizza Menu",
    image: pizzamenu,
    technologies: ["HTML", "CSS", "JavaScript", "React.js", "GitHub"],
    description: "An online menu home page for a Pizza restaurant.",
    link: "https://vasudevsoni.github.io/pizza-menu/",
    github: "https://github.com/vasudevsoni/pizza-menu",
    features: [
      { text: "Static Web App", emoji: "🧩" },
      { text: "Cool, minimalistic UI", emoji: "😍" },
      { text: "Fully responsive", emoji: "📱" },
    ],
  },

  {
    id: 3,
    title: "E-commerce Platform",
    image:
      "https://uicreative.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2021/03/03021341/ab-106.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    description:
      "A full-stack e-commerce platform with user authentication and payment integration.",
    link: "",
    github: "",
    features: [
      { text: "User Authentication", emoji: "🛡️" },
      { text: "Payment Integration", emoji: "💰" },
      { text: "Admin Dashboard", emoji: "👩‍💻" },
      { text: "Mobile Responsive", emoji: "📱" },
    ],
  },
];

export default Portfolio;
