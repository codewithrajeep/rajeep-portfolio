import { MapPin } from "lucide-react";
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogImage,
  MorphingDialogClose,
  MorphingDialogContainer,
} from "@/components/motion-primitives/morphing-dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function Hero() {
  return (
    <section id="hero" className="flex flex-col gap-4 pt-4 md:pt-10">
      {/* Header Block */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        {/* Left Side: Avatar & Name */}
        {/* Tweaked gap to be smaller on mobile (gap-4) and normal on desktop (md:gap-6) */}
        <div className="flex items-center gap-4 md:gap-6">
          <MorphingDialog
            transition={{
              type: "spring",
              bounce: 0.05,
              duration: 0.25,
            }}
          >
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="relative inline-block">
                  <MorphingDialogTrigger className="group relative flex h-20 w-20 md:h-28 md:w-28 shrink-0 cursor-pointer overflow-hidden rounded-2xl border border-border bg-muted">
                    {/* Reduced mobile image size to h-20 w-20 to give text more room */}
                    <MorphingDialogImage
                      src="/rajeep_gadal.jpeg"
                      alt="Rajeep Gadal"
                      className="h-full w-full object-cover object-top scale-125 grayscale transition-all duration-500 group-hover:grayscale-0"
                    />
                  </MorphingDialogTrigger>
                </div>
              </TooltipTrigger>
              <TooltipContent className="z-50">
                <p>View Profile</p>
              </TooltipContent>
            </Tooltip>

            <MorphingDialogContainer>
              {/* Changed sm:w-100 to sm:w-[400px] for standard Tailwind safety */}
              <MorphingDialogContent className="pointer-events-auto relative flex h-auto w-full max-w-[90vw] sm:w-[400px] flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-2xl">
                <MorphingDialogImage
                  src="/rajeep_gadal.jpeg"
                  alt="Rajeep Gadal"
                  className="h-full w-full object-contain"
                />
                <MorphingDialogClose className="absolute top-4 right-4 rounded-full bg-background/50 p-2 text-foreground backdrop-blur-md transition-colors hover:bg-background/80" />
              </MorphingDialogContent>
            </MorphingDialogContainer>
          </MorphingDialog>

          {/* Text Container */}
          {/* Added flex-1 and min-w-0 so the text knows to wrap nicely */}
          <div className="flex flex-col justify-center flex-1 min-w-0">
            <h1 className="text-xl md:text-2xl font-bold tracking-tight text-foreground truncate">
              Rajeep Gadal
            </h1>
            <p className="text-sm md:text-base text-muted-foreground">
              Backend-focused Software Engineer
            </p>
          </div>
        </div>

        {/* Right Side: Status & Location */}
        {/* Added a mt-2 on mobile so it doesn't hug the text above it */}
        <div className="flex flex-col md:items-end justify-center gap-1.5 md:mt-1.5 mt-2">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs md:text-sm font-medium text-foreground">
              Open to remote
            </span>
          </div>

          <div className="flex items-center gap-1 text-muted-foreground font-mono text-xs">
            <MapPin className="h-3 w-3" />
            <span>Kathmandu, Nepal</span>
          </div>
        </div>
      </div>

      {/* Bio Narrative */}
      <div className="flex flex-col gap-3 text-muted-foreground text-sm md:text-base leading-relaxed max-w-2xl mt-4">
        <p>
          I'm a backend-focused Software Engineer from Nepal 🇳🇵, currently
          studying Bachelors in Information Technology at Patan Multiple Campus
          (TU). I got hooked the moment I figured out how to make a database
          talk to a frontend, and I've been building backend systems ever since.
        </p>
        <p>
          These days, I spend my time optimizing queries, learning system
          design, and diving into DevOps (Linux, Docker, AWS). When I'm not at
          my keyboard, I'm usually overanalyzing F1 strategy as a (very patient)
          Ferrari fan, or reading about neuroplasticity. I'm a big believer that{" "}
          <em>"neurons that fire together, wire together"</em> whether I'm
          building a new architecture or breaking a bad habit.
        </p>
      </div>
    </section>
  );
}
