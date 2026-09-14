import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "font-mono text-[11px] uppercase tracking-[0.18em] text-accent-2",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function SectionHeader({
  id,
  eyebrow,
  title,
  lede,
  className,
}: {
  id: string;
  eyebrow: string;
  title: string;
  lede?: string;
  className?: string;
}) {
  return (
    <header className={cn("mb-12 sm:mb-16", className)}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2
        id={`${id}-heading`}
        className="mt-3 font-display text-display-sm text-fg"
      >
        {title}
      </h2>
      <div className="mt-5 h-px w-16 bg-gradient-to-r from-accent to-transparent" />
      {lede ? (
        <p className="mt-5 max-w-[58ch] text-[15px] leading-relaxed text-muted">
          {lede}
        </p>
      ) : null}
    </header>
  );
}
