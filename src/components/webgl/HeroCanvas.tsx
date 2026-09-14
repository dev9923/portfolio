"use client";

import { Component, useEffect, useRef, useState, type ReactNode } from "react";
import dynamic from "next/dynamic";
import { useTheme } from "next-themes";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { useRenderCapability } from "@/hooks/use-render-capability";

// ssr:false is only legal inside a client component — page.tsx is a Server
// Component and would throw.
const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => <AuroraBackground />,
});

class SceneBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? this.props.fallback : this.props.children;
  }
}

export function HeroCanvas() {
  const capability = useRenderCapability();
  const { resolvedTheme } = useTheme();
  const [failed, setFailed] = useState(false);

  const pointer = useRef({ x: 0, y: 0 });
  const scroll = useRef(0);

  // `capability` stays "pending" until its effect runs post-hydration, which
  // doubles as the mounted guard for reading resolvedTheme.

  useEffect(() => {
    if (capability === "none" || capability === "pending") return;

    const onPointerMove = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    const onScroll = () => {
      scroll.current = Math.min(window.scrollY / window.innerHeight, 1);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, [capability]);

  const usesCanvas =
    !failed && (capability === "low" || capability === "high");

  if (!usesCanvas) return <AuroraBackground />;

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <SceneBoundary fallback={<AuroraBackground />}>
        <HeroScene
          isLight={resolvedTheme === "light"}
          maxDpr={capability === "high" ? 2 : 1.25}
          layerCount={capability === "high" ? 3 : 2}
          pointer={pointer}
          scroll={scroll}
          onContextLost={() => setFailed(true)}
        />
      </SceneBoundary>
    </div>
  );
}
