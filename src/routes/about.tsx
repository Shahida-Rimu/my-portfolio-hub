import { createFileRoute } from "@tanstack/react-router";
import { Trophy } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Reveal } from "@/components/site/Reveal";
import { timeline } from "@/lib/portfolio-data";

const title = "About — Shahida Akter Rimu";
const description =
  "CSE graduate from UITS, passionate about design thinking, collaborative problem-solving and user-centered digital products.";

export const Route = createFileRoute("/about")({
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
  component: About,
});

function About() {
  return (
    <>
      <PageHeader
        eyebrow="About me"
        title="Design thinking, applied to real problems"
        copy="I'm Shahida Akter Rimu, a UI/UX & CMS Designer building intuitive, accessible digital experiences."
      />

      <section className="mx-auto w-[min(92%,1180px)] py-8">
        <Reveal from="up">
          <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">
            I'm a UI/UX &amp; CMS Designer who believes in building digital experiences from
            scratch. Coming from a Computer Science background, I naturally look at design through
            both a creative and technical lens. I spend most of my time in Figma, wireframing,
            building rapid prototypes, and experimenting with parallax animations to make
            interfaces feel alive.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <Reveal from="up" delay={150}>
            <p className="leading-relaxed text-muted-foreground">
              My work sits between design and engineering. I enjoy the research part — talking to
              people, mapping their journeys and finding where a product quietly frustrates them —
              as much as the craft of shaping a clean, accessible interface in Figma and then
              building it.
            </p>
          </Reveal>
          <Reveal from="up" delay={250}>
            <p className="leading-relaxed text-muted-foreground">
              I thrive in collaborative teams, where feedback moves fast and decisions are made
              together. Design thinking is my default process: understand, define, ideate,
              prototype and test, so every screen I ship is grounded in a real user need rather
              than a guess.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto w-[min(92%,1180px)] py-16 md:py-20">
        <SectionHeader eyebrow="Journey" title="Education & experience" />
        <div className="relative mt-6 max-w-4xl">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent" />

          <div className="space-y-10">
            {timeline.map((t, i) => (
              <Reveal key={t.title} as="div" from="up" delay={i * 120} className="relative">
                <div className="absolute left-4 top-6 z-10 size-3 -translate-x-1/2 rounded-full border-2 border-background bg-primary ring-4 ring-primary/25" />

                <div className="group ml-10 rounded-2xl border border-border bg-card/70 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10">
                  <span className="inline-block rounded-md bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                    {t.period}
                  </span>
                  <h3 className="font-display mt-4 text-lg transition-colors group-hover:text-primary">
                    {t.title}
                  </h3>
                  <p className="text-sm font-medium text-foreground/80">{t.org}</p>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {t.copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
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
              <Reveal key={a.title} from="up" delay={i * 120} className="h-full">
                <div className="group h-full rounded-2xl border border-border bg-card/70 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10">
                  <div className="flex items-start gap-4">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Trophy className="size-5" />
                    </span>
                    <div>
                      <h3 className="font-display text-lg transition-colors group-hover:text-primary">
                        {a.title}
                      </h3>
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
    </>
  );
}
