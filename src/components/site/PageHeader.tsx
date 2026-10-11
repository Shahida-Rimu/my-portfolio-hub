import type { ReactNode } from "react";

export function PageHeader({
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
    <header className="fade-up mx-auto w-[min(92%,1180px)] pt-16 pb-10">
      <span className="eyebrow text-primary">
        <span className="inline-block size-1.5 rounded-full bg-primary" />
        {eyebrow}
      </span>
      <div className="mt-5 flex flex-wrap items-center justify-between gap-5">
        <h1 className="text-[clamp(2.1rem,5vw,3.4rem)] leading-[1.05]">{title}</h1>
        {action}
      </div>
      {copy && <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{copy}</p>}
    </header>
  );
}