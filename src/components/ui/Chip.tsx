import { cn } from "@/lib/utils";

export function Chip({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-line px-2 py-1 font-mono text-[11px] text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function GradientText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  // pb prevents background-clip:text from shearing descenders.
  return (
    <span className={cn("text-aurora inline-block pb-[0.12em]", className)}>
      {children}
    </span>
  );
}
