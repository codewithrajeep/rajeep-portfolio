"use client";

import { motion } from "framer-motion";

const stats = [
  { number: "1.5+", label: "Years Building" },
  { number: "20+", label: "Modules Shipped" },
  { number: "4", label: "Live Projects" },
];

const facts = [
  { title: "Currently building", value: "Hookman — Webhook delivery service" },
  { title: "Looking for", value: "Backend / Software Engineer roles" },
  { title: "Based in", value: "Kathmandu, Nepal" },
  { title: "Education", value: "Diploma in IT — CTEVT, 2025" },
  { title: "Currently learning", value: "System Design & Distributed Systems" },
];

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm text-muted-foreground mb-2">Get to know me</p>
          <h2 className="text-3xl font-bold mb-12">About</h2>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Left — text */}
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                I&apos;m a self-taught backend engineer from Nepal with a
                Diploma in Information Technology. I&apos;ve been building
                production-grade APIs and backend systems across internship and
                contract roles.
              </p>
              <p>
                I care about writing clean, maintainable code and understanding
                the &quot;why&quot; behind architectural decisions &mdash; not
                just making things work, but making them work well under real
                conditions.
              </p>
              <p>
                Currently building in public, actively looking for my next role,
                and working toward going abroad within the next few years.
              </p>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl font-bold text-foreground">
                      {stat.number}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — fact cards */}
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-4 top-2 bottom-2 w-px bg-border" />

              <div className="space-y-4">
                {facts.map((fact, i) => (
                  <motion.div
                    key={fact.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                    className="flex items-start gap-4 pl-10 relative"
                  >
                    {/* Dot on line */}
                    <div className="absolute left-[13px] top-3 w-[6px] h-[6px] rounded-full bg-primary -translate-x-1/2" />

                    <div className="flex-1 p-3 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors">
                      <p className="text-xs text-muted-foreground mb-1">
                        {fact.title}
                      </p>
                      <p className="text-sm font-medium">{fact.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
