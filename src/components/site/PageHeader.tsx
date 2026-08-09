export function PageHeader({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <header className="fade-up mx-auto w-[min(92%,1180px)] pt-16 pb-10">
      <span className="eyebrow text-primary">
        <span className="inline-block size-1.5 rounded-full bg-primary" />
        {eyebrow}
      </span>
      <h1 className="mt-5 text-[clamp(2.1rem,5vw,3.4rem)] leading-[1.05]">{title}</h1>
      {copy && <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{copy}</p>}
    </header>
  );
}