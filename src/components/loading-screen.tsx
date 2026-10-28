"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TextRoll } from "@/components/core/text-roll";

const greetings = [
  "Hello", // English
  "नमस्ते", // Nepali / Hindi
  "こんにちは", // Japanese
  "Bonjour", // French
  "Hallo", // German
  "Hola", // Spanish
  "안녕하세요", // Korean
  "你好", // Chinese
  "Привет", // Russian
  "Ciao", // Italian
];

export function LoadingScreen() {
  const [index, setIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
    let timeoutId: NodeJS.Timeout;
    let currentIndex = 0;
    const cycleGreetings = () => {
      // 1. HOLD LAST WORD
      if (currentIndex === greetings.length - 1) {
        timeoutId = setTimeout(() => {
          setIsLoading(false);
        }, 1000); // <--- TWEAK: How long the last word stays on screen (1000 = 1 second)
        return;
      }
      // 2. DELAY PER WORD
      let delayForCurrentWord;
      if (currentIndex === 0) {
        delayForCurrentWord = 800; // <--- TWEAK: How long "Hello" stays (800 = 0.8 seconds)
      } else {
        delayForCurrentWord = 400; // <--- TWEAK: How long the middle words stay (400 = 0.4 seconds)
      }
      timeoutId = setTimeout(() => {
        currentIndex++;
        setIndex(currentIndex);
        cycleGreetings();
      }, delayForCurrentWord);
    };
    cycleGreetings();
    return () => clearTimeout(timeoutId);
  }, []);
  if (!isMounted) return null;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-100 flex items-center justify-center bg-[#09090b] text-white"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }} // <--- TWEAK: The fade transition between words
            >
              <TextRoll
                className="text-3xl md:text-5xl font-medium tracking-tight"
                variants={{
                  enter: { initial: { y: 0 }, animate: { y: 40 } },
                  exit: { initial: { y: -40 }, animate: { y: 0 } },
                }}
                duration={0.35} // <--- TWEAK: How fast the letters physically roll (0.35 = 350ms)
                getEnterDelay={(i) => i * 0.03} // <--- TWEAK: Stagger between each letter
                getExitDelay={(i) => i * 0.03 + 0.03}
                transition={{ ease: [0.175, 0.885, 0.32, 1.1] }}
              >
                {greetings[index]}
              </TextRoll>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
