import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { Awards } from "@/components/site/Awards";
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
        copy="I'm Shahida Akter Rimu, a Computer Science & Engineering graduate from the University of Information Technology and Sciences."
      />

      <section className="mx-auto grid w-[min(92%,1180px)] gap-10 py-8 md:grid-cols-2">
        <Reveal from="up">
        <p className="text-lg leading-relaxed text-muted-foreground">
          My work sits between design and engineering. I enjoy the research part — talking to people,
          mapping their journeys and finding where a product quietly frustrates them — as much as the
          craft of shaping a clean, accessible interface in Figma and then building it.
        </p>
        </Reveal>
        <Reveal from="up" delay={150}>
        <p className="text-lg leading-relaxed text-muted-foreground">
          I thrive in collaborative teams, where feedback moves fast and decisions are made together.
          Design thinking is my default process: understand, define, ideate, prototype and test, so
          every screen I ship is grounded in a real user need rather than a guess.
        </p>
        </Reveal>
      </section>

      <section className="mx-auto w-[min(92%,1180px)] py-12">
        <Reveal from="up">
          <h2 className="text-3xl">Education & experience</h2>
        </Reveal>
        <ol className="mt-10 border-l border-border">
          {timeline.map((t, i) => (
            <Reveal key={t.title} as="li" from="up" delay={i * 150} className="relative block pb-10 pl-8 last:pb-0">
              <span className="absolute -left-[5px] top-2 size-2.5 rounded-full bg-primary" />
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                {t.period}
              </p>
              <h3 className="mt-2 text-lg">{t.title}</h3>
              <p className="text-sm font-medium text-foreground/80">{t.org}</p>
              <p className="mt-2 max-w-2xl text-muted-foreground">{t.copy}</p>
            </Reveal>
          ))}
        </ol>
      </section>

      <Awards />
    </>
  );
}