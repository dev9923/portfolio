"use client";

import { useEffect, useState } from "react";

export type Capability = "pending" | "none" | "low" | "high";

function hasWebGL(): boolean {
  try {
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl2") ??
      (canvas.getContext("webgl") as WebGLRenderingContext | null);
    if (!gl) return false;
    gl.getExtension("WEBGL_lose_context")?.loseContext();
    return true;
  } catch {
    return false;
  }
}

/**
 * Browser-only probe. Runs in an effect, never during render — every API
 * below is undefined on the server.
 */
export function useRenderCapability(): Capability {
  const [capability, setCapability] = useState<Capability>("pending");

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const evaluate = () => {
      const nav = navigator as Navigator & {
        deviceMemory?: number;
        connection?: { saveData?: boolean };
      };

      if (motionQuery.matches || nav.connection?.saveData || !hasWebGL()) {
        setCapability("none");
        return;
      }

      const lowMemory = (nav.deviceMemory ?? 8) <= 4;
      const fewCores = (nav.hardwareConcurrency ?? 8) <= 4;
      const smallTouch =
        window.matchMedia("(pointer: coarse)").matches &&
        window.innerWidth < 768;

      setCapability(lowMemory || fewCores || smallTouch ? "low" : "high");
    };

    evaluate();
    motionQuery.addEventListener("change", evaluate);
    return () => motionQuery.removeEventListener("change", evaluate);
  }, []);

  return capability;
}
