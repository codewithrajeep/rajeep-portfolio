"use client";

import { motion } from "framer-motion";
import { data } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm text-muted-foreground mb-2">
            Where I&apos;ve worked
          </p>
          <h2 className="text-3xl font-bold mb-12">Experience</h2>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-12">
              {data.experience.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="pl-8 relative"
                >
                  {/* Dot */}
                  <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-primary -translate-x-1/2" />

                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 mb-3">
                    <div>
                      <h3 className="text-lg font-semibold">{exp.role}</h3>
                      <p className="text-primary text-sm font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full w-fit">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-4">
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
    </section>
  );
}
