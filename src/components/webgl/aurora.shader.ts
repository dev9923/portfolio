const noise = /* glsl */ `
  vec3 hash33(vec3 p) {
    p = vec3(dot(p, vec3(127.1, 311.7,  74.7)),
             dot(p, vec3(269.5, 183.3, 246.1)),
             dot(p, vec3(113.5, 271.9, 124.6)));
    return fract(sin(p) * 43758.5453123) * 2.0 - 1.0;
  }

  float gnoise(vec3 p) {
    vec3 i = floor(p), f = fract(p);
    vec3 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(mix(dot(hash33(i + vec3(0,0,0)), f - vec3(0,0,0)),
              dot(hash33(i + vec3(1,0,0)), f - vec3(1,0,0)), u.x),
          mix(dot(hash33(i + vec3(0,1,0)), f - vec3(0,1,0)),
              dot(hash33(i + vec3(1,1,0)), f - vec3(1,1,0)), u.x), u.y),
      mix(mix(dot(hash33(i + vec3(0,0,1)), f - vec3(0,0,1)),
              dot(hash33(i + vec3(1,0,1)), f - vec3(1,0,1)), u.x),
          mix(dot(hash33(i + vec3(0,1,1)), f - vec3(0,1,1)),
              dot(hash33(i + vec3(1,1,1)), f - vec3(1,1,1)), u.x), u.y),
      u.z);
  }

  float fbm(vec3 p) {
    float a = 0.5, s = 0.0;
    for (int i = 0; i < 3; i++) { s += a * gnoise(p); p *= 2.03; a *= 0.5; }
    return s * 0.5 + 0.5;
  }
`;

export const auroraVertex = /* glsl */ `
  uniform float uTime;
  uniform float uAmp;
  uniform float uFreq;
  uniform float uSeed;

  varying vec2  vUv;
  varying float vElev;

  ${noise}

  void main() {
    vUv = uv;
    vec3 p = position;
    float w = fbm(vec3(p.xy * uFreq * 0.6 + uSeed, uTime * 0.04));
    float n = fbm(vec3(p.xy * uFreq + w * 0.6 + uSeed, uTime * 0.07));
    p.z += (n - 0.5) * uAmp;
    vElev = n;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
  }
`;

export const auroraFragment = /* glsl */ `
  precision highp float;

  uniform float uTime;
  uniform vec3  uColorA;
  uniform vec3  uColorB;
  uniform vec3  uColorC;
  uniform vec2  uPointer;
  uniform float uOpacity;
  uniform float uSeed;
  uniform float uBandCenter;
  uniform float uBandWidth;
  uniform float uLightMode;

  varying vec2  vUv;
  varying float vElev;

  ${noise}

  void main() {
    float lo = uBandCenter - uBandWidth;
    float hi = uBandCenter + uBandWidth;
    float band = smoothstep(lo, uBandCenter, vUv.y)
               * (1.0 - smoothstep(uBandCenter, hi, vUv.y));

    float edge = smoothstep(0.0, 0.22, vUv.x) * (1.0 - smoothstep(0.78, 1.0, vUv.x));

    float streak = fbm(vec3(vUv * vec2(4.0, 1.4)
                            + vec2(uTime * 0.045, -uTime * 0.018)
                            + uSeed,
                            uTime * 0.05));
    streak = smoothstep(0.34, 0.86, streak);

    float a = band * edge * streak * uOpacity;
    if (a < 0.004) discard;

    vec3 col = mix(uColorA, uColorB, smoothstep(0.25, 0.80, vElev));
    col = mix(col, uColorC, smoothstep(0.45, 1.0, streak) * 0.65);

    float glow = 1.0 - clamp(distance(vUv, uPointer * 0.5 + 0.5) * 1.5, 0.0, 1.0);
    col += uColorB * glow * glow * 0.22;

    col = mix(col, col * 0.55, uLightMode);

    gl_FragColor = vec4(col, a);

    #include <colorspace_fragment>
  }
`;
