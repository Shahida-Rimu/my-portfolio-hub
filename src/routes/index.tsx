import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import portrait from "@/assets/rimu-portrait.jpg";
import { projects, services } from "@/lib/portfolio-data";

const title = "Shahida Akter Rimu — UI/UX Designer & Frontend Developer";
const description =
  "Building intuitive and accessible user-centered digital experiences. Portfolio of Shahida Akter Rimu, UI/UX designer and frontend developer.";

export const Route = createFileRoute("/")({
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
  component: Index,
});

function Index() {
  return (
    <>
      <section className="mx-auto grid w-[min(92%,1180px)] items-center gap-12 py-16 md:grid-cols-2 md:py-24">
        <div className="fade-up">
          <span className="eyebrow text-primary">
            <span className="inline-block size-1.5 rounded-full bg-primary" />
            UI/UX Designer & Frontend Developer
          </span>
          <h1 className="mt-6 text-[clamp(2.3rem,6vw,4rem)] leading-[1.03]">
            Building intuitive and accessible digital experiences
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            I'm Shahida Akter Rimu — a final-year Computer Science & Engineering student who designs
            user-centered interfaces and builds them for the web.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              View portfolio <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-border px-6 py-3.5 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
            >
              Contact me
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-accent/60 blur-2xl" />
          <img
            src={portrait}
            alt="Portrait of Shahida Akter Rimu"
            width={1024}
            height={1280}
            className="w-full rounded-3xl object-cover shadow-xl md:max-h-[560px]"
          />
        </div>
      </section>

      <section className="mx-auto w-[min(92%,1180px)] py-12">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-3xl">Selected work</h2>
          <Link to="/portfolio" className="text-sm font-medium text-primary hover:underline">
            All projects
          </Link>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {projects.map((p) => (
            <Link
              key={p.slug}
              to="/portfolio/$slug"
              params={{ slug: p.slug }}
              className="group rounded-2xl border border-border bg-card p-3 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg"
            >
              <img
                src={p.image}
                alt={p.name}
                loading="lazy"
                width={1200}
                height={900}
                className="aspect-[4/3] w-full rounded-xl object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg">{p.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.tagline}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto w-[min(92%,1180px)] py-12">
        <h2 className="text-3xl">What I do</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-border bg-card p-7">
              <h3 className="text-lg">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{s.copy}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
