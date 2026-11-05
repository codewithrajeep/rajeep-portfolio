import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";

// We split the skills into two rows for the marquee
const rowOneSkills = [
  "Node.js",
  "TypeScript",
  "Express.js",
  "REST APIs",
  "BullMQ",
  "JavaScript",
  "PostgreSQL",
  "Redis",
  "MongoDB",
  "Supabase",
  "Prisma",
  "MySQL",
];

const rowTwoSkills = [
  "Docker",
  "AWS (Learning)",
  "GitHub Actions",
  "Ubuntu",
  "Ghostty",
  "Bruno",
  "Postman",
  "Git",
  "React",
  "Next.js",
  "Tailwind CSS",
  "shadcn/ui",
  "HTML/CSS",
  "Rust",
  "C",
  "System Design",
];

export function Skills() {
  return (
    <section id="skills" className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <p className="text-muted-foreground font-mono text-sm">
          What I work with
        </p>
        <h2 className="text-3xl font-bold tracking-tight">Skills</h2>
      </div>

      {/* 
        The container has a mask-image applied to fade out the left and right edges.
        This makes the infinite scroll look incredibly premium.
      */}
      <div className="flex flex-col gap-4 py-4 relative [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        {/* Row 1 - Scrolling Left */}
        <InfiniteSlider speedOnHover={20} gap={16} speed={50}>
          {rowOneSkills.map((skill) => (
            <div
              key={skill}
              className="flex items-center justify-center rounded-xl border border-border bg-card px-6 py-3 font-mono text-sm text-foreground transition-colors hover:bg-muted"
            >
              {skill}
            </div>
          ))}
        </InfiniteSlider>

        {/* Row 2 - Scrolling Right (reverse) */}
        <InfiniteSlider speedOnHover={20} gap={16} speed={50} reverse>
          {rowTwoSkills.map((skill) => (
            <div
              key={skill}
              className="flex items-center justify-center rounded-xl border border-border bg-card px-6 py-3 font-mono text-sm text-foreground transition-colors hover:bg-muted"
            >
              {skill}
            </div>
          ))}
        </InfiniteSlider>
      </div>
    </section>
  );
}
