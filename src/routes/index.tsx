import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check, Download } from "lucide-react";
import portrait from "@/assets/rimu-portrait.png";
import { Reveal } from "@/components/site/Reveal";
import { TechMarquee } from "@/components/site/TechMarquee";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Awards } from "@/components/site/Awards";
import { projects, services, timeline } from "@/lib/portfolio-data";


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
              Professional UX/UI Designer & WordPress Expert
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
              {[
                "Professional UX/UI Designer & WordPress Expert",
                "Based in Bangladesh",
              ].map((label) => (
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
              <a
                href="/Rimu_CV.pdf.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Shahida_Akter_Rimu_Resume.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-primary bg-transparent px-6 py-3.5 text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:bg-primary/10 hover:text-primary"
              >
                Download Resume
                <Download className="size-4" />
              </a>
            </div>
            </Reveal>
            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
              {[
                { k: "10+", v: "Projects" },
                { k: "2026", v: "KAIST WFK trainee" },
                { k: "UX/UI & WP", v: "Design & development" },
              ].map((s, i) => (
                <Reveal key={s.v} from="up" delay={420 + i * 100}>
                  <dt className="font-display text-2xl text-foreground">{s.k}</dt>
                  <dd className="mt-1 text-xs text-muted-foreground">{s.v}</dd>
                </Reveal>
              ))}
            </dl>
          </div>
          <Reveal from="scale" delay={200} className="relative mx-auto w-full max-w-md animate-float">
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
              <p className="font-display text-sm">Figma → WordPress</p>
              <p className="text-xs text-muted-foreground">Pixel-perfect web development</p>
            </div>
          </Reveal>
        </div>
      </section>

      <TechMarquee />

      <section id="about" className="scroll-mt-28 py-20 md:py-24">
        <SectionHeader
          eyebrow="About me"
          title="Design thinking, applied to real problems"
          copy="I'm Shahida Akter Rimu, a Professional UX/UI Designer & WordPress Expert building intuitive, accessible digital experiences."
        />

        <div className="mx-auto grid w-[min(92%,1180px)] gap-10 md:grid-cols-2">
          <Reveal from="up">
            <p className="text-lg leading-relaxed text-muted-foreground">
              My work sits between design and engineering. I enjoy the research part — talking to
              people, mapping their journeys and finding where a product quietly frustrates them — as
              much as the craft of shaping a clean, accessible interface in Figma and then building it.
            </p>
          </Reveal>
          <Reveal from="up" delay={150}>
            <p className="text-lg leading-relaxed text-muted-foreground">
              I thrive in collaborative teams, where feedback moves fast and decisions are made
              together. Design thinking is my default process: understand, define, ideate, prototype
              and test, so every screen I ship is grounded in a real user need rather than a guess.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto w-[min(92%,1180px)] pt-16">
          <Reveal from="up">
            <h3 className="text-3xl">Education & experience</h3>
          </Reveal>
          <ol className="mt-10 border-l border-border">
            {timeline.map((t, i) => (
              <Reveal
                key={t.title}
                as="li"
                from="up"
                delay={i * 150}
                className="relative block pb-10 pl-8 last:pb-0"
              >
                <span className="absolute -left-[5px] top-2 size-2.5 rounded-full bg-primary" />
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                  {t.period}
                </p>
                <h4 className="font-display mt-2 text-lg">{t.title}</h4>
                <p className="text-sm font-medium text-foreground/80">{t.org}</p>
                <p className="mt-2 max-w-2xl text-muted-foreground">{t.copy}</p>
              </Reveal>
            ))}
          </ol>
        </div>

        <Awards />
      </section>

      <section id="portfolio" className="scroll-mt-28 py-20 md:py-24">
        <SectionHeader
          eyebrow="Portfolio"
          title="Projects & case studies"
          copy="A selection of product and interface work — each with the problem, the approach and the design decisions behind it."
        />
        <div className="mx-auto grid w-[min(92%,1180px)] gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
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
                    <h3 className="text-xl">{p.name}</h3>
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
        </div>
      </section>

      <section id="services" className="scroll-mt-28 py-20 md:py-24">
        <SectionHeader
          eyebrow="Services"
          title="How I can help"
          copy="From first wireframe to shipped interface — design and frontend work with accessibility built in."
        />
        <div className="mx-auto grid w-[min(92%,1180px)] gap-8 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} from="up" delay={i * 120} className="h-full">
              <div className="h-full rounded-3xl border border-border bg-card p-8 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-[1.02] hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/15">
                <h3 className="text-xl">{s.title}</h3>
                <p className="mt-3 text-muted-foreground">{s.copy}</p>
                <ul className="mt-6 space-y-3">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mx-auto w-[min(92%,1180px)] pt-16">
          <Reveal from="up">
            <div className="flex flex-wrap items-center justify-between gap-6 rounded-3xl border border-border bg-accent/50 p-10">
              <div>
                <h3 className="text-2xl">Have a project in mind?</h3>
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
        </div>
      </section>

    </>
  );
}
