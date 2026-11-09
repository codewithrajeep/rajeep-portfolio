"use client";

import { useState, useEffect } from "react";
import { Mail, Check } from "lucide-react";
import { SiGithub, SiInstagram } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [time, setTime] = useState("");
  const email = "rajeepgadal@gmail.com";

  // Live time logic for Nepal (Asia/Kathmandu)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString("en-US", {
        timeZone: "Asia/Kathmandu",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
      setTime(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center pt-4 pb-12 gap-8"
    >
      <div className="flex flex-col items-center text-center gap-4">
        <p className="text-muted-foreground font-mono text-sm">What's next</p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Get In Touch
        </h2>
        <p className="text-muted-foreground max-w-sm text-sm md:text-base leading-relaxed mt-2">
          I'm currently open to new opportunities. Whether you have a project in
          mind, a question, or just want to say hi, my inbox is always open.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
        <a
          href={`mailto:${email}`}
          className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-foreground px-6 py-2.5 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
        >
          <Mail className="h-4 w-4" />
          Say Hello
        </a>

        <button
          onClick={copyEmail}
          className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg border border-border bg-transparent px-6 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted min-w-35"
        >
          <AnimatePresence mode="wait" initial={false}>
            {copied ? (
              <motion.div
                key="copied"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1 }}
                className="flex items-center gap-2 text-emerald-500"
              >
                <Check className="h-4 w-4" />
                Copied!
              </motion.div>
            ) : (
              <motion.div
                key="copy"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1 }}
                className="flex items-center gap-2"
              >
                Copy Email
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Social Links placed right below the buttons */}
      <div className="flex items-center gap-6 mt-3">
        <Link
          href="https://github.com/codewithrajeep"
          target="_blank"
          className="text-muted-foreground hover:text-foreground transition-colors p-1"
          aria-label="GitHub"
        >
          <SiGithub className="h-5 w-5" />
        </Link>
        <Link
          href="https://linkedin.com/in/codewithrajeep"
          target="_blank"
          className="text-muted-foreground hover:text-foreground transition-colors p-1"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="h-5 w-5" />
        </Link>
        <Link
          href="https://instagram.com/codewithrajeep"
          target="_blank"
          className="text-muted-foreground hover:text-foreground transition-colors p-1"
          aria-label="Instagram"
        >
          <SiInstagram className="h-5 w-5" />
        </Link>
      </div>

      {/* Clean Footer Bar at the bottom */}
      <div className="mt-5 pt-8 w-full border-t border-border/50 flex flex-col items-center justify-center gap-3 text-xs font-mono text-muted-foreground/60">
        {/* Live Time */}
        <div className="flex items-center gap-2">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
          </span>
          <span>
            {time ? `${time} in Kathmandu, Nepal` : "Kathmandu, Nepal"}
          </span>
        </div>

        {/* Copyright & Credits (Combined into one line) */}
        <p className="text-center">
          Designed & Built by Rajeep Gadal <span className="mx-1">·</span> ©{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </section>
  );
}
