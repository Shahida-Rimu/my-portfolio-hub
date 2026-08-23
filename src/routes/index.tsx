import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import portrait from "@/assets/rimu-portrait.png";
import { Reveal } from "@/components/site/Reveal";
import { TechMarquee } from "@/components/site/TechMarquee";
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
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 -right-24 -z-10 size-[38rem] rounded-full bg-primary/20 blur-[120px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-52 -left-32 -z-10 size-[32rem] rounded-full bg-accent/70 blur-[120px]"
        />
        <div className="mx-auto grid w-[min(92%,1180px)] items-center gap-14 py-16 md:grid-cols-[1.05fr_0.95fr] md:py-24">
          <div>
            <Reveal from="up" delay={0}>
            <span className="eyebrow rounded-full border border-border bg-card/70 px-4 py-2 text-primary backdrop-blur">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-70" />
                <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
              </span>
              Available for jobs & freelance
            </span>
            </Reveal>
            <Reveal from="up" delay={120}>
            <h1 className="mt-7 text-[clamp(2.4rem,6.2vw,4.15rem)] leading-[1.02]">
              Building{" "}
              <span className="bg-gradient-to-r from-primary to-foreground bg-clip-text text-transparent">
                intuitive & accessible
              </span>{" "}
              digital experiences
            </h1>
            </Reveal>
            <Reveal from="up" delay={220}>
            <ul className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3">
              {["UI/UX Designer", "Based in Bangladesh"].map((label) => (
                <li
                  key={label}
                  className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-foreground/80 sm:text-sm"
                >
                  <span aria-hidden className="size-2.5 shrink-0 bg-primary" />
                  {label}
                </li>
              ))}
            </ul>
            </Reveal>
            <Reveal from="up" delay={320}>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/portfolio"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30"
              >
                View portfolio
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="rounded-full border border-border bg-card/60 px-6 py-3.5 text-sm font-semibold backdrop-blur transition-colors hover:border-primary hover:text-primary"
              >
                Contact me
              </Link>
            </div>
            </Reveal>
            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
              {[
                { k: "10+", v: "Projects" },
                { k: "2026", v: "KAIST WFK trainee" },
                { k: "UI/UX", v: "Design & frontend" },
              ].map((s, i) => (
                <Reveal key={s.v} from="up" delay={420 + i * 100}>
                  <dt className="font-display text-2xl text-foreground">{s.k}</dt>
                  <dd className="mt-1 text-xs text-muted-foreground">{s.v}</dd>
                </Reveal>
              ))}
            </dl>
          </div>
          <Reveal from="scale" delay={200} className="relative mx-auto w-full max-w-md">
            <div
              aria-hidden
              className="absolute -inset-3 -z-10 rounded-[2.5rem] bg-gradient-to-br from-primary/40 via-accent to-transparent blur-xl"
            />
            <div className="rounded-[2.25rem] border border-border bg-card/70 p-3 shadow-2xl backdrop-blur">
              <img
                src={portrait}
                alt="Portrait of Shahida Akter Rimu"
                width={1280}
                height={1600}
                decoding="async"
                fetchPriority="high"
                className="aspect-[4/5] w-full rounded-[1.75rem] object-cover"
              />
            </div>
            <div className="absolute -bottom-5 left-4 rounded-2xl border border-border bg-card px-5 py-3 shadow-lg">
              <p className="font-display text-sm">Figma → React</p>
              <p className="text-xs text-muted-foreground">Design to code handoff</p>
            </div>
          </Reveal>
        </div>
      </section>

      <TechMarquee />

      <section className="mx-auto w-[min(92%,1180px)] py-12">

        <Reveal from="up">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-3xl">Selected work</h2>
            <Link to="/portfolio" className="text-sm font-medium text-primary hover:underline">
              All projects
            </Link>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.slug} from="up" delay={i * 120}>
            <Link
              to="/portfolio/$slug"
              params={{ slug: p.slug }}
              className="group block h-full rounded-2xl border border-border bg-card p-3 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-[1.02] hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20"
            >
              <div className="overflow-hidden rounded-xl bg-accent">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className={`aspect-[4/3] w-full transition-transform duration-500 ease-in-out group-hover:scale-110 ${p.fit === "contain" ? "object-contain p-4" : "object-cover"}`}
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg">{p.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.tagline}</p>
              </div>
            </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto w-[min(92%,1180px)] py-12">
        <Reveal from="up">
          <h2 className="text-3xl">What I do</h2>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} from="up" delay={i * 120}>
              <div className="h-full rounded-2xl border border-border bg-card p-7 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
                <h3 className="text-lg">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{s.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
