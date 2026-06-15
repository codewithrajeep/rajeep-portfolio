"use client";

import { Mail, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { data } from "@/lib/data";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="max-w-5xl mx-auto px-6 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* Left content */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm text-muted-foreground mb-3">Hey, I'm</p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
              {data.name}
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground font-medium mb-6">
              {data.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-lg mb-8">
              {data.bio}
            </p>

            {/* Social links */}
            <div className="flex items-center gap-4">
              <a
                href={data.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
              >
                <FaGithub size={20} />
              </a>
              <a
                href={data.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href={`mailto:${data.email}`}
                className="p-2 rounded-md hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
              >
                <Mail size={20} />
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                className="ml-2 px-4 py-2 text-sm bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity"
              >
                Resume
              </a>
            </div>
          </motion.div>

          {/* Right — profile pic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl bg-muted flex items-center justify-center text-4xl font-bold text-muted-foreground border border-border">
              RG
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <a
            href="#about"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowDown size={20} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
