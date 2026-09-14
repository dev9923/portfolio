"use client";

import { useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { auroraFragment, auroraVertex } from "./aurora.shader";

const LAYERS = [
  {
    z: -3,
    scale: 2.2,
    amp: 0.55,
    freq: 1.6,
    seed: 0,
    bandCenter: 0.52,
    bandWidth: 0.34,
    opacity: 0.95,
  },
  {
    z: -6.5,
    scale: 3.2,
    amp: 0.85,
    freq: 1.1,
    seed: 11.3,
    bandCenter: 0.46,
    bandWidth: 0.4,
    opacity: 0.62,
  },
  {
    z: -10.5,
    scale: 4.6,
    amp: 1.2,
    freq: 0.8,
    seed: 23.7,
    bandCenter: 0.58,
    bandWidth: 0.46,
    opacity: 0.38,
  },
] as const;

const DARK = { a: "#5b5bf0", b: "#3fdbe0", c: "#a04ff5" };
const LIGHT = { a: "#4f46e5", b: "#2a8fa8", c: "#8b5cf6" };

type Pointer = { x: number; y: number };

type Uniforms = {
  uTime: { value: number };
  uAmp: { value: number };
  uFreq: { value: number };
  uSeed: { value: number };
  uColorA: { value: THREE.Color };
  uColorB: { value: THREE.Color };
  uColorC: { value: THREE.Color };
  uPointer: { value: THREE.Vector2 };
  uOpacity: { value: number };
  uBandCenter: { value: number };
  uBandWidth: { value: number };
  uLightMode: { value: number };
};

function Curtain({
  layer,
  isLight,
  pointer,
  scroll,
  aspect,
}: {
  layer: (typeof LAYERS)[number];
  isLight: boolean;
  pointer: React.RefObject<Pointer>;
  scroll: React.RefObject<number>;
  aspect: number;
}) {
  const material = useRef<THREE.ShaderMaterial>(null);
  const current = useRef<Pointer>({ x: 0, y: 0 });

  // Held in a ref, not useMemo: these are mutated every frame, and
  // recreating the object would force a shader recompile.
  const uniformsRef = useRef<Uniforms | null>(null);
  uniformsRef.current ??= {
    uTime: { value: layer.seed },
    uAmp: { value: layer.amp },
    uFreq: { value: layer.freq },
    uSeed: { value: layer.seed },
    uColorA: { value: new THREE.Color(DARK.a) },
    uColorB: { value: new THREE.Color(DARK.b) },
    uColorC: { value: new THREE.Color(DARK.c) },
    uPointer: { value: new THREE.Vector2(0, 0) },
    uOpacity: { value: layer.opacity * 0.85 },
    uBandCenter: { value: layer.bandCenter },
    uBandWidth: { value: layer.bandWidth },
    uLightMode: { value: 0 },
  };
  const uniforms = uniformsRef.current;

  useEffect(() => {
    const palette = isLight ? LIGHT : DARK;
    uniforms.uColorA.value.set(palette.a);
    uniforms.uColorB.value.set(palette.b);
    uniforms.uColorC.value.set(palette.c);
    if (material.current) {
      material.current.blending = isLight
        ? THREE.NormalBlending
        : THREE.AdditiveBlending;
      material.current.needsUpdate = true;
    }
  }, [isLight, uniforms]);

  useFrame((_, delta) => {
    const dt = Math.min(delta, 0.05);
    uniforms.uTime.value += dt;

    const target = pointer.current ?? { x: 0, y: 0 };
    const k = 1 - Math.exp(-4 * dt);
    current.current.x += (target.x - current.current.x) * k;
    current.current.y += (target.y - current.current.y) * k;
    uniforms.uPointer.value.set(current.current.x, current.current.y);

    // ease the theme-driven alpha so toggling doesn't pop
    const targetOpacity = layer.opacity * (isLight ? 0.3 : 0.85);
    uniforms.uOpacity.value +=
      (targetOpacity - uniforms.uOpacity.value) * (1 - Math.exp(-6 * dt));
    uniforms.uLightMode.value +=
      ((isLight ? 1 : 0) - uniforms.uLightMode.value) * (1 - Math.exp(-6 * dt));

    void scroll;
  });

  return (
    <mesh position-z={layer.z} scale={[layer.scale * aspect, layer.scale, 1]}>
      <planeGeometry args={[1, 1, 48, 48]} />
      <shaderMaterial
        ref={material}
        vertexShader={auroraVertex}
        fragmentShader={auroraFragment}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        depthTest={false}
        side={THREE.DoubleSide}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}

function CameraRig({
  pointer,
  scroll,
}: {
  pointer: React.RefObject<Pointer>;
  scroll: React.RefObject<number>;
}) {
  const current = useRef<Pointer>({ x: 0, y: 0 });

  useFrame((state, delta) => {
    const dt = Math.min(delta, 0.05);
    const target = pointer.current ?? { x: 0, y: 0 };
    const k = 1 - Math.exp(-3 * dt);
    current.current.x += (target.x - current.current.x) * k;
    current.current.y += (target.y - current.current.y) * k;

    const s = scroll.current ?? 0;
    state.camera.position.x = current.current.x * 0.75;
    state.camera.position.y = current.current.y * 0.45 - s * 1.4;
    state.camera.position.z = 5 - s * 1.1;
    state.camera.lookAt(0, -s * 0.7, 0);
  });

  return null;
}

/** Pauses the render loop offscreen and in background tabs. */
function FrameGate() {
  const setFrameloop = useThree((s) => s.setFrameloop);
  const domElement = useThree((s) => s.gl.domElement);

  useEffect(() => {
    let visible = true;

    const apply = () => {
      setFrameloop(visible && !document.hidden ? "always" : "never");
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        apply();
      },
      { rootMargin: "200px" },
    );
    observer.observe(domElement);

    document.addEventListener("visibilitychange", apply);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", apply);
    };
  }, [setFrameloop, domElement]);

  return null;
}

export default function HeroScene({
  isLight,
  maxDpr,
  layerCount,
  pointer,
  scroll,
  onContextLost,
}: {
  isLight: boolean;
  maxDpr: number;
  layerCount: number;
  pointer: React.RefObject<Pointer>;
  scroll: React.RefObject<number>;
  onContextLost: () => void;
}) {
  const aspect = 1.6;

  return (
    <Canvas
      className="pointer-events-none"
      dpr={[1, maxDpr]}
      camera={{ fov: 45, position: [0, 0, 5], near: 0.1, far: 30 }}
      gl={{
        antialias: false,
        alpha: true,
        stencil: false,
        depth: false,
        powerPreference: "high-performance",
        preserveDrawingBuffer: false,
      }}
      style={{ mixBlendMode: "var(--canvas-blend)" as never }}
      onCreated={({ gl }) => {
        gl.setClearAlpha(0);
        gl.domElement.addEventListener("webglcontextlost", (e) => {
          e.preventDefault();
          onContextLost();
        });
      }}
    >
      <FrameGate />
      <CameraRig pointer={pointer} scroll={scroll} />
      {LAYERS.slice(0, layerCount).map((layer) => (
        <Curtain
          key={layer.z}
          layer={layer}
          isLight={isLight}
          pointer={pointer}
          scroll={scroll}
          aspect={aspect}
        />
      ))}
    </Canvas>
  );
}
