import { Eyebrow } from "./Eyebrow";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";

const works = [
  {
    name: "Studio Photik",
    copy: "A conversion-focused portfolio for a photography studio, built end to end in Webflow.",
    image: work1,
  },
  {
    name: "Nightshift Labs",
    copy: "Brand refresh and marketing site for a late-night product studio.",
    image: work2,
  },
  {
    name: "Metric Desk",
    copy: "Analytics dashboard UX, design system and component library.",
    image: work3,
  },
];

export function Works() {
  return (
    <section id="recent-projects" className="mx-auto w-[min(92%,1360px)] py-24">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <Eyebrow>My recent projects</Eyebrow>
          <h2 className="mt-4 text-[clamp(1.9rem,3.6vw,3rem)]">My selected works</h2>
        </div>
        <a
          href="#contact"
          className="bg-ink px-7 py-4 font-display text-sm font-semibold uppercase tracking-wide text-ink-foreground transition-colors hover:bg-primary"
        >
          View all projects
        </a>
      </div>

      <div className="mt-14 grid gap-10 border-t border-border pt-14 md:grid-cols-3">
        {works.map((w) => (
          <article key={w.name} className="group">
            <div className="overflow-hidden">
              <img
                src={w.image}
                alt={w.name}
                loading="lazy"
                width={1024}
                height={768}
                className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="mt-6 text-xl">{w.name}</h3>
            <p className="mt-3 text-muted-foreground">{w.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}