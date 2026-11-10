"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type Season = "automatic" | "winter" | "spring" | "summer" | "autumn";
export type Intensity = "none" | "light" | "medium" | "heavy";

type SeasonContextType = {
  season: Season;
  setSeason: (s: Season) => void;
  intensity: Intensity;
  setIntensity: (i: Intensity) => void;
  speed: number;
  setSpeed: (s: number) => void;
};

const SeasonContext = createContext<SeasonContextType | undefined>(undefined);

export function SeasonProvider({ children }: { children: ReactNode }) {
  const [season, setSeason] = useState<Season>("automatic");
  const [intensity, setIntensity] = useState<Intensity>("medium");
  const [speed, setSpeed] = useState<number>(1); // Default 1x speed

  return (
    <SeasonContext.Provider
      value={{ season, setSeason, intensity, setIntensity, speed, setSpeed }}
    >
      {children}
    </SeasonContext.Provider>
  );
}

export function useSeason() {
  const context = useContext(SeasonContext);
  if (!context) throw new Error("useSeason must be used within SeasonProvider");
  return context;
}
