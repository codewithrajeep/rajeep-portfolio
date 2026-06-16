"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";
import { data } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-xl mx-auto"
        >
          <p className="text-sm text-muted-foreground mb-2">What&apos;s next</p>
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            I&apos;m currently open to new opportunities. Whether you have a
            question, a job offer, or just want to say hi &mdash; my inbox is
            always open.
          </p>

          <a
            href={`mailto:${data.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-medium mb-12"
          >
            <Mail size={16} />
            Say Hello
          </a>

          <div className="flex items-center justify-center gap-6 pt-8 border-t border-border">
            <a
              href={data.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <FaGithub size={20} />
            </a>
            <a
              href={data.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <FaLinkedin size={20} />
            </a>
          </div>

          <p className="text-xs text-muted-foreground mt-8">
            Designed &amp; Built by Rajeep Gadal
          </p>
        </motion.div>
      </div>
    </section>
  );
}
