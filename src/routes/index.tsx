import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ProjectToggle } from "@/components/site/ProjectToggle";
import { ProjectCard } from "@/components/site/ProjectCard";
import { ArrowRight, Check, Download, MousePointer2, Sparkles, Trophy } from "lucide-react";
import portrait from "@/assets/rimu-portrait.png";
import { Reveal } from "@/components/site/Reveal";
import { TechMarquee } from "@/components/site/TechMarquee";
import { SectionHeader } from "@/components/site/SectionHeader";

import { contact, projects, services, timeline } from "@/lib/portfolio-data";


const title = "Shahida Akter Rimu — UI/UX & CMS Designer";
const description =
  "Building intuitive and accessible user-centered digital experiences. Portfolio of Shahida Akter Rimu, UI/UX & CMS Designer.";

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
  const [showAllProjects, setShowAllProjects] = useState(false);
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
              AVAILABLE FOR JOBS & FREELANCE
            </span>
            </Reveal>
            <Reveal from="up" delay={120}>
            <h1 className="mt-7 text-[clamp(2.4rem,6.2vw,4.15rem)] leading-[1.02]">
              Building{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-foreground bg-clip-text text-transparent">
                intuitive & accessible
              </span>{" "}
              digital experiences
            </h1>
            </Reveal>
            <Reveal from="up" delay={220}>
            <ul className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3">
              {[
                "PROFESSIONAL UX/UI & CMS DESIGNER",
                "BASED IN BANGLADESH",
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
                href="/ShahidaRimu_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="ShahidaRimu_CV.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-primary bg-transparent px-6 py-3.5 text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:bg-primary/10 hover:text-primary"
              >
                Download Resume
                <Download className="size-4" />
              </a>
            </div>
            </Reveal>
            <dl className="mt-12 grid max-w-full grid-cols-3 gap-2 border-t border-border pt-8 sm:gap-4 xl:max-w-2xl xl:gap-6">
              {[
                { k: "10+", v: "Projects" },
                { k: "2026", v: "KAIST WFK trainee" },
                { k: "UX/UI & CMS", v: "Design & development" },
              ].map((s, i) => (
                <Reveal key={s.v} from="up" delay={420 + i * 100}>
                  <dt className="whitespace-nowrap font-display text-base leading-tight text-foreground xl:text-2xl">
                    {s.k}
                  </dt>
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
              <p className="font-display text-sm">Figma → CMS</p>
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
          copy="I'm Shahida Akter Rimu, a UI/UX & CMS Designer building intuitive, accessible digital experiences."
        />

        <div className="mx-auto grid w-[min(92%,1180px)] items-center gap-16 lg:grid-cols-2">
          <div className="space-y-6">
            <Reveal from="up">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm a UI/UX &amp; CMS Designer who believes in building digital experiences from
                scratch. Coming from a Computer Science background, I naturally look at design
                through both a creative and technical lens. I spend most of my time in Figma,
                wireframing, building rapid prototypes, and experimenting with parallax animations
                to make interfaces feel alive.
              </p>
            </Reveal>
          </div>

          <Reveal from="up" delay={200}>
            <div className="relative flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                {[
                  { label: "UI/UX Design", dot: "bg-primary" },
                  { label: "WordPress", dot: "bg-accent" },
                  { label: "Figma", dot: "bg-chart-3" },
                  { label: "React", dot: "bg-chart-2" },
                  { label: "Canva", dot: "bg-chart-5" },
                  { label: "HTML/CSS", dot: "bg-chart-4" },
                ].map((skill, i) => (
                <div
                  key={skill.label}
                  className={`flex items-center gap-3 rounded-full border border-border bg-card/60 px-6 py-3 shadow-lg shadow-primary/5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-primary/15 ${i % 2 === 1 ? "lg:translate-y-4" : i % 3 === 0 ? "lg:-translate-y-2" : ""}`}
                >
                  <span className={`size-2.5 rounded-full ${skill.dot}`} />
                  <span className="font-medium text-foreground">{skill.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mx-auto w-[min(92%,1180px)] pt-24">
          <Reveal from="up">
            <h3 className="text-center text-3xl">Education & experience</h3>
          </Reveal>

          <div className="relative mt-12 max-w-4xl">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent" />

            <div className="space-y-10">
              {timeline.map((t, i) => (
                <Reveal
                  key={t.title}
                  as="div"
                  from="up"
                  delay={i * 120}
                  className="relative"
                >
                  <div className="absolute left-4 top-6 z-10 size-3 -translate-x-1/2 rounded-full border-2 border-background bg-primary ring-4 ring-primary/25" />

                  <div className="group ml-10 rounded-2xl border border-border bg-card/70 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10">
                    <span className="inline-block rounded-md bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                      {t.period}
                    </span>
                    <h4 className="font-display mt-4 text-lg transition-colors group-hover:text-primary">
                      {t.title}
                    </h4>
                    <p className="text-sm font-medium text-foreground/80">{t.org}</p>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                      {t.copy}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="scroll-mt-28 py-20 md:py-24">
        <SectionHeader
          eyebrow="Highlights"
          title="Participations & Achievements"
          copy="A few milestones from competitions, programs, and collaborative challenges."
        />

        <div className="mx-auto w-[min(92%,1180px)]">
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Excellence Award Winner, 2026 Project Competition",
                description:
                  "Awarded during the 2026 WFK IT Online Training Program. Recognized as part of Batch 2 Team 7 for demonstrating the highest level of creativity, technical excellence, and innovation in the Final Project Competition.",
              },
              {
                title: "Finalist, DDIEXPO 2026",
                description:
                  "Showcased 'AutoTrace AI', ranking Top 9 among 250 teams and earning recognition from the UITS IQAC Innovation Hub.",
              },
              {
                title: "Finalist, Hult Prize at UITS",
                description:
                  "Competed with Team IQ Optional in the NextJobz innovation challenge.",
              },
              {
                title: "Semi-Finalist, Undergraduate Startup Challenge 2025",
                description:
                  "Reached the semi-finals in the startup competition hosted by the BRAC University Entrepreneurship Development Forum (BUEDF) with Team IQ Optional.",
              },
            ].map((a, i) => (
              <Reveal
                key={a.title}
                from="up"
                delay={i * 120}
                className="h-full"
              >
                <div className="group h-full rounded-2xl border border-border bg-card/70 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10">
                  <div className="flex items-start gap-4">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Trophy className="size-5" />
                    </span>
                    <div>
                      <h4 className="font-display text-lg transition-colors group-hover:text-primary">
                        {a.title}
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {a.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="scroll-mt-28 py-20 md:py-24">
        <SectionHeader
          eyebrow="Portfolio"
          title="Projects & case studies"
          action={<ProjectToggle expanded={showAllProjects} onToggle={() => setShowAllProjects((value) => !value)} />}
          copy="A selection of product and interface work — each with the problem, the approach and the design decisions behind it."
        />
        <div id="project-grid" className="mx-auto grid w-[min(92%,1180px)] items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
          {(showAllProjects ? projects : projects.slice(0, 3)).map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
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
            <div className="relative isolate overflow-hidden rounded-[2.5rem] border border-border/80 bg-card/40 p-8 shadow-2xl shadow-primary/10 backdrop-blur-2xl sm:p-12 lg:p-16">
              <div
                aria-hidden
                className="mesh-glow pointer-events-none absolute -inset-24 z-0 opacity-60"
              />
              <div aria-hidden className="dot-grid pointer-events-none absolute inset-0 z-0" />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-12 top-0 z-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute right-10 top-9 z-0 hidden animate-float lg:block"
              >
                <MousePointer2 className="size-5 -rotate-6 text-primary" />
                <span className="-mt-1 ml-4 inline-block rounded-lg rounded-tl-none bg-primary px-2.5 py-1 text-[11px] font-semibold text-primary-foreground">
                  Shahida
                </span>
              </div>

              <div className="relative z-10 flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-14">
                <div className="max-w-xl">
                  <span className="eyebrow text-primary">
                    <span className="size-1.5 rounded-full bg-primary" />
                    Next project
                  </span>
                  <h3 className="mt-5 text-[clamp(1.7rem,4vw,2.6rem)] leading-[1.08]">
                    Let's craft your next digital experience.
                  </h3>
                  <p className="mt-5 max-w-lg leading-relaxed text-muted-foreground">
                    From intuitive UI/UX to complete CMS solutions—I am ready to bring your vision
                    to life. Let's build something amazing together.
                  </p>
                </div>

                <div className="flex flex-col items-start gap-4 sm:items-center lg:items-end">
                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-2.5 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.03] hover:text-primary-foreground hover:shadow-xl hover:shadow-primary/50 hover:brightness-110"
                  >
                    Let's Talk Design
                    <Sparkles className="size-4 transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:rotate-12 group-hover:scale-110" />
                  </Link>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-[13px] text-muted-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
                  >
                    or email {contact.email}
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

    </>
  );
}
