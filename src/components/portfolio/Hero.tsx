import heroPortrait from "@/assets/hero-portrait.jpg";

export function Hero() {
  return (
    <section id="home" className="bg-ink pt-10 text-ink-foreground">
      <div className="mx-auto grid w-[min(92%,1360px)] items-end gap-10 pb-8 md:grid-cols-2">
        <div className="pb-12">
          <p className="eyebrow text-primary">
            <span className="inline-block size-2 bg-primary" />
            UX/UI Designer &amp; Webflow Developer
          </p>
          <h1 className="mt-6 text-[clamp(2.6rem,7vw,5.5rem)] leading-[0.92]">
            I build websites
            <br />
            that win clients
          </h1>
          <p className="mt-6 max-w-lg text-lg text-ink-foreground/70">
            10+ years designing clean interfaces and high-performing websites for professionals and
            growing businesses.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="bg-primary px-7 py-4 font-display text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-opacity hover:opacity-90"
            >
              Book a free call
            </a>
            <a
              href="#recent-projects"
              className="border border-ink-foreground/30 px-7 py-4 font-display text-sm font-semibold uppercase tracking-wide transition-colors hover:border-primary hover:text-primary"
            >
              View my work
            </a>
          </div>
        </div>
        <div className="relative">
          <img
            src={heroPortrait}
            alt="Portrait of Shadhin Shomen, UX/UI designer"
            width={1024}
            height={1280}
            className="w-full object-cover grayscale md:max-h-[620px]"
          />
        </div>
      </div>
    </section>
  );
}