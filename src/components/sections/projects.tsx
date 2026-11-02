import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <p className="text-muted-foreground font-mono text-sm">Things I've built</p>
        <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Hookman - Wide Card */}
        <Link
          href="https://github.com/codewithrajeep/hookman-backend"
          target="_blank"
          rel="noreferrer"
          className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:border-foreground/20 hover:shadow-sm md:col-span-2"
        >
          {/* Dot Grid Background */}
          <div className="absolute inset-0 z-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[radial-gradient(#262626_1px,transparent_1px)] opacity-50" />
          
          <div className="relative z-10 flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-foreground">Hookman</h3>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-foreground" />
            </div>
            <p className="text-sm text-muted-foreground max-w-lg">
              Reliable webhook delivery with dead-letter queues. No more lost events.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {["TypeScript", "Node.js", "Redis", "BullMQ", "PostgreSQL"].map((tech) => (
                <span key={tech} className="rounded-md bg-muted px-2 py-1 font-mono text-[10px] text-muted-foreground">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Terminal Illustration */}
          <div className="relative z-10 mt-8 overflow-hidden rounded-t-xl border border-border bg-background shadow-2xl">
            <div className="flex items-center gap-1.5 border-b border-border bg-muted/50 px-4 py-2">
              <div className="h-2 w-2 rounded-full bg-red-500/80" />
              <div className="h-2 w-2 rounded-full bg-yellow-500/80" />
              <div className="h-2 w-2 rounded-full bg-green-500/80" />
            </div>
            <div className="p-4 font-mono text-xs md:text-sm leading-relaxed">
              <p className="text-muted-foreground">
                <span className="text-emerald-500">POST</span> /api/v1/dispatch
              </p>
              <p className="text-muted-foreground mt-1">
                <span className="text-blue-400">{`{ "event": "user.created", "url": "..." }`}</span>
              </p>
              <p className="text-foreground mt-3">
                <span className="text-emerald-500">200 OK</span> {"{ \"status\": \"queued\", \"id\": \"hk_9f8a2\" }"}
              </p>
            </div>
          </div>
        </Link>

        {/* Pulseboard - Half Card */}
        <Link
          href="https://github.com/codewithrajeep/pulseboard-backend"
          target="_blank"
          rel="noreferrer"
          className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:border-foreground/20 hover:shadow-sm"
        >
          <div className="absolute inset-0 z-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[radial-gradient(#262626_1px,transparent_1px)] opacity-50" />
          
          <div className="relative z-10 flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-foreground">Pulseboard</h3>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-foreground" />
            </div>
            <p className="text-xs text-muted-foreground">
              Real-time infrastructure monitoring with Redis rate limiting.
            </p>
            <div className="flex flex-wrap gap-1.5 mt-1">
              {["Node.js", "Docker", "Redis"].map((tech) => (
                <span key={tech} className="rounded-md bg-muted px-2 py-1 font-mono text-[10px] text-muted-foreground">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Monitoring Dashboard Illustration */}
          <div className="relative z-10 mt-6 flex flex-col gap-2.5 rounded-lg border border-border bg-background p-3 font-mono text-[10px] shadow-sm">
            <div className="flex items-center justify-between border-b border-border pb-2 mb-1">
              <span className="text-muted-foreground flex items-center gap-1.5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                </span>
                Live Endpoints
              </span>
              <span className="text-muted-foreground">Latency</span>
            </div>
            
            <div className="flex items-center justify-between text-foreground">
              <span className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> /api/v1/users</span>
              <span className="text-emerald-500">24ms</span>
            </div>
            
            <div className="flex items-center justify-between text-foreground">
              <span className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> /api/v1/auth</span>
              <span className="text-emerald-500">18ms</span>
            </div>
            
            <div className="flex items-center justify-between text-foreground">
              <span className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" /> /api/v1/webhooks</span>
              <span className="text-red-500">142ms</span>
            </div>
          </div>
        </Link>

        {/* Arcstack - Half Card */}
        <Link
          href="https://github.com/codewithrajeep/arcstack"
          target="_blank"
          rel="noreferrer"
          className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:border-foreground/20 hover:shadow-sm"
        >
          <div className="absolute inset-0 z-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[radial-gradient(#262626_1px,transparent_1px)] opacity-50" />
          
          <div className="relative z-10 flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-foreground">Arcstack</h3>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-foreground" />
            </div>
            <p className="text-xs text-muted-foreground">
              Stop configuring folders. Start building. A scaffolding CLI for robust backends.
            </p>
            <div className="flex flex-wrap gap-1.5 mt-1">
              {["TypeScript", "CLI", "npm"].map((tech) => (
                <span key={tech} className="rounded-md bg-muted px-2 py-1 font-mono text-[10px] text-muted-foreground">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CLI Tree Illustration */}
          <div className="relative z-10 mt-6 rounded-lg border border-border bg-background p-3 font-mono text-[10px] leading-relaxed shadow-sm">
            <p className="text-muted-foreground">
              <span className="text-foreground">$</span> npx arcstack init
            </p>
            <p className="text-emerald-500 mt-1">✔ Project scaffolded</p>
            <p className="text-muted-foreground mt-2">📁 src</p>
            <p className="text-muted-foreground pl-3 border-l border-border ml-1">├── 📁 modules</p>
            <p className="text-muted-foreground pl-3 border-l border-border ml-1">├── 📁 config</p>
            <p className="text-muted-foreground pl-3 border-l border-border ml-1">└── 📄 server.ts</p>
          </div>
        </Link>

      </div>
    </section>
  );
}