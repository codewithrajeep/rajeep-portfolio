"use client";

import { useState } from "react";
import { Settings2, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useSeason, Season, Intensity } from "@/components/season-context";
import { cn } from "@/lib/utils";

const seasons: Season[] = ["automatic", "winter", "spring", "summer", "autumn"];
const intensities: Intensity[] = ["none", "light", "medium", "heavy"];

export function SeasonCustomizer() {
  const { season, setSeason, intensity, setIntensity, speed, setSpeed } = useSeason();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-6 right-6 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center rounded-full bg-background/50 p-2.5 text-foreground backdrop-blur-md border border-border shadow-sm hover:bg-muted transition-colors cursor-pointer"
      >
        <Settings2 className="h-4 w-4" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute right-0 top-14 w-72 p-5 bg-background border border-border shadow-2xl rounded-xl origin-top-right"
          >
            <div className="flex flex-col gap-6">
              
              {/* Header */}
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-foreground">
                  Customize Effects
                </h4>
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-md p-1 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors cursor-pointer"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Season Selector */}
              <div className="flex flex-col gap-2">
                <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Season</span>
                <div className="flex flex-wrap gap-1.5">
                  {seasons.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSeason(s)}
                      className={cn(
                        "rounded-md px-2.5 py-1.5 text-xs font-medium capitalize transition-colors cursor-pointer",
                        season === s
                          ? "bg-foreground text-background"
                          : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                      )}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Intensity Selector */}
              <div className="flex flex-col gap-2">
                <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Intensity</span>
                <div className="flex flex-wrap gap-1.5">
                  {intensities.map((i) => (
                    <button
                      key={i}
                      onClick={() => setIntensity(i)}
                      className={cn(
                        "rounded-md px-2.5 py-1.5 text-xs font-medium capitalize transition-colors cursor-pointer",
                        intensity === i
                          ? "bg-foreground text-background"
                          : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                      )}
                    >
                      {i === "none" ? "Off" : i}
                    </button>
                  ))}
                </div>
              </div>

              {/* Speed Slider */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Speed</span>
                  <span className="text-xs font-mono text-foreground">{speed.toFixed(1)}x</span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="3.0"
                  step="0.1"
                  value={speed}
                  onChange={(e) => setSpeed(parseFloat(e.target.value))}
                  // Native Tailwind styling for the slider track and thumb
                  className="w-full h-1.5 bg-muted rounded-lg appearance-none cursor-pointer accent-foreground"
                />
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}