import { useState } from "react";
import { ExternalLink, Rocket } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Reveal } from "@/components/site/Reveal";
import kaist from "@/assets/award-kaist.png.asset.json";
import ddiexpo from "@/assets/award-ddiexpo.jpg.asset.json";
import hult from "@/assets/award-hult.jpg.asset.json";

type Award = {
  title: string;
  subtitle: string;
  image?: string;
  link?: { label: string; href: string };
};

const awards: Award[] = [
  {
    title: "Excellence Award Winner",
    subtitle: "2026 WFK IT Online Training Program by KAIST",
    image: kaist.url,
  },
  {
    title: "Finalist, DDIEXPO 2026",
    subtitle: "Showcased AI-powered project 'AutoTrace AI'",
    image: ddiexpo.url,
  },
  {
    title: "Finalist, Hult Prize at UITS",
    subtitle: "Competed in the NextJobz innovation challenge",
    image: hult.url,
  },
  {
    title: "Semi-Finalist",
    subtitle: "Undergraduate Startup Challenge 2025 hosted by BRAC University",
    link: { label: "View Certificate", href: "https://example.com/certificate" },
  },
];

export function Awards() {
  const [active, setActive] = useState<Award | null>(null);

  return (
    <section className="mx-auto w-[min(92%,1180px)] py-12">
      <Reveal from="up">
        <h2 className="text-3xl">Awards & achievements</h2>
      </Reveal>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        {awards.map((a, i) => (
          <Reveal key={a.title} from="up" delay={i * 120}>
            <article className="group h-full overflow-hidden rounded-2xl border border-border bg-card/60 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10">
              {a.image ? (
                <button
                  type="button"
                  onClick={() => setActive(a)}
                  className="block w-full overflow-hidden"
                  aria-label={`View ${a.title} photo`}
                >
                  <img
                    src={a.image}
                    alt={a.title}
                    loading="lazy"
                    className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </button>
              ) : (
                <div className="flex aspect-video w-full items-center justify-center bg-foreground/5">
                  <Rocket className="size-10 text-primary" strokeWidth={1.5} />
                </div>
              )}

              <div className="p-6">
                <h3 className="text-lg">{a.title}</h3>
                <p className="mt-2 text-muted-foreground">{a.subtitle}</p>
                {a.link && (
                  <a
                    href={a.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-opacity hover:opacity-75"
                  >
                    {a.link.label}
                    <ExternalLink className="size-3.5" />
                  </a>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Dialog open={!!active} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="max-w-4xl border-border bg-card/95 p-2 backdrop-blur">
          <DialogTitle className="sr-only">{active?.title ?? "Award photo"}</DialogTitle>
          {active?.image && (
            <img src={active.image} alt={active.title} className="w-full rounded-lg object-contain" />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
