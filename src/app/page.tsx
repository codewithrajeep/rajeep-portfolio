"use client";

import { Hero } from "@/components/sections/hero";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Contact } from "@/components/sections/contact";
import { Photography } from "@/components/sections/photography";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Photography />
      <Contact />
    </>
  );
}
