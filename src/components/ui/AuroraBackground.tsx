import { cn } from "@/lib/utils";

/**
 * Pure-CSS aurora. Doubles as the WebGL fallback and as the ambient
 * backdrop for non-hero sections, so it is never an untested second path.
 */
export function AuroraBackground({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className,
      )}
    >
      <div className="aurora-static animate-aurora-drift absolute inset-[-25%]" />
      <div
        className="aurora-static animate-aurora-drift absolute inset-[-25%]"
        style={{ animationDelay: "-12s", animationDirection: "alternate-reverse" }}
      />
    </div>
  );
}
