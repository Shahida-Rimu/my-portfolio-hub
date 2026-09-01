import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { to: "/", hash: undefined, label: "Home" },
  { to: "/", hash: "about", label: "About" },
  { to: "/", hash: "portfolio", label: "Portfolio" },
  { to: "/", hash: "services", label: "Services" },
  { to: "/contact", hash: undefined, label: "Contact" },
] as const;


export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 py-3 sm:px-4 sm:py-4">
      <div
        className={[
          "mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-4 py-3 transition-all duration-300 ease-in-out sm:px-6",
          scrolled
            ? "rounded-2xl border border-white/10 bg-background/70 shadow-2xl shadow-black/10 backdrop-blur-xl dark:border-white/10"
            : "rounded-2xl border border-transparent bg-transparent",
        ].join(" ")}
      >
        <Link to="/" className="font-display text-lg font-semibold tracking-tight">
          Shahida<span className="text-primary">.</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              hash={l.hash}
              activeOptions={{ exact: l.to === "/", includeHash: true }}
              activeProps={{ className: "text-primary" }}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>


        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            to="/contact"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 hover:shadow-lg hover:shadow-primary/25 sm:inline-block"
          >
            Let's talk
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="flex size-10 items-center justify-center rounded-full border border-border transition-colors hover:bg-accent md:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="mx-auto mt-2 w-full max-w-5xl rounded-2xl border border-white/10 bg-background/80 p-4 shadow-2xl shadow-black/10 backdrop-blur-xl md:hidden">
          <div className="flex flex-col">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                hash={l.hash}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: l.to === "/", includeHash: true }}
                activeProps={{ className: "text-primary" }}
                className="py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}

          </div>
        </nav>
      )}
    </header>
  );
}