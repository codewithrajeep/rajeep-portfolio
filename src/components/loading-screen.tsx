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
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let currentIndex = 0;
    const cycleGreetings = () => {
      if (currentIndex === greetings.length - 1) {
        timeoutId = setTimeout(() => {
          setIsLoading(false);
        }, 1000);
        return;
      }
      let delayForCurrentWord;
      if (currentIndex === 0) {
        delayForCurrentWord = 800;
      } else {
        delayForCurrentWord = 400;
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

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          // Added bg-[#09090b] directly here so it's rendered dark on the server
          className="fixed inset-0 z-100 flex items-center justify-center bg-[#09090b] text-white"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <TextRoll
                className="text-3xl md:text-5xl font-medium tracking-tight"
                variants={{
                  enter: { initial: { y: 0 }, animate: { y: 40 } },
                  exit: { initial: { y: -40 }, animate: { y: 0 } },
                }}
                duration={0.35}
                getEnterDelay={(i) => i * 0.03}
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
