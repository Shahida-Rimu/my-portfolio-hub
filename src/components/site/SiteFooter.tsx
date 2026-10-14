import { Link } from "@tanstack/react-router";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { contact } from "@/lib/portfolio-data";

const navLinks = [
  { to: "/about", label: "About" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

function BehanceIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M16.969 16.927a2.561 2.561 0 0 0 1.901.677 2.501 2.501 0 0 0 1.531-.475c.362-.235.636-.584.779-.99h2.585a5.091 5.091 0 0 1-1.9 2.896 5.292 5.292 0 0 1-3.091.88 5.839 5.839 0 0 1-2.284-.433 4.871 4.871 0 0 1-1.723-1.211 5.657 5.657 0 0 1-1.08-1.874 7.057 7.057 0 0 1-.383-2.393c-.005-.8.129-1.595.396-2.349a5.313 5.313 0 0 1 5.088-3.604 4.87 4.87 0 0 1 2.376.563c.661.362 1.231.87 1.668 1.485a6.2 6.2 0 0 1 .943 2.133c.194.821.263 1.666.205 2.508h-7.699c-.063.79.184 1.574.688 2.187ZM6.947 4.084a8.065 8.065 0 0 1 1.928.198 4.29 4.29 0 0 1 1.49.638c.418.303.748.711.958 1.182.241.579.357 1.203.341 1.83a3.506 3.506 0 0 1-.506 1.961 3.726 3.726 0 0 1-1.503 1.287 3.588 3.588 0 0 1 2.027 1.437c.464.747.697 1.615.67 2.494a4.593 4.593 0 0 1-.423 2.032 3.945 3.945 0 0 1-1.163 1.413 5.114 5.114 0 0 1-1.683.807 7.135 7.135 0 0 1-1.928.259H0V4.084h6.947Zm-.235 12.9c.308.004.616-.029.916-.099a2.18 2.18 0 0 0 .766-.332c.228-.158.411-.371.534-.619.142-.317.208-.663.191-1.009a2.08 2.08 0 0 0-.642-1.715 2.618 2.618 0 0 0-1.696-.505h-3.54v4.279h3.471Zm13.635-5.967a2.13 2.13 0 0 0-1.654-.619 2.336 2.336 0 0 0-1.163.259 2.474 2.474 0 0 0-.738.62 2.359 2.359 0 0 0-.396.792c-.074.239-.12.485-.137.734h4.769a3.239 3.239 0 0 0-.679-1.785l-.002-.001Zm-13.813-.648a2.254 2.254 0 0 0 1.423-.433c.399-.355.607-.88.56-1.413a1.916 1.916 0 0 0-.178-.891 1.298 1.298 0 0 0-.495-.533 1.851 1.851 0 0 0-.711-.274 3.966 3.966 0 0 0-.835-.073H3.241v3.631h3.293v-.014ZM21.62 5.122h-5.976v1.527h5.976V5.122Z" />
    </svg>
  );
}

const socials = [
  {
    label: "Email Shahida Akter Rimu",
    href: `mailto:${contact.email}`,
    Icon: Mail,
  },
  {
    label: "LinkedIn profile",
    href: "https://www.linkedin.com/in/shahida-akter-rimu-4b9033350/",
    Icon: Linkedin,
  },
  {
    label: "Behance portfolio",
    href: "https://www.behance.net/shahidarimu",
    Icon: BehanceIcon,
  },
  {
    label: "GitHub profile",
    href: "https://github.com/Shahida-Rimu",
    Icon: Github,
  },
];

export function SiteFooter() {
  return (
    <footer className="relative isolate mt-28 overflow-hidden sm:mt-32">
      {/* delicate gradient divider */}
      <div aria-hidden className="relative h-px w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/45 to-transparent" />
      </div>

      {/* soft ambient glow + faint canvas grid */}
      <div aria-hidden className="mesh-glow pointer-events-none absolute inset-x-0 -bottom-56 -z-10 h-96 opacity-25" />
      <div aria-hidden className="dot-grid pointer-events-none absolute inset-0 -z-10" />

      <div className="mx-auto w-[min(92%,1180px)] px-1 py-16 sm:py-20">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          {/* Branding & status */}
          <div className="md:col-span-6 lg:col-span-5">
            <Link
              to="/"
              className="bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text font-display text-[1.7rem] font-semibold tracking-tight text-transparent transition-opacity duration-300 hover:opacity-80 sm:text-[2rem]"
            >
              Shahida Akter Rimu
            </Link>
            <p className="mt-4 max-w-sm text-[0.95rem] leading-relaxed text-muted-foreground">
              UI/UX &amp; CMS Designer building intuitive, accessible digital experiences —
              from the first Figma wireframe to a site that runs itself.
            </p>
            <div className="mt-7">
              <span className="inline-flex items-center gap-3 rounded-full border border-success/25 bg-success/10 px-4 py-2 text-xs font-semibold tracking-wide text-success">
                <span className="relative flex size-2 items-center justify-center">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-60 motion-reduce:animate-none" />
                  <span className="status-dot relative inline-flex size-2 rounded-full" />
                </span>
                Available for work
              </span>
            </div>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer" className="md:col-span-3 lg:col-span-3">
            <h2 className="eyebrow text-muted-foreground/70">Explore</h2>
            <ul className="mt-5 flex flex-col items-start gap-3.5">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="relative inline-flex text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social icons */}
          <div className="md:col-span-3 lg:col-span-4">
            <h2 className="eyebrow text-muted-foreground/70">Elsewhere</h2>
            <ul className="mt-5 flex items-center gap-3">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    title={label}
                    {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group grid size-11 place-items-center rounded-full border border-border/70 bg-card/50 text-muted-foreground backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/45 hover:bg-primary/10 hover:text-primary hover:shadow-lg hover:shadow-primary/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    <Icon className="size-[18px] transition-transform duration-300 ease-out group-hover:scale-110" />
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={`mailto:${contact.email}`}
              className="mt-5 inline-flex w-fit text-sm text-muted-foreground underline-offset-4 transition-colors duration-300 hover:text-primary hover:underline"
            >
              {contact.email}
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col-reverse items-center justify-between gap-5 border-t border-border/60 pt-7 sm:flex-row">
          <p className="text-xs text-muted-foreground/80">
            © {new Date().getFullYear()} Shahida Akter Rimu. All rights reserved.
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group inline-flex items-center gap-2 text-xs font-medium text-muted-foreground transition-colors duration-300 hover:text-primary"
          >
            Back to top
            <span className="grid size-7 place-items-center rounded-full border border-border/70 transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:border-primary/45 group-hover:bg-primary/10">
              <ArrowUp className="size-3.5 transition-transform duration-300 group-hover:-translate-y-px" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
