const links = ["Home", "Services", "About", "Recent Projects", "Insights", "Contact"];

export function SiteHeader() {
  return (
    <header className="sticky top-4 z-50 mx-auto w-[min(96%,1360px)] rounded-xl bg-ink px-6 py-4 text-ink-foreground shadow-lg md:px-8">
      <div className="flex items-center justify-between gap-6">
        <a href="#top" className="font-display text-xl font-bold tracking-tight uppercase">
          Shadhin Shomen
        </a>
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l, i) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(/\s+/g, "-")}`}
              className={`font-display text-sm font-medium uppercase tracking-wide transition-colors hover:text-primary ${
                i === 0 ? "text-primary" : ""
              }`}
            >
              {l}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden shrink-0 bg-primary px-5 py-3 font-display text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-opacity hover:opacity-90 sm:inline-block"
        >
          Book a free call
        </a>
      </div>
    </header>
  );
}