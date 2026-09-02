import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { services } from "@/lib/portfolio-data";

const title = "Services — UI/UX, WordPress & Graphic Design";
const description =
  "UI/UX design in Figma, custom WordPress development, plus graphic design for social and promotional content.";

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

      <section className="mx-auto grid w-[min(92%,1180px)] gap-8 py-8 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.title} from="up" delay={i * 120} className="h-full">
          <div className="h-full rounded-3xl border border-border bg-card p-8 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-[1.02] hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/15">
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
          </Reveal>
        ))}
      </section>

      <section className="mx-auto w-[min(92%,1180px)] py-10">
        <Reveal from="up">
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
        </Reveal>
      </section>
    </>
  );
}