"use client";

import { useTheme } from "next-themes";
import { useEffect, useState, useMemo } from "react";
import Snowfall from "react-snowfall";

export function SeasonalEffects() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [leafImage, setLeafImage] = useState<HTMLImageElement | null>(null);

  // Prevent hydration mismatch
  useEffect(() => setMounted(true), []);

  // 1. Determine the current season based on the month (0 = Jan, 11 = Dec)
  const season = useMemo(() => {
    const month = new Date().getMonth();
    if (month === 11 || month === 0 || month === 1) return "winter"; // Dec, Jan, Feb
    if (month >= 2 && month <= 4) return "spring"; // Mar, Apr, May
    if (month >= 5 && month <= 7) return "summer"; // Jun, Jul, Aug
    return "autumn"; // Sep, Oct, Nov
  }, []);

  // 2. Generate the Leaf Image for Autumn
  useEffect(() => {
    if (season === "autumn") {
      const img = new Image();
      // A nice orange/yellow maple leaf SVG
      img.src =
        "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z' fill='%23d97706'/><path d='M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12' stroke='%23d97706' stroke-width='2' stroke-linecap='round'/></svg>";
      setLeafImage(img);
    }
  }, [season]);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  // --- WINTER (Snow) ---
  if (season === "winter") {
    return (
      <div className="pointer-events-none fixed inset-0 z-40">
        <Snowfall
          color={isDark ? "#ffffff" : "#a1a1aa"}
          snowflakeCount={80}
          speed={[0.5, 2.0]}
          wind={[-0.5, 1.0]}
          radius={[0.5, 2.5]}
          opacity={[0.3, 0.8]}
        />
      </div>
    );
  }

  // --- SPRING (Pink Petals) ---
  if (season === "spring") {
    return (
      <div className="pointer-events-none fixed inset-0 z-40">
        <Snowfall
          color={isDark ? "#f472b6" : "#fbcfe8"} // Pink colors
          snowflakeCount={50}
          speed={[0.8, 1.5]}
          wind={[-1.0, 1.5]} // A bit more breeze
          radius={[1.5, 3.5]} // Slightly bigger "petals"
          opacity={[0.4, 0.8]}
        />
      </div>
    );
  }

  // --- SUMMER (Sun Glow + Fireflies/Pollen) ---
  if (season === "summer") {
    return (
      <div className="pointer-events-none fixed inset-0 z-40">
        {/* Warm sun glare gradient in the top right */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(253,224,71,0.15),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(253,224,71,0.08),transparent_50%)]" />

        <Snowfall
          color={isDark ? "#fde047" : "#fef08a"} // Glowing yellow
          snowflakeCount={30} // Fewer, floating particles
          speed={[0.2, 0.8]} // Very slow, floating
          wind={[-1.5, 1.5]}
          radius={[1.0, 3.0]}
          opacity={[0.2, 0.6]}
        />
      </div>
    );
  }

  // --- AUTUMN (Falling Leaves) ---
  if (season === "autumn") {
    return (
      <div className="pointer-events-none fixed inset-0 z-40">
        <Snowfall
          images={leafImage ? [leafImage] : []} // Use the SVG leaf image
          snowflakeCount={30} // Leaves are bigger, so we need fewer
          speed={[1.0, 2.5]} // They fall a bit faster
          wind={[-2.0, 2.0]} // Lots of wind to make them tumble
          radius={[10, 18]} // Much bigger than snow
        />
      </div>
    );
  }

  return null;
}
