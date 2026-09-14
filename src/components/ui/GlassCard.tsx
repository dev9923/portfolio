"use client";

import { useCallback, useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";

const SPRING = { stiffness: 150, damping: 18, mass: 0.6 };

export function GlassCard({
  children,
  tilt = 0,
  spotlight = false,
  className,
  innerClassName,
}: {
  children: React.ReactNode;
  /** Max rotation in degrees. 0 disables tilt. */
  tilt?: number;
  spotlight?: boolean;
  className?: string;
  innerClassName?: string;
}) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const rect = useRef<DOMRect | null>(null);

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const sx = useSpring(px, SPRING);
  const sy = useSpring(py, SPRING);
  const rotateX = useTransform(sy, [0, 1], [tilt, -tilt]);
  const rotateY = useTransform(sx, [0, 1], [-tilt, tilt]);

  const enabled = tilt > 0 && !reduced;

  const onPointerEnter = useCallback((e: React.PointerEvent) => {
    if (e.pointerType === "touch") return;
    rect.current = ref.current?.getBoundingClientRect() ?? null;
  }, []);

  const onPointerMove = useCallback(
    (e: React.PointerEvent) => {
      const r = rect.current;
      if (!r) return;
      const nx = (e.clientX - r.left) / r.width;
      const ny = (e.clientY - r.top) / r.height;
      px.set(nx);
      py.set(ny);
      if (spotlight && ref.current) {
        ref.current.style.setProperty("--mx", `${nx * 100}%`);
        ref.current.style.setProperty("--my", `${ny * 100}%`);
      }
    },
    [px, py, spotlight],
  );

  const onPointerLeave = useCallback(() => {
    px.set(0.5);
    py.set(0.5);
    rect.current = null;
  }, [px, py]);

  const handlers = enabled
    ? { onPointerEnter, onPointerMove, onPointerLeave }
    : {};

  return (
    <div
      className={cn("h-full", className)}
      style={enabled ? { perspective: "var(--perspective-card)" } : undefined}
    >
      <motion.div
        ref={ref}
        {...handlers}
        style={
          enabled
            ? { rotateX, rotateY, transformStyle: "preserve-3d" }
            : undefined
        }
        className={cn(
          "relative h-full rounded-xl transition-shadow duration-500",
          spotlight && "spotlight",
          tilt > 0 && "hover:shadow-glow",
        )}
      >
        {/* backdrop-filter lives on its own layer — Safari flickers when it
            shares an element with preserve-3d + border-radius. */}
        <div
          className={cn(
            "glass gradient-ring h-full overflow-hidden rounded-xl",
            innerClassName,
          )}
        >
          {children}
        </div>
      </motion.div>
    </div>
  );
}
