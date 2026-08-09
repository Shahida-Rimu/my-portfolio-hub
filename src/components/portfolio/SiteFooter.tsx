const links = ["Home", "Services", "About", "Recent Projects", "Insights", "Contact"];

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-ink text-ink-foreground">
      <div className="mx-auto w-[min(92%,1360px)] py-20">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl md:text-4xl">Stay connected with me</h2>
            <p className="mt-4 max-w-md text-ink-foreground/70">
              Stay updated with my latest projects, design tips, and free resources, straight to
              your inbox.
            </p>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl">Subscribe newsletter</h2>
            <form
              className="mt-6 flex flex-col gap-3 sm:flex-row"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                required
                placeholder="Enter Your Email"
                aria-label="Email address"
                className="w-full bg-background px-5 py-4 text-foreground outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="shrink-0 bg-primary px-7 py-4 font-display text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-opacity hover:opacity-90"
              >
                Subscribe now
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 border-t border-ink-foreground/15 pt-10">
          <p className="font-display text-[clamp(2.5rem,11vw,9rem)] leading-[0.85] font-bold">
            Shadhin Shomen
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2 md:items-center">
          <p className="max-w-md text-ink-foreground/70">
            Designing digital experiences that look sharp, load fast, and turn visitors into
            clients.
          </p>
          <nav className="flex flex-wrap gap-x-6 gap-y-3 md:justify-end">
            {links.map((l, i) => (
              <a
                key={l}
                href={`#${l.toLowerCase().replace(/\s+/g, "-")}`}
                className={`font-display text-sm font-medium uppercase tracking-wide hover:text-primary ${
                  i === 0 ? "text-primary" : ""
                }`}
              >
                {l}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-wrap justify-between gap-4 border-t border-ink-foreground/15 pt-6 text-sm text-ink-foreground/60">
          <p>© 2026, Shadhin Shomen | All Rights Reserved</p>
          <p>Terms &amp; Conditions | Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
}