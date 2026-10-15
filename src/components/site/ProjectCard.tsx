import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import type { Project } from "@/lib/portfolio-data";

export function ProjectCard({ project, index, headingLevel = "h3" }: { project: Project; index: number; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  return (
    <Reveal from="up" delay={(index % 3) * 140} className="h-full">
      <Link
        to="/portfolio/$slug"
        params={{ slug: project.slug }}
        className="project-card group relative flex h-full flex-col rounded-2xl border border-border/80 bg-card/60 p-3 backdrop-blur-md transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-primary/30 hover:bg-card/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background motion-reduce:transform-none motion-reduce:transition-none"
      >
        <div className="relative aspect-[4/3] shrink-0 overflow-hidden rounded-xl border border-border/40 bg-muted/60">
          <img
            src={project.image}
            alt={project.name}
            loading="lazy"
            width={1200}
            height={900}
            className={`size-full transition-transform duration-700 ease-out group-hover:scale-105 group-focus-visible:scale-105 motion-reduce:transform-none motion-reduce:transition-none ${project.fit === "contain" ? "object-contain p-4" : "object-cover"}`}
          />
        </div>
        <div className="flex flex-1 flex-col px-3 pb-4 pt-6 sm:px-4">
          <div className="flex items-start justify-between gap-4">
            <Heading className="min-w-0 text-lg font-bold leading-snug tracking-normal text-foreground">{project.name}</Heading>
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-border/70 text-muted-foreground transition-colors duration-500 group-hover:border-primary/30 group-hover:bg-primary/10 group-hover:text-primary group-focus-visible:text-primary">
              <ArrowUpRight aria-hidden="true" className="size-4 transition-transform duration-500 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-focus-visible:-translate-y-0.5 group-focus-visible:translate-x-0.5 motion-reduce:transform-none motion-reduce:transition-none" />
            </span>
          </div>
          <p className="mb-6 mt-3 text-sm leading-relaxed text-muted-foreground">{project.tagline}</p>
          <ul className="mt-auto flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li key={tag} className="rounded-full border border-border/70 bg-background/25 px-3 py-1.5 text-[11px] font-medium leading-tight text-muted-foreground">{tag}</li>
            ))}
          </ul>
        </div>
      </Link>
    </Reveal>
  );
}