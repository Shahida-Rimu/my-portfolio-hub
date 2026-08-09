import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { projects } from "@/lib/portfolio-data";

const title = "Portfolio — Shahida Akter Rimu";
const description =
  "Case studies from AutoTrace AI, Kemne Jabo? and an interactive Yutnori cultural game — UI planning, prototyping and frontend work.";

export const Route = createFileRoute("/portfolio/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Projects & case studies"
        copy="A selection of product and interface work — each with the problem, the approach and the design decisions behind it."
      />

      <section className="mx-auto grid w-[min(92%,1180px)] gap-8 py-8 md:grid-cols-2">
        {projects.map((p) => (
          <Link
            key={p.slug}
            to="/portfolio/$slug"
            params={{ slug: p.slug }}
            className="group rounded-3xl border border-border bg-card p-4 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl"
          >
            <img
              src={p.image}
              alt={p.name}
              loading="lazy"
              width={1200}
              height={900}
              className="aspect-[4/3] w-full rounded-2xl object-cover"
            />
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
        ))}
      </section>
    </>
  );
}