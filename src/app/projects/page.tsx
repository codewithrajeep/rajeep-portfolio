import type { Metadata } from "next";
import { ProjectsPage } from "@/components/pages/projects-page";

export const metadata: Metadata = {
  title: "Projects | Rajeep Gadal",
  description: "All projects built by Rajeep Gadal",
};

export default function Projects() {
  return <ProjectsPage />;
}
