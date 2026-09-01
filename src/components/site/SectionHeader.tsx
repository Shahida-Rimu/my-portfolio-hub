import { Reveal } from "@/components/site/Reveal";

export function SectionHeader({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <Reveal from="up">
      <header className="mx-auto w-[min(92%,1180px)] pb-10">
        <span className="eyebrow text-primary">
          <span className="inline-block size-1.5 rounded-full bg-primary" />
          {eyebrow}
        </span>
        <h2 className="mt-5 text-[clamp(1.9rem,4.4vw,3rem)] leading-[1.05]">{title}</h2>
        {copy && <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{copy}</p>}
      </header>
    </Reveal>
  );
}
