import type { AccentKey } from "@/data/types";

/**
 * Full literal class strings — Tailwind v4 has no `content` config and cannot
 * see constructed names like `from-${key}-500`, so these must never be built
 * by interpolation.
 */
export interface Accent {
  gradient: string;
  text: string;
  tint: string;
  dot: string;
}

export const accents: Record<AccentKey, Accent> = {
  indigo: {
    gradient: "from-indigo-500 to-violet-500",
    text: "text-indigo-600 dark:text-indigo-300",
    tint: "bg-indigo-500/10",
    dot: "bg-indigo-500",
  },
  cyan: {
    gradient: "from-cyan-500 to-sky-500",
    text: "text-cyan-700 dark:text-cyan-300",
    tint: "bg-cyan-500/10",
    dot: "bg-cyan-500",
  },
  violet: {
    gradient: "from-violet-500 to-fuchsia-500",
    text: "text-violet-600 dark:text-violet-300",
    tint: "bg-violet-500/10",
    dot: "bg-violet-500",
  },
  emerald: {
    gradient: "from-emerald-500 to-teal-500",
    text: "text-emerald-700 dark:text-emerald-300",
    tint: "bg-emerald-500/10",
    dot: "bg-emerald-500",
  },
  amber: {
    gradient: "from-amber-500 to-orange-500",
    text: "text-amber-700 dark:text-amber-300",
    tint: "bg-amber-500/10",
    dot: "bg-amber-500",
  },
  rose: {
    gradient: "from-rose-500 to-pink-500",
    text: "text-rose-600 dark:text-rose-300",
    tint: "bg-rose-500/10",
    dot: "bg-rose-500",
  },
};
