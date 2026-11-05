import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContainer,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogTitle,
  MorphingDialogSubtitle,
  MorphingDialogDescription,
} from "@/components/motion-primitives/morphing-dialog";

const experiences = [
  {
    company: "W3 Developers Pvt. Ltd.",
    shortName: "W3",
    role: "Backend Software Engineer",
    date: "Jan 2026 - Apr 2026",
    description: [
      "Built W3 Worksphere HRM platform with 18 modules including Auth, Payroll, Attendance, Leave and CRM.",
      "Migrated production database from Railway MySQL to Neon PostgreSQL.",
      "Deployed full system on Render with GitHub Actions CI/CD pipeline.",
      "Delivered complete API documentation and handover on contract completion.",
    ],
    tech: ["Node.js", "TypeScript", "PostgreSQL", "Prisma", "Express.js"],
  },
  {
    company: "Mahuri Ventures",
    shortName: "MV",
    role: "Backend Developer Intern",
    date: "Jan 2025 - Jan 2026",
    description: [
      "Developed and optimized RESTful APIs using Node.js and Express.js.",
      "Managed PostgreSQL databases and optimized queries for better performance.",
      "Implemented JWT-based authentication for secure user login.",
      "Wrote backend API documentation for internal and external use.",
      "Collaborated using Git and GitHub for version control.",
    ],
    tech: ["Node.js", "TypeScript", "Express.js", "PostgreSQL", "MongoDB"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <p className="text-muted-foreground font-mono text-sm">
          Where I've worked
        </p>
        <h2 className="text-3xl font-bold tracking-tight">Experience</h2>
      </div>

      <div className="flex flex-col gap-3">
        {experiences.map((exp, idx) => (
          <MorphingDialog
            key={idx}
            transition={{
              type: "spring",
              bounce: 0.05,
              duration: 0.35,
            }}
          >
            {/* Trigger Card */}
            <MorphingDialogTrigger className="group w-full flex flex-row items-center justify-between rounded-xl border border-border bg-card p-4 sm:p-5 text-left transition-colors hover:bg-muted/40">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-muted font-mono text-sm font-bold text-muted-foreground">
                  {exp.shortName}
                </div>

                <div className="flex flex-col">
                  <MorphingDialogTitle className="text-base font-semibold text-foreground whitespace-nowrap">
                    {exp.company}
                  </MorphingDialogTitle>
                  <MorphingDialogSubtitle className="text-sm text-muted-foreground">
                    {exp.role}
                  </MorphingDialogSubtitle>
                </div>
              </div>

              <div className="flex items-center gap-4 sm:gap-6">
                <div className="hidden sm:block h-10 w-px border-l border-dashed border-border transition-colors group-hover:border-foreground/30" />
                <p className="font-mono text-xs sm:text-sm text-muted-foreground whitespace-nowrap">
                  {exp.date}
                </p>
              </div>
            </MorphingDialogTrigger>

            {/* Expanded Dialog Content */}
            <MorphingDialogContainer>
              {/* INCREASED PADDING to p-8 sm:p-10 for massive breathing room */}
              <MorphingDialogContent className="pointer-events-auto relative flex h-auto w-full max-w-[90vw] sm:w-150 flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-2xl p-8 sm:p-10">
                {/* Clean, absolute positioned close button */}
                <MorphingDialogClose className="absolute top-6 right-6 text-muted-foreground hover:text-foreground transition-colors" />

                {/* Modal Header - Clean vertical stacking */}
                <div className="flex items-start gap-5 mb-8 pr-12">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-border bg-muted font-mono text-xl font-bold text-muted-foreground">
                    {exp.shortName}
                  </div>
                  <div className="flex flex-col gap-1">
                    <MorphingDialogTitle className="text-2xl font-bold text-foreground tracking-tight">
                      {exp.company}
                    </MorphingDialogTitle>
                    <MorphingDialogSubtitle className="text-base text-muted-foreground">
                      {exp.role}
                    </MorphingDialogSubtitle>
                    <p className="font-mono text-xs text-muted-foreground/70 mt-1">
                      {exp.date}
                    </p>
                  </div>
                </div>

                {/* Description & Content */}
                <MorphingDialogDescription
                  disableLayoutAnimation
                  variants={{
                    initial: { opacity: 0, scale: 0.95, y: 10 },
                    animate: { opacity: 1, scale: 1, y: 0 },
                    exit: { opacity: 0, scale: 0.95, y: 10 },
                  }}
                  className="flex flex-col gap-6"
                >
                  {/* List with more spacing */}
                  <ul className="flex flex-col gap-3">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm sm:text-[15px] text-muted-foreground"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/20" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="mt-2 flex flex-wrap gap-2 pt-6 border-t border-border">
                    {exp.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-muted px-2.5 py-1.5 font-mono text-[11px] text-muted-foreground border border-border/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </MorphingDialogDescription>
              </MorphingDialogContent>
            </MorphingDialogContainer>
          </MorphingDialog>
        ))}
      </div>
    </section>
  );
}
