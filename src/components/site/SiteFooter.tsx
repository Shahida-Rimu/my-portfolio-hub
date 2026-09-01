import { Link } from "@tanstack/react-router";
import { contact } from "@/lib/portfolio-data";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border">
      <div className="mx-auto grid w-[min(92%,1180px)] gap-8 py-12 md:grid-cols-3">
        <div>
          <p className="font-display text-lg font-semibold">Shahida Akter Rimu</p>
          <p className="mt-2 max-w-xs text-sm text-muted-foreground">
            UI/UX Designer & Frontend Developer building intuitive, accessible digital experiences.
          </p>
        </div>
        <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
          <Link to="/about" className="transition-colors hover:text-foreground">About</Link>
          <Link to="/portfolio" className="transition-colors hover:text-foreground">Portfolio</Link>
          <Link to="/services" className="transition-colors hover:text-foreground">Services</Link>
          <Link to="/contact" className="transition-colors hover:text-foreground">Contact</Link>
        </nav>
        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
          <a href={`mailto:${contact.email}`} className="transition-colors hover:text-foreground">
            {contact.email}
          </a>
          <a href="https://www.linkedin.com/in/shahida-akter-rimu-4b9033350" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">
            LinkedIn
          </a>
          <a href="https://www.behance.net/shahidarimu" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">
            Behance
          </a>
          <a href="https://github.com/Shahida-Rimu" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">
            GitHub
          </a>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Shahida Akter Rimu. All rights reserved.
      </div>
    </footer>
  );
}