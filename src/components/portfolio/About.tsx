import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { Eyebrow } from "./Eyebrow";

const stats = [
  { value: "37+", label: "Websites crafted to help professionals and businesses showcase their expertise and win more clients." },
  { value: "15+", label: "Countries where clients have successfully launched with our designs." },
  { value: "95%", label: "Client satisfaction rate — delivering designs that exceed expectations." },
  { value: "25+", label: "Helping clients expand their online presence and attract new opportunities monthly." },
];

const socials = [Facebook, Linkedin, Instagram, Youtube];

export function About() {
  return (
    <section id="about" className="mx-auto w-[min(92%,1360px)] py-24">
      <div className="grid gap-14 md:grid-cols-2">
        <div>
          <Eyebrow>About me</Eyebrow>
          <h2 className="mt-6 text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.05]">
            The ultimate UX/UI design &amp; Webflow portfolio experience
          </h2>
          <div className="mt-10">
            <Eyebrow>Social media</Eyebrow>
            <div className="mt-4 flex gap-3">
              {socials.map((Icon, i) => (
                <a
                  key={i}
                  href="#contact"
                  aria-label="Social profile"
                  className="flex size-12 items-center justify-center bg-ink text-ink-foreground transition-colors hover:bg-primary"
                >
                  <Icon className="size-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div>
          <Eyebrow>10+ years of UX/UI design &amp; Webflow expertise</Eyebrow>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            I'm Shadhin Shomen, a UX/UI Designer and Webflow Developer passionate about creating
            digital experiences that truly connect with people. Over the past 10+ years, I've
            specialized in designing user-friendly interfaces and building high-performing
            websites. My goal is simple: craft designs that not only look great but also deliver
            measurable results for my clients.
          </p>
          <a
            href="#recent-projects"
            className="mt-8 inline-block bg-ink px-7 py-4 font-display text-sm font-semibold uppercase tracking-wide text-ink-foreground transition-colors hover:bg-primary"
          >
            More about me
          </a>
        </div>
      </div>

      <div className="mt-20">
        <Eyebrow>My expertise in numbers</Eyebrow>
        <div className="mt-6 grid border border-border sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.value} className="border-border p-8 not-last:border-b sm:border-r sm:last:border-r-0 lg:border-b-0">
              <p className="font-display text-5xl font-bold">{s.value}</p>
              <p className="mt-4 text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}