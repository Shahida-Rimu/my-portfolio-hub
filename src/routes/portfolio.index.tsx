import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ProjectToggle } from "@/components/site/ProjectToggle";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
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

      <section id="project-grid" className="mx-auto grid w-[min(92%,1180px)] gap-8 py-8 md:grid-cols-2 lg:grid-cols-3">
        {(showAllProjects ? projects : projects.slice(0, 3)).map((p, i) => (
          <Reveal key={p.slug} from="up" delay={i * 120}>
          <Link
            to="/portfolio/$slug"
            params={{ slug: p.slug }}
            className="group block h-full rounded-3xl border border-border bg-card p-4 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-[1.02] hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20"
          >
            <div className="overflow-hidden rounded-2xl bg-accent">
              <img
                src={p.image}
                alt={p.name}
                loading="lazy"
                width={1200}
                height={900}
                className={`aspect-[4/3] w-full transition-transform duration-500 ease-in-out group-hover:scale-110 ${p.fit === "contain" ? "object-contain p-4" : "object-cover"}`}
              />
            </div>
            <div className="p-5">
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-xl">{p.name}</h2>
                <ArrowUpRight className="mt-1 size-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
              </div>
              <p className="mt-2 text-muted-foreground">{p.tagline}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Link>
          </Reveal>
        ))}
      </section>
    </>
  );
}