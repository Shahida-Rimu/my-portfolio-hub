import type { ReactNode } from "react";

type Tool = { name: string; icon: ReactNode };

const tools: Tool[] = [
  {
    name: "Figma",
    icon: (
      <svg viewBox="0 0 38 57" className="size-full" aria-hidden>
        <path fill="#1ABCFE" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" />
        <path fill="#0ACF83" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 0 1-19 0z" />
        <path fill="#FF7262" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" />
        <path fill="#F24E1E" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" />
        <path fill="#A259FF" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" />
      </svg>
    ),
  },
  {
    name: "React.js",
    icon: (
      <svg viewBox="-11.5 -10.23 23 20.46" className="size-full" aria-hidden>
        <circle r="2.05" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },
  {
    name: "HTML5",
    icon: (
      <svg viewBox="0 0 512 512" className="size-full" aria-hidden>
        <path fill="#E44D26" d="M71 460 30 0h452l-41 460-185 52z" />
        <path fill="#F16529" d="M256 472V41h185l-35 391z" />
        <path fill="#EBEBEB" d="M256 208h-83l-6-64h89V82H97l17 190h142zm0 166-1 1-70-19-4-50h-62l9 98 127 35z" />
        <path fill="#fff" d="M255 208v64h77l-7 81-70 19v66l127-35 21-195zm0-126v62h150l5-62z" />
      </svg>
    ),
  },
  {
    name: "CSS3",
    icon: (
      <svg viewBox="0 0 512 512" className="size-full" aria-hidden>
        <path fill="#1572B6" d="M71 460 30 0h452l-41 460-185 52z" />
        <path fill="#33A9DC" d="M256 472V41h185l-35 391z" />
        <path fill="#fff" d="M256 208h75l5-58H256V88h150l-1 16-15 163H256z" />
        <path fill="#EBEBEB" d="m256 355-1 1-70-19-4-50h-62l9 98 127 35zM251 208h-78l6 62h72zM251 88H97l6 62h148z" />
        <path fill="#fff" d="m256 270 65-18-7 76-58 16v66l127-35 1-11 15-166H256z" />
      </svg>
    ),
  },
  {
    name: "Canva",
    icon: (
      <svg viewBox="0 0 48 48" className="size-full" aria-hidden>
        <circle cx="24" cy="24" r="24" fill="#00C4CC" />
        <path
          fill="#fff"
          d="M31 30.6c-2 2.6-5 4.4-8.4 4.4-5.4 0-9.1-4.1-9.1-10 0-6.9 4.7-12 10.4-12 3.5 0 5.9 1.9 5.9 4.4 0 2-1.2 3.4-2.7 3.4-1 0-1.8-.6-1.8-1.6 0-1.3 1.2-1.5 1.2-2.6 0-.8-.8-1.3-1.8-1.3-3.3 0-6.1 4.2-6.1 9 0 3.6 1.8 6 4.7 6 2.4 0 4.6-1.5 6.2-3.7z"
        />
      </svg>
    ),
  },
  {
    name: "Illustrator",
    icon: (
      <svg viewBox="0 0 48 48" className="size-full" aria-hidden>
        <rect x="2" y="2" width="44" height="44" rx="9" fill="#300" />
        <rect x="2" y="2" width="44" height="44" rx="9" fill="#FF9A00" fillOpacity=".16" />
        <rect x="2" y="2" width="44" height="44" rx="9" fill="none" stroke="#FF9A00" strokeWidth="2" />
        <path fill="#FF9A00" d="M22.4 30.6h-6l-1.3 4h-3.6l6.2-18h3.6l6.2 18h-3.8zm-.9-3-2.1-6.7-2.1 6.7zM33 34.6h-3.4V20.2H33zm-1.7-16.3a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
      </svg>
    ),
  },
  {
    name: "Photoshop",
    icon: (
      <svg viewBox="0 0 48 48" className="size-full" aria-hidden>
        <rect x="2" y="2" width="44" height="44" rx="9" fill="#001E36" />
        <rect x="2" y="2" width="44" height="44" rx="9" fill="none" stroke="#31A8FF" strokeWidth="2" />
        <path
          fill="#31A8FF"
          d="M12.5 15.2c0-.2.1-.3.3-.3 1.9-.1 3.7-.1 5.4-.1 5 0 7.2 2.7 7.2 6.2 0 4.6-3.3 6.6-7.5 6.6-.7 0-1 0-1.4-.1v6c0 .2-.1.3-.3.3h-3.4c-.2 0-.3-.1-.3-.3zm4 8.8c.4 0 .8.1 1.4.1 2 0 3.4-1.1 3.4-3.1 0-1.9-1.1-2.9-3.2-2.9-.7 0-1.3 0-1.6.1zM35.6 23.4c-1.7-.7-2.3-1.1-2.3-1.7s.4-1 1.4-1c1.1 0 2.3.4 3.2.9.2.1.3 0 .3-.2v-2.9c0-.2-.1-.3-.2-.4-.9-.4-2-.7-3.4-.7-3.3 0-5.2 1.9-5.2 4.4 0 2.1 1.1 3.3 3.9 4.3 1.8.7 2.2 1.1 2.2 1.7 0 .7-.5 1.1-1.7 1.1-1.2 0-2.7-.5-3.7-1.1-.2-.1-.3 0-.3.2v3c0 .2.1.3.2.4 1 .5 2.3.8 3.8.8 3.4 0 5.4-1.7 5.4-4.5 0-2-1-3.3-3.6-4.3z"
        />
      </svg>
    ),
  },
];

function Row({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <ul
      aria-hidden={ariaHidden || undefined}
      className="flex shrink-0 items-center gap-12 pr-12 md:gap-16 md:pr-16"
    >
      {tools.map((t) => (
        <li key={t.name} className="group flex shrink-0 items-center gap-3">
          <span className="size-10 shrink-0 opacity-50 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 md:size-16">
            {t.icon}
          </span>
          <span className="whitespace-nowrap text-sm font-semibold text-muted-foreground transition-colors duration-300 group-hover:text-foreground md:text-base">
            {t.name}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function TechMarquee() {
  return (
    <section className="border-y border-border bg-card/40 py-12 md:py-16">
      <div className="mx-auto w-[min(92%,1180px)]">
        <p className="eyebrow text-muted-foreground">Tech stack &amp; tools</p>
      </div>
      <div className="marquee-mask group/marquee relative mt-8 overflow-hidden">
        <div className="flex w-max animate-marquee items-center group-hover/marquee:[animation-play-state:paused] motion-reduce:animate-none">
          <Row />
          <Row ariaHidden />
        </div>
      </div>
    </section>
  );
}
