import type { Metadata } from "next";
import { ExperiencePage } from "@/components/pages/experience-page";

export const metadata: Metadata = {
  title: "Experience | Rajeep Gadal",
  description: "Full work experience of Rajeep Gadal",
};

export default function Experience() {
  return <ExperiencePage />;
}
