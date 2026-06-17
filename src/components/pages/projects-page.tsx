"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { data } from "@/lib/data";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const allTechs = Array.from(
  new Set(data.projects.flatMap((p) => p.tech)),
).sort();

export function ProjectsPage() {
  const [filter, setFilter] = useState<string | null>(null);

  const filtered = filter
    ? data.projects.filter((p) => p.tech.includes(filter))
    : data.projects;

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
            href="/#projects"
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
          <p className="text-sm text-muted-foreground mb-2">
            Things I&apos;ve built
          </p>
          <h1 className="text-3xl font-bold mb-4">All Projects</h1>
          <p className="text-muted-foreground mb-10">
            A collection of everything I&apos;ve built &mdash; from production
            systems to open source tools.
          </p>

          {/* Filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            <button
              onClick={() => setFilter(null)}
              className={`text-xs px-3 py-1.5 rounded-lg border transition-colors ${
                !filter
                  ? "border-primary text-primary"
                  : "border-border text-muted-foreground hover:border-primary/50"
              }`}
            >
              All
            </button>
            {allTechs.map((tech) => (
              <button
                key={tech}
                onClick={() => setFilter(tech === filter ? null : tech)}
                className={`text-xs px-3 py-1.5 rounded-lg border transition-colors ${
                  filter === tech
                    ? "border-primary text-primary"
                    : "border-border text-muted-foreground hover:border-primary/50"
                }`}
              >
                {tech}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {filtered.map((project, i) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                className="group p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <FaGithub size={16} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded-md border border-border text-muted-foreground bg-muted/50"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
