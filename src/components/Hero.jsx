import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background ambient light */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
          className="w-200 h-200 rounded-full bg-primary blur-[120px] mix-blend-screen"
        />
      </div>

      <div className="z-10 container px-6 md:px-12 mx-auto relative flex flex-col items-center text-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center"
        >
          <motion.div variants={item} className="mb-4">
            <span className="font-mono text-primary text-sm md:text-base tracking-widest uppercase">
              Hi there, I&apos;m
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-[5rem] sm:text-[7rem] md:text-[11rem] leading-[0.85] tracking-tight uppercase text-foreground mb-6"
          >
            Vasudev Soni
          </motion.h1>

          <motion.h2
            variants={item}
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-light tracking-wide max-w-2xl px-4"
          >
            Engineering digital experiences with precision.{" "}
            <br className="hidden md:block" />
            Architecture, aesthetics, and absolute focus.
          </motion.h2>

          <motion.div variants={item} className="mt-16">
            <button
              onClick={scrollToProjects}
              className="group relative inline-flex items-center justify-center px-8 py-4 rounded-md font-mono text-sm tracking-widest uppercase text-foreground bg-transparent border border-black/20 overflow-hidden transition-all duration-400 hover:border-primary/50"
            >
              <span className="relative z-10 transition-colors duration-400 group-hover:text-primary">
                View My Work
              </span>
              <div className="absolute inset-0 z-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-[0.16,1,0.3,1]" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
