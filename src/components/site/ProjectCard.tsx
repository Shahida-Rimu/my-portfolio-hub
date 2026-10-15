import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import type { Project } from "@/lib/portfolio-data";

export function ProjectCard({ project, index, headingLevel = "h3" }: { project: Project; index: number; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  return (
    <Reveal from="up" delay={(index % 3) * 140} className="mb-10 break-inside-avoid md:mb-12">
      <Link
        to="/portfolio/$slug"
        params={{ slug: project.slug }}
        className="group block rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
      >
        <div className="overflow-hidden rounded-2xl">
          <img
            src={project.image}
            alt={project.name}
            loading="lazy"
            className="block h-auto w-full transition-transform duration-700 ease-out group-hover:scale-105 group-focus-visible:scale-105 motion-reduce:transform-none motion-reduce:transition-none"
          />
        </div>
        <div className="pt-5 text-left">
          <Heading className="break-words text-xl font-bold uppercase leading-snug tracking-normal text-foreground">{project.name}</Heading>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.tagline}</p>
        </div>
      </Link>
    </Reveal>
  );
}