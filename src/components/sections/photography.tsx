"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PolaroidLineCarousel from "@/components/ui/polaroid-line-carousel";
import { XIcon, ChevronLeft, ChevronRight } from "lucide-react";

// --- HOW TO ADD YOUR IMAGES ---
// 1. Put your images in the `public/photography` folder.
// 2. Change the strings below to match your filenames. Example: "/photography/my-photo.jpg"
const photos = [
  {
    image: "/photography/1.jpeg",
    caption: "Bish Hajari Taal.",
  },
  {
    image: "/photography/2.jpg",
    caption: "Sunset at Gold Valley.",
  },
  {
    image: "/photography/3.jpg",
    caption: "Morning sunrise with a few birds.",
  },
  {
    image: "/photography/4.jpg",
    caption: "A beautiful sunset viewed from my friend's house.",
  },
  {
    image: "/photography/5.jpg",
    caption: "Another sunset, painted in red, orange, and yellow.",
  },
  {
    image: "/photography/6.jpg",
    caption: "A clear view of the morning sunrise.",
  },
  {
    image: "/photography/7.jpg",
    caption:
      "Photo taken by my beautiful friend. The following photos start from here, all captured by her.",
  },
  {
    image: "/photography/8.jpg",
    caption: "Another beautiful cloud formation.",
  },
  {
    image: "/photography/9.jpg",
    caption: "Clouds drifting across the blue sky.",
  },
  {
    image: "/photography/10.jpg",
    caption: "This one looks like a painting.",
  },
  {
    image: "/photography/11.jpg",
    caption: "A clear view with scattered clouds.",
  },
  {
    image: "/photography/12.jpg",
    caption: "Just look at this sunset.",
  },
  {
    image: "/photography/13.jpg",
    caption: "Another beautifully captured sunset.",
  },
  {
    image: "/photography/14.jpg",
    caption: "Well, this is the end, with one last beautiful sunset.",
  },
];

export function Photography() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // --- KEYBOARD NAVIGATION LOGIC ---
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Only trigger if the lightbox is open
      if (lightboxIndex === null) return;

      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) => (prev! - 1 + photos.length) % photos.length);
      } else if (e.key === "ArrowRight") {
        setLightboxIndex((prev) => (prev! + 1) % photos.length);
      } else if (e.key === "Escape") {
        setLightboxIndex(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex]);

  return (
    <section
      id="photography"
      className="flex flex-col gap-6 pt-4 pb-0 relative"
    >
      <div className="flex flex-col gap-2">
        <p className="text-muted-foreground font-mono text-sm">
          Through my lens
        </p>
        <h2 className="text-3xl font-bold tracking-tight">Photography</h2>
        <p className="text-muted-foreground mt-2 max-w-lg">
          When I need a break from the terminal, I look up. I'm drawn to
          capturing the sky—the quiet light of morning, the dramatic hues of
          sunset, and the calm transition into evening. Each sky carries a
          different meaning. Here are a few moments I've paused to save.
        </p>
      </div>

      <div className="relative mt-0">
        <PolaroidLineCarousel
          height="380px"
          cardWidth={360}
          sag={40}
          swing={1.2}
          autoplay={4000}
          slides={photos}
          onImageClick={(idx) => setLightboxIndex(idx)}
        />
      </div>

      {/* FULL SCREEN LIGHTBOX */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 rounded-full bg-white/10 p-2 text-white backdrop-blur-md transition-colors hover:bg-white/20 z-50"
            >
              <XIcon className="h-6 w-6" />
            </button>

            {/* Left Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex(
                  (prev) => (prev! - 1 + photos.length) % photos.length,
                );
              }}
              className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white backdrop-blur-md transition-colors hover:bg-black/80 z-50"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>

            {/* Image Container */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-h-[85vh] max-w-[90vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={photos[lightboxIndex].image}
                alt={photos[lightboxIndex].caption}
                className="max-h-[85vh] w-auto rounded-lg object-contain shadow-2xl"
              />
              <p className="mt-4 text-center font-mono text-sm text-white/70">
                {photos[lightboxIndex].caption}
              </p>
            </motion.div>

            {/* Right Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev! + 1) % photos.length);
              }}
              className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white backdrop-blur-md transition-colors hover:bg-black/80 z-50"
            >
              <ChevronRight className="h-8 w-8" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
