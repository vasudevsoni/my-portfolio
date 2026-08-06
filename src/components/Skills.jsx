import React from "react";
import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import {
  SiReact,
  SiTailwindcss,
  SiFlutter,
  SiNodedotjs,
  SiShadcnui,
  SiSupabase,
  SiFirebase,
  SiMongodb,
  SiGit,
  SiGithub,
  SiFramer,
  SiJavascript,
  SiClerk,
  SiPosthog,
  SiStripe,
} from "react-icons/si";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: SiReact },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "ShadCN/ui", icon: SiShadcnui },
      { name: "Framer Motion", icon: SiFramer },
      { name: "Flutter", icon: SiFlutter },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Supabase", icon: SiSupabase },
      { name: "Firebase", icon: SiFirebase },
      { name: "MongoDB", icon: SiMongodb },
      { name: "REST APIs", icon: null },
    ],
  },
  {
    category: "Architecture & Tools",
    items: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Clerk", icon: SiClerk },
      { name: "PostHog", icon: SiPosthog },
      { name: "Stripe", icon: SiStripe },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
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
            Skills & Expertise
          </h2>
          <p className="font-mono text-sm text-muted-foreground max-w-sm">
            A comprehensive overview of my technical skills.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
          {skills.map((skillGroup, i) => (
            <div key={skillGroup.category}>
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.8 }}
                className="font-mono text-xs uppercase tracking-widest text-primary mb-6"
              >
                {skillGroup.category}
              </motion.h3>
              <div className="flex flex-col gap-3">
                {skillGroup.items.map((skill, j) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.3 + i * 0.1 + j * 0.06,
                        duration: 0.5,
                        ease: "easeOut",
                      }}
                      className="group flex items-center gap-4"
                    >
                      <div className="w-6 h-6 flex items-center justify-center text-black/30 group-hover:text-primary transition-colors duration-400 shrink-0">
                        {Icon ? (
                          <Icon size={18} />
                        ) : (
                          <Code2 size={14} className="opacity-50" />
                        )}
                      </div>
                      <span className="text-lg text-muted-foreground group-hover:text-foreground transition-colors duration-400">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
