import React from "react";
import { motion } from "framer-motion";
import { CircleArrowOutUpRight } from "lucide-react";
import shotlabImg from "../assets/shotlab.png";
import multisearchImg from "../assets/multi-search.png";

const projects = [
  {
    title: "ShotLab",
    description:
      "A SaaS platform for creating beautiful, shareable screenshots with custom annotations.",
    stack: ["React", "Supabase", "Clerk", "Polar Payments"],
    link: "https://shotlab.pro",
    image: shotlabImg,
  },
  {
    title: "Cityphoria",
    description:
      "A city discovery platform that helps users explore and discover new places.",
    stack: ["React", "Tailwind CSS", "Node.js", "Firebase"],
    link: "https://cityphoria.com",
    image: shotlabImg,
  },
  {
    title: "Multi Search Boost",
    description:
      "A browser extension that allows users to search multiple search engines at once.",
    stack: ["React", "Chrome Extension API", "Tailwind CSS"],
    link: "https://chromewebstore.google.com/detail/multi-search-boost-search/kcmfnehklmflhlmcjmjpkeccclijefag",
    image: multisearchImg,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-32 w-full relative border-t border-black/10"
    >
      <div className="container px-6 md:px-12 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 flex flex-col items-start justify-between gap-2"
        >
          <h2 className="font-display text-5xl md:text-7xl uppercase tracking-tight text-foreground">
            Projects
          </h2>
          <p className="font-mono text-sm text-muted-foreground max-w-sm">
            A selection of my recent work, showcasing my skills in frontend and
            backend development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.link}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                delay: i * 0.15,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group block relative border border-black/10 rounded-md hover:border-black/30 transition-all duration-400 overflow-hidden"
            >
              {/* Project image */}
              <div className="relative w-full overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover border-b border-black/10 opacity-80 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-400 ease-out"
                />
              </div>

              {/* Content row */}
              <div className="relative z-10 flex flex-col items-start justify-between gap-6 p-6">
                <div className="flex-1 flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <h3 className="font-display text-4xl uppercase tracking-wide text-foreground">
                      {project.title}
                    </h3>
                    <CircleArrowOutUpRight className="w-5 h-5 text-primary opacity-0 -translate-x-4 translate-y-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-400" />
                  </div>
                  <p className="text-muted-foreground text-md max-w-xl font-normal">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 md:max-w-xs">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs uppercase tracking-wider text-muted-foreground px-3 py-1.5 border border-black/10 group-hover:border-primary/30 rounded-xs transition-colors duration-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
