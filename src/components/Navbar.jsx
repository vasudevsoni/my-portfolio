import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-400 ${
        scrolled
          ? "py-4 backdrop-blur-md border-b border-black/5"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container px-6 md:px-12 mx-auto flex items-center justify-between">
        <button
          onClick={() => scrollTo("hero")}
          className="font-display text-2xl uppercase tracking-widest text-black/50 hover:text-primary transition-colors duration-400"
        >
          VS
        </button>

        <div className="flex items-center gap-4 md:gap-8 overflow-x-auto no-scrollbar">
          {["Skills", "Projects", "Contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-black/50 hover:text-primary transition-colors duration-400 whitespace-nowrap"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
