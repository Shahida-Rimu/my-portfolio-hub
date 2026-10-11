import { Reveal } from "@/components/site/Reveal";
import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  copy,
  action,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  action?: ReactNode;
}) {
  return (
    <Reveal from="up">
      <header className="mx-auto w-[min(92%,1180px)] pb-10">
        <span className="eyebrow text-primary">
          <span className="inline-block size-1.5 rounded-full bg-primary" />
          {eyebrow}
        </span>
        <div className="mt-5 flex flex-wrap items-center justify-between gap-5">
          <h2 className="text-[clamp(1.9rem,4.4vw,3rem)] leading-[1.05]">{title}</h2>
          {action}
        </div>
        {copy && <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{copy}</p>}
      </header>
    </Reveal>
  );
}
