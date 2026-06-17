"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Download } from "lucide-react";
import { data } from "@/lib/data";
import Link from "next/link";

export function ExperiencePage() {
  return (
    <main className="min-h-screen bg-background pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-6">
        {/* Back */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            href="/#experience"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
          >
            <ArrowLeft size={14} /> Back to home
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-12">
            <div>
              <p className="text-sm text-muted-foreground mb-2">
                Where I&apos;ve worked
              </p>
              <h1 className="text-3xl font-bold">Full Experience</h1>
            </div>
            <a
              href="/Rajeep_Gadal_Resume.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm text-muted-foreground hover:border-primary/50 hover:text-foreground transition-all"
            >
              <Download size={14} />
              Resume
            </a>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
            <div className="space-y-16">
              {data.experience.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.15 }}
                  className="pl-8 relative"
                >
                  <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-primary -translate-x-1/2" />

                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.role}</h3>
                      <p className="text-primary text-sm font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full w-fit">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {exp.points.map((point, j) => (
                      <li
                        key={j}
                        className="text-sm text-muted-foreground flex gap-2"
                      >
                        <span className="text-primary mt-1">▸</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-1 rounded border border-border text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
