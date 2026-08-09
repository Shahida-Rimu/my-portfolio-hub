import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { projects, type Project } from "@/lib/portfolio-data";

export const Route = createFileRoute("/portfolio/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Project not found" }, { name: "robots", content: "noindex" }] };
    }
    const title = `${loaderData.project.name} — Case study`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.project.tagline },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.project.tagline },
      ],
    };
  },
  component: ProjectPage,
});

function ProjectPage() {
  const { project } = Route.useLoaderData() as { project: Project };

  return (
    <article className="mx-auto w-[min(92%,1000px)] py-16">
      <Link
        to="/portfolio"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowLeft className="size-4" /> Back to portfolio
      </Link>

      <h1 className="mt-8 text-[clamp(2rem,5vw,3.2rem)] leading-[1.05]">{project.name}</h1>
      <p className="mt-4 text-lg text-muted-foreground">{project.tagline}</p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <li key={t} className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
            {t}
          </li>
        ))}
      </ul>

      <img
        src={project.image}
        alt={`${project.name} interface`}
        loading="lazy"
        width={1200}
        height={900}
        className="mt-10 w-full rounded-3xl border border-border object-cover"
      />

      <div className="mt-12 grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-xl">The problem</h2>
          <p className="mt-3 text-muted-foreground">{project.problem}</p>
        </div>
        <div>
          <h2 className="text-xl">The solution</h2>
          <p className="mt-3 text-muted-foreground">{project.solution}</p>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-xl">Design process</h2>
        <ol className="mt-5 space-y-4">
          {project.process.map((step, i) => (
            <li key={step} className="flex gap-4 rounded-2xl border border-border bg-card p-5">
              <span className="font-display text-sm font-semibold text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-muted-foreground">{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </article>
  );
}