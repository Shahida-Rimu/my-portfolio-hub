import { Eyebrow } from "./Eyebrow";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";

const services = [
  {
    title: "UX/UI Design",
    copy: "I design clean, modern, and brand-aligned interfaces that not only look stunning but guide visitors toward taking action.",
    includes: [
      "Figma design for all pages",
      "Visual hierarchy & branding",
      "Interactive prototypes",
      "Design system creation",
    ],
    image: work1,
  },
  {
    title: "Website Design",
    copy: "Understanding your users is the foundation of a successful website. I run deep research to uncover user needs and build a strategy that converts.",
    includes: [
      "Audience & competitor analysis",
      "Wireframing for conversion",
      "User personas & journeys",
      "Strategic UX planning",
    ],
    image: work2,
  },
];

export function Services() {
  return (
    <section id="services" className="mx-auto w-[min(92%,1360px)] py-24">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <Eyebrow>Services</Eyebrow>
          <h2 className="mt-4 text-[clamp(1.9rem,3.6vw,3rem)]">What I can do for you?</h2>
        </div>
        <a
          href="#contact"
          className="bg-ink px-7 py-4 font-display text-sm font-semibold uppercase tracking-wide text-ink-foreground transition-colors hover:bg-primary"
        >
          View all services
        </a>
      </div>

      <div className="mt-14 border-t border-border">
        {services.map((s) => (
          <div key={s.title} className="grid gap-10 border-b border-border py-14 lg:grid-cols-3">
            <div>
              <h3 className="text-2xl">{s.title}</h3>
              <p className="mt-5 text-muted-foreground">{s.copy}</p>
              <a
                href="#contact"
                className="mt-8 inline-block border border-border px-6 py-3 font-display text-sm font-semibold uppercase tracking-wide transition-colors hover:border-primary hover:text-primary"
              >
                See details
              </a>
            </div>
            <div>
              <h4 className="text-xl">What's includes:</h4>
              <ul className="mt-5 space-y-3">
                {s.includes.map((i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 inline-block size-2 shrink-0 bg-primary" />
                    <span className="font-display text-sm font-medium uppercase tracking-wide">
                      {i}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <img
              src={s.image}
              alt={s.title}
              loading="lazy"
              width={1024}
              height={768}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}