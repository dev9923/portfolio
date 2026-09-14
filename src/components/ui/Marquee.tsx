"use client";

import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Marquee({
  items,
  duration = 40,
  reverse = false,
  className,
}: {
  items: readonly string[];
  duration?: number;
  reverse?: boolean;
  className?: string;
}) {
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <ul className={cn("flex flex-wrap gap-2", className)}>
        {items.map((item) => (
          <li
            key={item}
            className="rounded-md border border-line px-2.5 py-1 font-mono text-xs text-muted"
          >
            {item}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className={cn("marquee-mask overflow-hidden", className)}>
      <div
        className="animate-marquee flex w-max gap-3 hover:[animation-play-state:paused]"
        style={
          {
            "--marquee-duration": `${duration}s`,
            animationDirection: reverse ? "reverse" : "normal",
          } as React.CSSProperties
        }
      >
        {[0, 1].map((copy) => (
          <ul key={copy} aria-hidden={copy === 1} className="flex gap-3">
            {items.map((item) => (
              <li
                key={item}
                className="whitespace-nowrap rounded-md border border-line px-3 py-1.5 font-mono text-xs text-muted"
              >
                {item}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
