import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32 w-full relative border-t border-black/10 flex flex-col items-center justify-center text-center"
    >
      <div className="container px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="font-display text-5xl sm:text-6xl md:text-8xl uppercase tracking-tight text-foreground mb-12">
            Let&apos;s build something remarkable
          </h2>

          <a
            href="mailto:vasudevsoni2001@gmail.com"
            className="group relative inline-flex items-center justify-center font-mono text-sm md:text-lg tracking-widest uppercase text-black/50 mb-24 hover:text-primary transition-colors duration-400"
          >
            vasudevsoni2001@gmail.com
            <span className="absolute -bottom-2 left-0 w-full h-px bg-black/20 group-hover:bg-primary transition-colors duration-400" />
          </a>

          <div className="flex items-center justify-center gap-12">
            <SocialLink
              href="https://github.com/vasudevsoni"
              icon={<Github className="w-6 h-6 md:w-8 md:h-8" />}
              label="GitHub"
            />
            <SocialLink
              href="https://www.linkedin.com/in/vasudevsoni/"
              icon={<Linkedin className="w-6 h-6 md:w-8 md:h-8" />}
              label="LinkedIn"
            />
            <SocialLink
              href="https://x.com/vasudevsoni2001"
              icon={<Twitter className="w-6 h-6 md:w-8 md:h-8" />}
              label="X"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// eslint-disable-next-line react/prop-types
function SocialLink({ href, icon, label }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="text-muted-foreground hover:text-primary transition-all duration-400 hover:-translate-y-1 block"
    >
      {icon}
    </a>
  );
}
