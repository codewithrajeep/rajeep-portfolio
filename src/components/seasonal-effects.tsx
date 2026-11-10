"use client";

import { useTheme } from "next-themes";
import { useEffect, useState, useMemo } from "react";
import Snowfall from "react-snowfall";
import { useSeason } from "@/components/season-context";

export function SeasonalEffects() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [leafImage, setLeafImage] = useState<HTMLImageElement | null>(null);

  const { season: userSeason, intensity, speed } = useSeason();

  useEffect(() => setMounted(true), []);

  const activeSeason = useMemo(() => {
    if (userSeason !== "automatic") return userSeason;
    const month = new Date().getMonth();
    if (month === 11 || month === 0 || month === 1) return "winter";
    if (month >= 2 && month <= 4) return "spring";
    if (month >= 5 && month <= 7) return "summer";
    return "autumn";
  }, [userSeason]);

  useEffect(() => {
    if (activeSeason === "autumn") {
      const img = new Image();
      img.src =
        "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z' fill='%23d97706'/><path d='M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12' stroke='%23d97706' stroke-width='2' stroke-linecap='round'/></svg>";
      setLeafImage(img);
    }
  }, [activeSeason]);

  if (!mounted || intensity === "none") return null;

  const isDark = resolvedTheme === "dark";

  const counts = {
    light: 30,
    medium: 70,
    heavy: 150,
  };
  const count = counts[intensity as keyof typeof counts] || 70;

  if (activeSeason === "winter") {
    return (
      <div className="pointer-events-none fixed inset-0 z-40">
        <Snowfall
          color={isDark ? "#ffffff" : "#a1a1aa"}
          snowflakeCount={count}
          // Multiply the base speed by the user's speed setting
          speed={[0.5 * speed, 2.0 * speed]}
          wind={[-0.5, 1.0]}
          radius={[0.5, 2.5]}
          opacity={[0.3, 0.8]}
        />
      </div>
    );
  }

  if (activeSeason === "spring") {
    return (
      <div className="pointer-events-none fixed inset-0 z-40">
        <Snowfall
          color={isDark ? "#f472b6" : "#fbcfe8"}
          snowflakeCount={count}
          speed={[0.8 * speed, 1.5 * speed]}
          wind={[-1.0, 1.5]}
          radius={[1.5, 3.5]}
          opacity={[0.4, 0.8]}
        />
      </div>
    );
  }

  if (activeSeason === "summer") {
    return (
      <div className="pointer-events-none fixed inset-0 z-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(253,224,71,0.15),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(253,224,71,0.08),transparent_50%)]" />
        <Snowfall
          color={isDark ? "#fde047" : "#fef08a"}
          snowflakeCount={Math.floor(count / 2)}
          speed={[0.2 * speed, 0.8 * speed]}
          wind={[-1.5, 1.5]}
          radius={[1.0, 3.0]}
          opacity={[0.2, 0.6]}
        />
      </div>
    );
  }

  if (activeSeason === "autumn") {
    return (
      <div className="pointer-events-none fixed inset-0 z-40">
        <Snowfall
          images={leafImage ? [leafImage] : []}
          snowflakeCount={Math.floor(count / 2.5)}
          speed={[1.0 * speed, 2.5 * speed]}
          wind={[-2.0, 2.0]}
          radius={[10, 18]}
        />
      </div>
    );
  }

  return null;
}
