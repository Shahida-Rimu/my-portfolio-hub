import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ProjectToggle } from "@/components/site/ProjectToggle";
import { ProjectCard } from "@/components/site/ProjectCard";
import { PageHeader } from "@/components/site/PageHeader";
import { projects } from "@/lib/portfolio-data";

const title = "Portfolio — Shahida Akter Rimu";
const description =
  "Explore Shahida Akter Rimu’s UI/UX and CMS projects, from fintech and e-commerce to AI platforms and interactive games.";

export const Route = createFileRoute("/portfolio/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Projects & case studies"
        action={<ProjectToggle expanded={showAllProjects} onToggle={() => setShowAllProjects((value) => !value)} />}
        copy="A selection of product and interface work — each with the problem, the approach and the design decisions behind it."
      />

      <section id="project-grid" className="mx-auto grid w-[min(92%,1180px)] items-stretch gap-6 py-8 md:grid-cols-2 lg:grid-cols-3">
        {(showAllProjects ? projects : projects.slice(0, 3)).map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} headingLevel="h2" />
        ))}
      </section>
    </>
  );
}