"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState, type MouseEvent } from "react";
import { flushSync } from "react-dom";

export function ThemeToggleCircle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="h-5 w-5" />;

  const toggleTheme = (e: MouseEvent<HTMLButtonElement>) => {
    const newTheme = resolvedTheme === "dark" ? "light" : "dark";
    const x = e.clientX;
    const y = e.clientY;

    // Check if browser supports View Transitions
    if (!document.startViewTransition) {
      setTheme(newTheme);
      return;
    }

    const endRadius = Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y),
    );

    const transition = document.startViewTransition(() => {
      flushSync(() => setTheme(newTheme));
    });

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 600,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
        },
      );
    });

    // FIX: Wake up Framer Motion after the transition finishes
    transition.finished.then(() => {
      // Dispatch a fake mousemove event to recalculate the dock magnification
      window.dispatchEvent(
        new MouseEvent("mousemove", { clientX: x, clientY: y }),
      );
    });
  };

  return (
    <button
      onClick={toggleTheme}
      // FIX: Added w-full h-full rounded-full to make the whole circle clickable
      className="cursor-pointer flex items-center justify-center focus:outline-none w-full h-full rounded-full"
    >
      {resolvedTheme === "dark" ? (
        <Moon className="h-5 w-5 text-foreground/70" />
      ) : (
        <Sun className="h-5 w-5 text-foreground/70" />
      )}
    </button>
  );
}
