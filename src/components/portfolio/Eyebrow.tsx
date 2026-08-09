export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="eyebrow text-muted-foreground">
      <span className="inline-block size-2 bg-primary" />
      {children}
    </span>
  );
}