import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { services } from "@/lib/portfolio-data";

const title = "Services — UI/UX, Frontend & Graphic Design";
const description =
  "UI/UX design in Figma, frontend development with HTML, CSS and React.js, plus graphic design for social and promotional content.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="How I can help"
        copy="From first wireframe to shipped interface — design and frontend work with accessibility built in."
      />

      <section className="mx-auto grid w-[min(92%,1180px)] gap-6 py-8 md:grid-cols-3">
        {services.map((s) => (
          <div key={s.title} className="rounded-3xl border border-border bg-card p-8">
            <h2 className="text-xl">{s.title}</h2>
            <p className="mt-3 text-muted-foreground">{s.copy}</p>
            <ul className="mt-6 space-y-3">
              {s.items.map((i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mx-auto w-[min(92%,1180px)] py-10">
        <div className="flex flex-wrap items-center justify-between gap-6 rounded-3xl border border-border bg-accent/50 p-10">
          <div>
            <h2 className="text-2xl">Have a project in mind?</h2>
            <p className="mt-2 text-muted-foreground">
              Tell me about it — I'll get back to you within a day.
            </p>
          </div>
          <Link
            to="/contact"
            className="rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Start a conversation
          </Link>
        </div>
      </section>
    </>
  );
}