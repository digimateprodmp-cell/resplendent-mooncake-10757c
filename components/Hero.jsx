"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import * as THREE from "three";
import gsap from "gsap";
import UniversityPanel from "./UniversityPanel";

/**
 * Cinematic hero — the globe is the centerpiece, headline sits below it.
 * A shaded "planet" (day/night terminator lighting) traced with real country
 * border lines, Mumbai as the origin, and six real regional clusters of
 * universities connected by gold arcs. Regions collapse to a single label
 * at rest and fan out into individual universities on cursor proximity
 * (desktop) or tap (mobile) — solving the old "single overlapping letter"
 * legibility problem without ever showing a trademarked crest/logo.
 *
 * Ranking language is a qualitative "global standing" band, not a specific
 * numbered ranking that would go stale — and "success stories" only appear
 * where a real, already-published testimonial exists (Testimonials.jsx);
 * everywhere else it honestly says stories are coming soon rather than
 * inventing student names or scholarship figures.
 */

const HUB = { name: "Coach Sandeep Jadav", label: "Mumbai", lat: 19.076, lon: 72.8777, photo: "/founder/coach-sandeep.jpg" };

const REGIONS = [
  {
    id: "usa-east",
    label: "USA East",
    universities: [
      { name: "Harvard University", short: "Harvard", slug: "harvard", lat: 42.37, lon: -71.12, country: "United States", tier: "Ivy League", programs: "Liberal Arts · Law · Business", story: null },
      {
        name: "MIT", short: "MIT", slug: "mit", lat: 42.36, lon: -71.09, country: "United States", tier: "Top 5 Global (STEM)", programs: "Engineering · Computer Science · Research",
        story: { name: "Vihaan R.", role: "Student · Started Grade 8", quote: "Coach Sandeep didn’t get me into MIT. He built the version of me that MIT wanted.", result: "Admitted · MIT" },
      },
      { name: "Yale University", short: "Yale", slug: "yale", lat: 41.31, lon: -72.92, country: "United States", tier: "Ivy League", programs: "Liberal Arts · Law · Drama", story: null },
      { name: "Princeton University", short: "Princeton", slug: "princeton", lat: 40.35, lon: -74.66, country: "United States", tier: "Ivy League", programs: "Engineering · Economics · Public Policy", story: null },
      { name: "Columbia University", short: "Columbia", slug: "columbia", lat: 40.81, lon: -73.96, country: "United States", tier: "Ivy League", programs: "Journalism · Business · International Affairs", story: null },
      { name: "Boston University", short: "Boston University", slug: "boston-university", lat: 42.35, lon: -71.1, country: "United States", tier: "Top 50 Global", programs: "Communications · Business · Health Sciences", story: null },
    ],
  },
  {
    id: "usa-west",
    label: "USA West",
    universities: [
      {
        name: "Stanford University", short: "Stanford", slug: "stanford", lat: 37.43, lon: -122.17, country: "United States", tier: "Top 5 Global", programs: "Engineering · Computer Science · Business",
        story: { name: "Ananya M.", role: "Student · Grade 12", quote: "In Grade 9 I couldn’t speak in front of ten people. By Grade 12 I had founded a robotics nonprofit.", result: "Admitted · Stanford" },
      },
    ],
  },
  {
    id: "canada",
    label: "Canada",
    universities: [
      { name: "University of Toronto", short: "U of T", slug: "toronto", lat: 43.66, lon: -79.4, country: "Canada", tier: "Top 25 Global", programs: "Medicine · Engineering · Business", story: null },
      { name: "York University", short: "York University", slug: "york", lat: 43.77, lon: -79.5, country: "Canada", tier: "Established Canadian University", programs: "Business · Law · Fine Arts", story: null },
      { name: "Toronto Metropolitan University", short: "TMU", slug: "tmu", lat: 43.66, lon: -79.38, country: "Canada", tier: "Established Canadian University", programs: "Business · Media · Engineering", story: null },
      { name: "McGill University", short: "McGill", slug: "mcgill", lat: 45.5, lon: -73.58, country: "Canada", tier: "Top 30 Global", programs: "Medicine · Law · Engineering", story: null },
      { name: "University of British Columbia", short: "UBC", slug: "ubc", lat: 49.26, lon: -123.25, country: "Canada", tier: "Top 40 Global", programs: "Sciences · Business · Environment", story: null },
    ],
  },
  {
    id: "uk",
    label: "United Kingdom",
    universities: [
      {
        name: "University of Oxford", short: "Oxford", slug: "oxford", lat: 51.75, lon: -1.25, country: "United Kingdom", tier: "Top 5 Global", programs: "Law · PPE · Medicine",
        story: { name: "Mr. & Mrs. Kapoor", role: "Parents", quote: "For the first time, someone gave us a plan instead of promises. Every month we could see the growth.", result: "Son admitted · Oxford" },
      },
      { name: "University of Cambridge", short: "Cambridge", slug: "cambridge", lat: 52.2, lon: 0.12, country: "United Kingdom", tier: "Top 5 Global", programs: "Sciences · Engineering · Economics", story: null },
      { name: "Imperial College London", short: "Imperial", slug: "imperial", lat: 51.5, lon: -0.18, country: "United Kingdom", tier: "Top 10 Global (STEM)", programs: "Engineering · Medicine · Business", story: null },
      { name: "University College London", short: "UCL", slug: "ucl", lat: 51.52, lon: -0.13, country: "United Kingdom", tier: "Top 15 Global", programs: "Architecture · Law · Medicine", story: null },
      { name: "King’s College London", short: "King’s College London", slug: "kings-college-london", lat: 51.51, lon: -0.12, country: "United Kingdom", tier: "Top 40 Global", programs: "Law · Medicine · International Relations", story: null },
      { name: "London School of Economics", short: "LSE", slug: "lse", lat: 51.51, lon: -0.11, country: "United Kingdom", tier: "Top 50 Global (Social Sciences)", programs: "Economics · Politics · Finance", story: null },
    ],
  },
  {
    id: "australia",
    label: "Australia",
    universities: [
      { name: "University of Melbourne", short: "Melbourne", slug: "melbourne", lat: -37.8, lon: 144.96, country: "Australia", tier: "Top 15 Global", programs: "Medicine · Law · Business", story: null },
      { name: "UNSW Sydney", short: "UNSW", slug: "unsw", lat: -33.92, lon: 151.23, country: "Australia", tier: "Top 20 Global", programs: "Engineering · Business · Design", story: null },
      { name: "University of Sydney", short: "Sydney", slug: "sydney", lat: -33.89, lon: 151.19, country: "Australia", tier: "Top 20 Global", programs: "Medicine · Law · Architecture", story: null },
      { name: "Monash University", short: "Monash", slug: "monash", lat: -37.91, lon: 145.13, country: "Australia", tier: "Top 45 Global", programs: "Pharmacy · Engineering · Business", story: null },
    ],
  },
  {
    id: "singapore",
    label: "Singapore",
    universities: [
      {
        name: "National University of Singapore", short: "NUS", slug: "nus", lat: 1.3, lon: 103.77, country: "Singapore", tier: "Top 10 Global", programs: "Business · Computing · Medicine",
        story: { name: "Dr. Sharma", role: "Parent", quote: "The dashboard meant we never had to ask — we could just see it.", result: "Daughter admitted · NUS" },
      },
      { name: "Nanyang Technological University", short: "NTU", slug: "ntu", lat: 1.35, lon: 103.68, country: "Singapore", tier: "Top 15 Global", programs: "Engineering · Business · Design", story: null },
    ],
  },
];

const GLOBE_RADIUS = 9;
const PIN_RADIUS = GLOBE_RADIUS + 0.22;

function sphPoint(phi, theta, radius) {
  const x = -radius * Math.sin(phi) * Math.cos(theta);
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return { x, y, z };
}
function latLonToPoint(lat, lon, radius) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return sphPoint(phi, theta, radius);
}
function clamp01(x) {
  return Math.max(0, Math.min(1, x));
}
function easeOutCubic(x) {
  return 1 - Math.pow(1 - x, 3);
}
function revealProgress(t, appearAt, duration) {
  return clamp01((t - appearAt) / Math.max(duration, 0.001));
}
function buildArcCurve(pA, pB, globeRadius) {
  const a = new THREE.Vector3(pA.x, pA.y, pA.z);
  const b = new THREE.Vector3(pB.x, pB.y, pB.z);
  const angle = a.angleTo(b);
  const liftFactor = 1 + (angle / Math.PI) * 0.7;
  const mid = new THREE.Vector3().addVectors(a, b).multiplyScalar(0.5);
  if (mid.lengthSq() < 0.0001) mid.set(0, 1, 0);
  mid.normalize().multiplyScalar(globeRadius * liftFactor);
  return new THREE.QuadraticBezierCurve3(a, mid, b);
}
function makeGlowDotTexture(hex, soft) {
  const size = 128;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, "rgba(255,255,255,0.95)");
  g.addColorStop(soft ? 0.22 : 0.32, hex);
  g.addColorStop(1, "rgba(227,196,122,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  return new THREE.CanvasTexture(canvas);
}
function makePhotoSprite(photoUrl) {
  const size = 256;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  const cx = size / 2;
  const cy = size / 2;
  const r = size * 0.36;

  const draw = (img) => {
    ctx.clearRect(0, 0, size, size);
    const glow = ctx.createRadialGradient(cx, cy, r * 0.5, cx, cy, r * 1.7);
    glow.addColorStop(0, "rgba(227,196,122,0.45)");
    glow.addColorStop(1, "rgba(227,196,122,0)");
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, size, size);

    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.closePath();
    ctx.clip();
    if (img) {
      ctx.drawImage(img, cx - r, cy - r, r * 2, r * 2);
    } else {
      ctx.fillStyle = "#0a1830";
      ctx.fillRect(cx - r, cy - r, r * 2, r * 2);
    }
    ctx.restore();

    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.lineWidth = 6;
    ctx.strokeStyle = "#e3c47a";
    ctx.stroke();
  };

  draw(null);
  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  const img = new Image();
  img.crossOrigin = "anonymous";
  img.onload = () => {
    draw(img);
    texture.needsUpdate = true;
  };
  img.src = photoUrl;
  return texture;
}

const SKILLS = [
  "Leadership",
  "Research",
  "Olympiads",
  "Community Impact",
  "Internships",
  "Essays",
  "Critical Thinking",
  "Interview Skills",
];

// The top-left ("Harvard") constellation was repeatedly reported as a
// garbled-looking overlap right under the nav — removed rather than
// re-tuned again, per explicit feedback that removal is fine.
const CONSTELLATIONS = [
  { short: "Oxford", corner: "tr", stars: [[0, 4], [-20, -8], [-36, 10]] },
  { short: "Stanford", corner: "rm", stars: [[0, 0], [-18, 14], [-30, -8]] },
  { short: "NUS", corner: "bl", stars: [[0, 0], [24, 8], [42, -6]] },
];

const TRUST_STATS = [
  { end: 1200, suffix: "+", label: "Students Mentored" },
  { end: 24, suffix: "", label: "Top Universities" },
  { end: 50, suffix: "+", label: "Countries" },
  { end: 95, suffix: "%", label: "Admission Success" },
];

function HeroStat({ end, suffix, label, delay }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    const t0 = performance.now() + delay;
    let raf;
    const dur = 1700;
    const step = (now) => {
      const p = Math.min(Math.max((now - t0) / dur, 0), 1);
      const eased = 1 - Math.pow(1 - p, 4);
      setVal(Math.round(end * eased));
      if (now < t0 + dur) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [end, delay]);
  return (
    <div className="herostat">
      <div className="herostat__num">
        {val.toLocaleString()}
        {suffix}
      </div>
      <div className="herostat__label">{label}</div>
    </div>
  );
}

export default function Hero() {
  const canvasRef = useRef(null);
  const stageRef = useRef(null);
  const overlayRef = useRef(null);
  const cardRef = useRef(null);
  const starCanvasRef = useRef(null);
  const constellationsRef = useRef(null);
  const orbitLayerRef = useRef(null);
  const titleRef = useRef(null);
  const subRef = useRef(null);
  const ctasRef = useRef(null);
  const quoteRef = useRef(null);
  const zoomActionRef = useRef(() => {});
  const [selectedUni, setSelectedUni] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const canvas = canvasRef.current;
    const stage = stageRef.current;
    const overlay = overlayRef.current;
    const card = cardRef.current;
    const starCanvas = starCanvasRef.current;
    const constellations = constellationsRef.current;
    const orbitLayer = orbitLayerRef.current;
    if (!canvas || !stage || !overlay || !card) return;
    let cancelled = false;

    const prefersReduced =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isSmallScreen = window.innerWidth < 768;
    // Low-end device heuristic: few logical cores and/or low reported RAM.
    // Neither API is universally supported, so this only ever *reduces*
    // load — it never assumes a device is capable just because the APIs
    // are missing (defaults treat unknown as mid-tier, not low-end).
    const lowPowerDevice =
      (typeof navigator !== "undefined" &&
        typeof navigator.hardwareConcurrency === "number" &&
        navigator.hardwareConcurrency <= 4) ||
      (typeof navigator !== "undefined" &&
        typeof navigator.deviceMemory === "number" &&
        navigator.deviceMemory <= 4);
    const showOrbitsAndStars = window.innerWidth >= 880 && !prefersReduced && !lowPowerDevice; // keep small/reduced-motion/low-power screens uncluttered and calm

    /* ---------- Load-in choreography timing ---------- */
    const GLOBAL_FADE_DUR = prefersReduced ? 0 : 0.9;
    const HUB_APPEAR = prefersReduced ? 0 : 0.3;
    const HUB_DUR = prefersReduced ? 0 : 0.4;
    const REGION_START = prefersReduced ? 0 : 0.55;
    const REGION_STAGGER = prefersReduced ? 0 : 0.16;
    const REGION_DUR = prefersReduced ? 0 : 0.45;
    const INTRO_END = REGION_START + (REGIONS.length - 1) * REGION_STAGGER + REGION_DUR + 0.15;
    let introDone = prefersReduced;

    /* ---------- Scene setup ---------- */
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: !lowPowerDevice,
      powerPreference: "high-performance",
    });
    const pixelRatioCap = lowPowerDevice ? 1 : isSmallScreen ? 1.5 : 2;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, pixelRatioCap));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 260);
    const ZOOM_MIN = 14;
    const ZOOM_MAX = 24;
    // Rolled back after three cumulative size-up passes (+25%, +12%, +10-15%)
    // left the globe visibly overflowing the stage on real screens — this
    // pulls the camera back out (~17% further) so the globe actually fits.
    let cameraZ = 19;
    let targetCameraZ = cameraZ;
    camera.position.z = cameraZ;

    const disposables = [];

    /* ---------- Solid shaded planet (day/night terminator as it spins) ---------- */
    const planetGeo = new THREE.SphereGeometry(GLOBE_RADIUS - 0.15, 64, 64);
    const planetMat = new THREE.ShaderMaterial({
      transparent: true,
      uniforms: {
        uDeepColor: { value: new THREE.Color(0x040f1f) },
        uLitColor: { value: new THREE.Color(0x1c4070) },
        uLightDir: { value: new THREE.Vector3(0.45, 0.6, 0.7).normalize() },
        uOpacity: { value: prefersReduced ? 1 : 0 },
      },
      vertexShader: `
        varying vec3 vWorldNormal;
        void main() {
          vWorldNormal = normalize(mat3(modelMatrix) * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vWorldNormal;
        uniform vec3 uDeepColor;
        uniform vec3 uLitColor;
        uniform vec3 uLightDir;
        uniform float uOpacity;
        void main() {
          float diff = max(dot(normalize(vWorldNormal), normalize(uLightDir)), 0.0);
          vec3 color = mix(uDeepColor, uLitColor, diff * 0.75 + 0.15);
          gl_FragColor = vec4(color, uOpacity);
        }
      `,
    });
    const planet = new THREE.Mesh(planetGeo, planetMat);
    scene.add(planet);
    disposables.push(planetGeo, planetMat);

    /* ---------- Real country border lines ---------- */
    const COUNTRY_BASE_OPACITY = 0.4;
    const countryGeo = new THREE.BufferGeometry();
    countryGeo.setAttribute("position", new THREE.BufferAttribute(new Float32Array(0), 3));
    const countryMat = new THREE.LineBasicMaterial({
      color: 0xc7a14a,
      transparent: true,
      opacity: prefersReduced ? COUNTRY_BASE_OPACITY : 0,
    });
    const countryLines = new THREE.LineSegments(countryGeo, countryMat);
    scene.add(countryLines);
    disposables.push(countryGeo, countryMat);

    fetch("/data/country-borders.json")
      .then((r) => r.json())
      .then((flat) => {
        if (cancelled) return;
        countryGeo.setAttribute("position", new THREE.BufferAttribute(new Float32Array(flat), 3));
        countryGeo.computeBoundingSphere();
      })
      .catch(() => {});

    /* ---------- 2D star layer — lives behind the globe canvas, so the
       opaque planet naturally occludes any star "under" it. Edge-weighted
       distribution + a soft fade near the globe's live screen radius gives
       the "concentrated at the edges, fading in near the globe" look
       without ever needing to overlap-test against the globe. ---------- */
    let stars = [];
    let starCtx = null;
    let starDPR = 1;
    function generateStars(w, h) {
      const count = prefersReduced ? 60 : lowPowerDevice ? 70 : isSmallScreen ? 90 : 170;
      const cx = w / 2;
      const cy = h / 2;
      const maxR = Math.hypot(w, h) / 2;
      const out = [];
      for (let i = 0; i < count; i++) {
        // bias placement toward the outer band via a squared random radius
        const edgeBias = 0.45 + Math.pow(Math.random(), 0.55) * 0.55;
        const r = maxR * edgeBias;
        const angle = Math.random() * Math.PI * 2;
        out.push({
          x: cx + Math.cos(angle) * r,
          y: cy + Math.sin(angle) * r * 0.82,
          size: Math.random() < 0.12 ? 1.9 : 0.8 + Math.random() * 0.9,
          baseAlpha: 0.25 + Math.random() * 0.45,
          twinkleSpeed: 0.3 + Math.random() * 0.5,
          twinklePhase: Math.random() * Math.PI * 2,
        });
      }
      return out;
    }
    if (starCanvas) {
      starCtx = starCanvas.getContext("2d");
      starDPR = Math.min(window.devicePixelRatio || 1, lowPowerDevice ? 1 : 2);
    }
    function resizeStars() {
      if (!starCanvas) return;
      const w = stage.clientWidth;
      const h = stage.clientHeight;
      starCanvas.width = w * starDPR;
      starCanvas.height = h * starDPR;
      starCanvas.style.width = `${w}px`;
      starCanvas.style.height = `${h}px`;
      stars = generateStars(w, h);
    }
    resizeStars();

    function drawStars(centerPx, screenR) {
      if (!starCtx || !starCanvas) return;
      const w = starCanvas.width / starDPR;
      const h = starCanvas.height / starDPR;
      starCtx.setTransform(starDPR, 0, 0, starDPR, 0, 0);
      starCtx.clearRect(0, 0, w, h);
      const fadeInner = screenR * 0.92;
      const fadeOuter = screenR * 1.35;
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        const dist = Math.hypot(s.x - centerPx.x, s.y - centerPx.y);
        const fade = clamp01((dist - fadeInner) / Math.max(fadeOuter - fadeInner, 0.001));
        if (fade <= 0) continue;
        const twinkle = prefersReduced ? 1 : 0.72 + 0.28 * Math.sin(nowT * s.twinkleSpeed + s.twinklePhase);
        const alpha = s.baseAlpha * fade * twinkle;
        starCtx.beginPath();
        starCtx.fillStyle = `rgba(248, 240, 220, ${alpha.toFixed(3)})`;
        starCtx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        starCtx.fill();
      }
    }
    let nowT = 0;

    /* ---------- Orbiting student-development skill labels ---------- */
    const orbitEls = [];
    if (orbitLayer && showOrbitsAndStars) {
      SKILLS.forEach((label, i) => {
        const el = document.createElement("div");
        el.className = "globe-orbit";
        el.textContent = label;
        orbitLayer.appendChild(el);
        orbitEls.push({
          el,
          // Evenly spaced, tiny jitter only (not half the gap between labels),
          // and every label rotates at the *same* speed/direction — a rigid
          // ring never lets two labels drift into or through each other.
          baseAngle: (i / SKILLS.length) * Math.PI * 2 + Math.random() * 0.08,
          speed: 0.032,
        });
      });
    }

    /* ---------- Ambient parallax (stars + constellations shift, globe stays put) ---------- */
    let parallaxTargetX = 0;
    let parallaxTargetY = 0;
    let parallaxX = 0;
    let parallaxY = 0;
    const onStageMove = (e) => {
      const r = stage.getBoundingClientRect();
      parallaxTargetX = ((e.clientX - r.left) / r.width - 0.5) * 2;
      parallaxTargetY = ((e.clientY - r.top) / r.height - 0.5) * 2;
    };
    if (showOrbitsAndStars) stage.addEventListener("pointermove", onStageMove);

    function onGlobeMetrics(centerPx, screenR, t, dt) {
      nowT = t;
      drawStars(centerPx, screenR);

      parallaxX += (parallaxTargetX - parallaxX) * 0.06;
      parallaxY += (parallaxTargetY - parallaxY) * 0.06;
      if (starCanvas) starCanvas.style.transform = `translate(${parallaxX * 12}px, ${parallaxY * 10}px)`;
      if (constellations) constellations.style.transform = `translate(${parallaxX * 6}px, ${parallaxY * 5}px)`;

      if (orbitEls.length) {
        // Two independent radii, both comfortably OUTSIDE the globe's own
        // screen radius (screenR) at every angle — the old 0.62 vertical
        // squash made the ring's vertical reach *smaller* than the globe
        // itself, so labels near the top/bottom rendered on top of it.
        const orbitRX = screenR * 1.5;
        const orbitRY = screenR * 1.15;
        orbitEls.forEach((o) => {
          const angle = o.baseAngle + t * o.speed;
          const x = centerPx.x + Math.cos(angle) * orbitRX;
          const y = centerPx.y + Math.sin(angle) * orbitRY;
          o.el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
        });
      }
    }

    /* ---------- Mumbai hub ---------- */
    const hubPos = latLonToPoint(HUB.lat, HUB.lon, PIN_RADIUS);
    const pinsGroup = new THREE.Group();
    scene.add(pinsGroup);

    const hubTexture = makePhotoSprite(HUB.photo);
    const hubMat = new THREE.SpriteMaterial({ map: hubTexture, transparent: true, depthWrite: false, opacity: prefersReduced ? 1 : 0 });
    const hubSprite = new THREE.Sprite(hubMat);
    hubSprite.position.set(hubPos.x, hubPos.y, hubPos.z);
    hubSprite.scale.set(1.7, 1.7, 1);
    pinsGroup.add(hubSprite);
    disposables.push(hubTexture, hubMat);

    /* ---------- Region anchors + university dots ---------- */
    const goldGlow = makeGlowDotTexture("rgba(227,196,122,0.9)", false);
    const goldGlowSoft = makeGlowDotTexture("rgba(227,196,122,0.55)", true);
    disposables.push(goldGlow, goldGlowSoft);

    // Mumbai's periodic ripple — a slow expanding-and-fading ring every few
    // seconds, purely to say "the journey starts here" without being flashy.
    const RIPPLE_INTERVAL = 4.5;
    const rippleMat = new THREE.SpriteMaterial({ map: goldGlow, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0 });
    const rippleSprite = new THREE.Sprite(rippleMat);
    rippleSprite.position.set(hubPos.x, hubPos.y, hubPos.z);
    pinsGroup.add(rippleSprite);
    disposables.push(rippleMat);
    let hubHovered = false;
    let originSequenceStart = null; // set on click; drives the pulse/slow-rotation/trace sequence before navigating
    const originTimers = [];

    // A single bright "journey" particle — every ~9s it travels Mumbai to one
    // region's arc, in sequence, so the whole globe reads as one continuous
    // story rather than 6 static connections.
    const JOURNEY_INTERVAL = 9;
    const JOURNEY_TRAVEL = 2.7; // slow, deliberate — never a "fast dart" across the globe
    const JOURNEY_GLOW = 2.2;
    const journeyMat = new THREE.SpriteMaterial({ map: goldGlow, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0 });
    const journeySprite = new THREE.Sprite(journeyMat);
    journeySprite.scale.set(0.7, 0.7, 1);
    pinsGroup.add(journeySprite);
    disposables.push(journeyMat);

    const regionRuntime = REGIONS.map((region, rIdx) => {
      const memberPoints = region.universities.map((u, i) => {
        // tiny deterministic jitter so tightly-clustered cities (e.g. central London)
        // read as a small cluster of dots rather than one indistinguishable point.
        const spread = region.universities.length > 1 ? 0.32 : 0;
        const angle = (i / Math.max(region.universities.length, 1)) * Math.PI * 2;
        const jLat = u.lat + Math.cos(angle) * spread;
        const jLon = u.lon + Math.sin(angle) * spread;
        return latLonToPoint(jLat, jLon, PIN_RADIUS);
      });
      const avg = memberPoints.reduce(
        (acc, p) => ({ x: acc.x + p.x, y: acc.y + p.y, z: acc.z + p.z }),
        { x: 0, y: 0, z: 0 }
      );
      const n = memberPoints.length;
      const dir = new THREE.Vector3(avg.x / n, avg.y / n, avg.z / n).normalize();
      const anchorPos = dir.multiplyScalar(PIN_RADIUS);

      const anchorMat = new THREE.SpriteMaterial({ map: goldGlow, transparent: true, depthWrite: false, opacity: 0, blending: THREE.AdditiveBlending });
      const anchorSprite = new THREE.Sprite(anchorMat);
      anchorSprite.position.copy(anchorPos);
      anchorSprite.scale.set(1.1, 1.1, 1);
      pinsGroup.add(anchorSprite);
      disposables.push(anchorMat);

      const uniSprites = memberPoints.map((p) => {
        const mat = new THREE.SpriteMaterial({ map: goldGlowSoft, transparent: true, depthWrite: false, opacity: 0, blending: THREE.AdditiveBlending });
        const sprite = new THREE.Sprite(mat);
        sprite.position.set(p.x, p.y, p.z);
        sprite.scale.set(0.55, 0.55, 1);
        pinsGroup.add(sprite);
        disposables.push(mat);
        return sprite;
      });

      // Region arc — always on, the persistent Mumbai connection.
      const regionArcMat = new THREE.LineBasicMaterial({ color: 0xe3c47a, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false });
      const regionCurve = buildArcCurve(hubPos, anchorPos, GLOBE_RADIUS);
      const regionArcGeo = new THREE.BufferGeometry().setFromPoints(regionCurve.getPoints(48));
      const regionArcLine = new THREE.Line(regionArcGeo, regionArcMat);
      pinsGroup.add(regionArcLine);
      disposables.push(regionArcGeo, regionArcMat);

      const pulseMat = new THREE.SpriteMaterial({ map: goldGlow, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0 });
      const pulseSprite = new THREE.Sprite(pulseMat);
      pulseSprite.scale.set(0.42, 0.42, 1);
      pinsGroup.add(pulseSprite);
      disposables.push(pulseMat);

      // Individual arcs — hidden until a specific university is hovered.
      const uniArcs = memberPoints.map((p) => {
        const mat = new THREE.LineBasicMaterial({ color: 0xe3c47a, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false });
        const curve = buildArcCurve(hubPos, p, GLOBE_RADIUS);
        const geo = new THREE.BufferGeometry().setFromPoints(curve.getPoints(40));
        const line = new THREE.Line(geo, mat);
        pinsGroup.add(line);
        disposables.push(geo, mat);
        return { mat, curOpacity: 0, targetOpacity: 0 };
      });

      return {
        region,
        anchorSprite,
        uniSprites,
        regionArcMat,
        regionCurve,
        pulseSprite,
        pulseOffset: Math.random(),
        uniArcs,
        appearAt: REGION_START + rIdx * REGION_STAGGER,
        dur: REGION_DUR,
        expanded: false,
        hoveredIdx: -1,
      };
    });

    /* ---------- HTML overlay: region + university label chips ---------- */
    overlay.innerHTML = "";

    const mumbaiChip = document.createElement("button");
    mumbaiChip.type = "button";
    mumbaiChip.className = "globe-chip globe-chip--mumbai";
    mumbaiChip.textContent = "Mumbai — The Origin";
    mumbaiChip.setAttribute("aria-label", "Mumbai — the origin of every journey. Open Coach Sandeep's story.");
    mumbaiChip.addEventListener("mouseenter", () => { hubHovered = true; });
    mumbaiChip.addEventListener("mouseleave", () => { hubHovered = false; });
    mumbaiChip.addEventListener("click", (e) => {
      e.stopPropagation();
      if (originSequenceStart !== null) return;
      originSequenceStart = clock.getElapsedTime();
      collapseAll(null);
      try {
        sessionStorage.setItem("journeyOrigin", "mumbai");
      } catch {}
      originTimers.push(
        setTimeout(() => stage.classList.add("is-departing"), 900),
        setTimeout(() => router.push("/about"), 1300)
      );
    });
    overlay.appendChild(mumbaiChip);

    let expandedRuntime = null;
    let expandCollapseTimer = null;

    function collapseAll(exceptRuntime) {
      regionRuntime.forEach((rt) => {
        if (rt === exceptRuntime) return;
        rt.expanded = false;
        rt.regionChip.classList.remove("is-hidden-by-expand");
        rt.regionChip.setAttribute("aria-expanded", "false");
        rt.uniChips.forEach((c) => c.classList.remove("is-expanded"));
        rt.connector.classList.remove("is-visible");
        rt.hoveredIdx = -1;
      });
      if (exceptRuntime === null) expandedRuntime = null;
    }

    function expandRegion(rt) {
      if (expandedRuntime && expandedRuntime !== rt) collapseAll(rt);
      rt.expanded = true;
      expandedRuntime = rt;
      rt.regionChip.classList.add("is-hidden-by-expand");
      rt.regionChip.setAttribute("aria-expanded", "true");
      rt.uniChips.forEach((chip, i) => {
        chip.style.transitionDelay = `${i * 45}ms`;
        chip.classList.add("is-expanded");
      });
    }

    function collapseRegion(rt) {
      rt.expanded = false;
      if (expandedRuntime === rt) expandedRuntime = null;
      rt.regionChip.classList.remove("is-hidden-by-expand");
      rt.regionChip.setAttribute("aria-expanded", "false");
      rt.uniChips.forEach((c) => c.classList.remove("is-expanded"));
      rt.connector.classList.remove("is-visible");
      rt.hoveredIdx = -1;
      hideCard();
    }

    // Google-Maps-style collision handling: the card always tries to sit
    // above the marker, but flips below when that would clip under the
    // fixed navbar, and shifts horizontally rather than running off the
    // viewport — the visitor should never notice it happening.
    const navEl = document.querySelector(".nav");
    const leaderEl = document.createElement("div");
    leaderEl.className = "globe-card__leader";
    overlay.appendChild(leaderEl);

    function showCard(uni, anchorX, anchorY) {
      const tierRow = uni.tier ? `<span class="globe-card__tier">${uni.tier}</span>` : "";
      const storyBlock = uni.story
        ? `<p class="globe-card__story">&ldquo;${uni.story.quote}&rdquo;<br/><span>— ${uni.story.name}, ${uni.story.result}</span></p>`
        : `<p class="globe-card__story globe-card__story--soon">Success stories from students preparing for ${uni.short} — coming soon.</p>`;
      card.innerHTML = `
        <div class="globe-card__head">
          <span class="globe-card__initial">${uni.short.charAt(0)}<img src="/universities/${uni.slug}.jpg" alt="" onerror="if(!this.dataset.fb){this.dataset.fb='1';this.src='/universities/${uni.slug}.png';}else{this.remove();}" /></span>
          <div>
            <h4>${uni.name}</h4>
            <span class="globe-card__country">${uni.country}</span>
          </div>
        </div>
        ${tierRow}
        <p class="globe-card__programs">${uni.programs}</p>
        ${storyBlock}
        <span class="globe-card__cta">Explore Success Stories →</span>
      `;
      card.classList.add("is-visible");

      const stageRect = stage.getBoundingClientRect();
      const navH = (navEl && navEl.offsetHeight) || 84;
      const SAFE_TOP_VIEWPORT = navH + 120; // Issue 3's invisible interaction zone
      const GAP = 16;
      const MARGIN = 14;
      const cardW = card.offsetWidth || 264;
      const cardH = card.offsetHeight || 180;

      const anchorYViewport = stageRect.top + anchorY;
      const fitsAbove = anchorYViewport - GAP - cardH >= SAFE_TOP_VIEWPORT;
      let top = fitsAbove ? anchorY - GAP - cardH : anchorY + GAP;
      // never let the card's bottom edge run past the stage either
      top = Math.min(top, stageRect.height - cardH - MARGIN);

      const rawLeft = anchorX - cardW / 2;
      const left = Math.max(MARGIN, Math.min(rawLeft, stageRect.width - cardW - MARGIN));

      card.style.left = `${left}px`;
      card.style.top = `${top}px`;

      // A thin vertical tick from the marker to the card's near edge — the
      // "leader line" so the card always reads as belonging to that marker,
      // even after it's been nudged to stay on-screen.
      const leaderTop = fitsAbove ? top + cardH : anchorY - GAP;
      const leaderHeight = Math.max(GAP - 2, 0);
      leaderEl.style.left = `${anchorX}px`;
      leaderEl.style.top = `${leaderTop}px`;
      leaderEl.style.height = `${leaderHeight}px`;
      leaderEl.classList.add("is-visible");
    }
    function hideCard() {
      card.classList.remove("is-visible");
      leaderEl.classList.remove("is-visible");
    }

    regionRuntime.forEach((rt) => {
      const regionChip = document.createElement("button");
      regionChip.type = "button";
      regionChip.className = "globe-chip globe-chip--region";
      regionChip.innerHTML = `<span>${rt.region.label}</span><span class="globe-chip__count">${rt.region.universities.length > 1 ? rt.region.universities.length : ""}</span>`;
      regionChip.setAttribute("aria-label", `${rt.region.label} — ${rt.region.universities.length} universit${rt.region.universities.length > 1 ? "ies" : "y"}. Expand.`);
      regionChip.setAttribute("aria-expanded", "false");
      regionChip.addEventListener("click", (e) => {
        e.stopPropagation();
        if (rt.expanded) collapseRegion(rt);
        else expandRegion(rt);
      });
      regionChip.addEventListener("mouseenter", () => { rt.regionHovered = true; });
      regionChip.addEventListener("mouseleave", () => { rt.regionHovered = false; });
      overlay.appendChild(regionChip);
      rt.regionChip = regionChip;
      rt.regionHovered = false;

      const connector = document.createElement("div");
      connector.className = "globe-chip__connector";
      overlay.appendChild(connector);
      rt.connector = connector;

      rt.uniChips = rt.region.universities.map((uni, i) => {
        const chip = document.createElement("button");
        chip.type = "button";
        chip.className = "globe-chip globe-chip--uni";
        chip.textContent = uni.short;
        chip.setAttribute("aria-label", `${uni.name}, ${uni.country}. Open details.`);
        chip.addEventListener("focus", () => {
          rt.hoveredIdx = i;
          const r = chip.getBoundingClientRect();
          const stageRect = stage.getBoundingClientRect();
          showCard(uni, r.left - stageRect.left + r.width / 2, r.top - stageRect.top);
          chip.classList.add("is-glowing");
        });
        chip.addEventListener("blur", () => {
          if (rt.hoveredIdx === i) rt.hoveredIdx = -1;
          chip.classList.remove("is-glowing");
          hideCard();
        });
        chip.addEventListener("mouseenter", () => {
          rt.hoveredIdx = i;
          const r = chip.getBoundingClientRect();
          const stageRect = stage.getBoundingClientRect();
          showCard(uni, r.left - stageRect.left + r.width / 2, r.top - stageRect.top);
          chip.classList.add("is-glowing");
        });
        chip.addEventListener("mouseleave", () => {
          if (rt.hoveredIdx === i) rt.hoveredIdx = -1;
          chip.classList.remove("is-glowing");
          hideCard();
        });
        chip.addEventListener("click", (e) => {
          e.stopPropagation();
          chip.classList.remove("is-clicking");
          // restart the pulse animation even on rapid re-clicks
          void chip.offsetWidth;
          chip.classList.add("is-clicking");
          setTimeout(() => chip.classList.remove("is-clicking"), 500);
          setSelectedUni({ ...uni, region: rt.region.label });
        });
        overlay.appendChild(chip);
        return chip;
      });
    });

    // Clicking empty overlay space collapses any expanded region.
    overlay.addEventListener("click", () => collapseAll(null));

    /* ---------- Zoom (pinch, ctrl/cmd+wheel, on-screen buttons) ---------- */
    zoomActionRef.current = (delta) => {
      targetCameraZ = Math.min(ZOOM_MAX, Math.max(ZOOM_MIN, targetCameraZ + delta));
    };
    const onWheel = (e) => {
      if (!e.ctrlKey && !e.metaKey) return; // don't hijack normal page scroll
      e.preventDefault();
      targetCameraZ = Math.min(ZOOM_MAX, Math.max(ZOOM_MIN, targetCameraZ + e.deltaY * 0.02));
    };
    canvas.addEventListener("wheel", onWheel, { passive: false });

    const activeTouches = new Map();
    let pinchStartDist = null;
    let pinchStartZoom = targetCameraZ;

    /* ---------- Drag-to-spin + tap detection ---------- */
    const clock = new THREE.Clock();
    let rotAngle = 0;
    let lastT = 0;

    const DRAG_SENSITIVITY = 0.005;
    const RESUME_DELAY = 2.5;
    const ROTATION_SPEED = prefersReduced ? 0 : 0.1;
    let isDragging = false;
    let spinVelocity = 0;
    let lastPointerX = 0;
    let lastDragSampleTime = 0;
    let lastInteractionEnd = -Infinity;
    let dragStartX = 0;
    let dragStartY = 0;
    let dragStartTime = 0;
    let dragMoved = false;

    // continuous cursor proximity tracking (desktop hover-to-expand)
    const rawPointer = { x: -9999, y: -9999, active: false };

    const onCanvasPointerDown = (e) => {
      activeTouches.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (activeTouches.size === 2) {
        const pts = Array.from(activeTouches.values());
        pinchStartDist = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
        pinchStartZoom = targetCameraZ;
        isDragging = false;
        return;
      }
      isDragging = true;
      spinVelocity = 0;
      lastPointerX = e.clientX;
      lastDragSampleTime = performance.now();
      dragStartX = e.clientX;
      dragStartY = e.clientY;
      dragStartTime = performance.now();
      dragMoved = false;
      canvas.style.cursor = "grabbing";
    };
    const onCanvasPointerMove = (e) => {
      if (activeTouches.has(e.pointerId)) activeTouches.set(e.pointerId, { x: e.clientX, y: e.clientY });

      if (activeTouches.size === 2 && pinchStartDist) {
        const pts = Array.from(activeTouches.values());
        const dist = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
        const scale = pinchStartDist / Math.max(dist, 1);
        targetCameraZ = Math.min(ZOOM_MAX, Math.max(ZOOM_MIN, pinchStartZoom * scale));
        return;
      }

      if (!isDragging) return;
      const now = performance.now();
      const dxPx = e.clientX - lastPointerX;
      if (Math.abs(e.clientX - dragStartX) > 6 || Math.abs(e.clientY - dragStartY) > 6) dragMoved = true;
      const dtSec = Math.max((now - lastDragSampleTime) / 1000, 0.001);
      const delta = dxPx * DRAG_SENSITIVITY;
      rotAngle += delta;
      spinVelocity = delta / dtSec;
      lastPointerX = e.clientX;
      lastDragSampleTime = now;
    };
    const endDrag = (e) => {
      if (e && activeTouches.has(e.pointerId)) activeTouches.delete(e.pointerId);
      if (activeTouches.size < 2) pinchStartDist = null;
      if (!isDragging) return;
      const wasTap = !dragMoved && performance.now() - dragStartTime < 350;
      isDragging = false;
      lastInteractionEnd = clock.getElapsedTime();
      if (prefersReduced) spinVelocity = 0;
      canvas.style.cursor = "grab";
      if (wasTap) collapseAll(null); // tapping empty globe space collapses any open region
    };
    canvas.style.cursor = "grab";
    canvas.addEventListener("pointerdown", onCanvasPointerDown);
    canvas.addEventListener("pointermove", onCanvasPointerMove);
    window.addEventListener("pointerup", endDrag);
    window.addEventListener("pointercancel", endDrag);

    const onHoverMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      rawPointer.x = e.clientX - rect.left;
      rawPointer.y = e.clientY - rect.top;
      rawPointer.active = true;
    };
    const onHoverLeave = () => {
      rawPointer.active = false;
    };
    canvas.addEventListener("pointermove", onHoverMove);
    canvas.addEventListener("pointerleave", onHoverLeave);

    /* ---------- Resize ---------- */
    const resize = () => {
      const w = stage.clientWidth;
      const h = stage.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      resizeStars();
    };
    resize();
    window.addEventListener("resize", resize);

    /* ---------- Animation loop ---------- */
    let raf;
    const tmpVec = new THREE.Vector3();
    const tmpVec2 = new THREE.Vector3();
    const PROXIMITY_PX = isSmallScreen ? 0 : 78; // mobile relies on tap, not ambient proximity

    const tick = () => {
      const t = clock.getElapsedTime();
      const dt = Math.min(t - lastT, 0.05);
      lastT = t;

      cameraZ += (targetCameraZ - cameraZ) * 0.12;
      camera.position.z = cameraZ;

      // The origin sequence briefly slows rotation to a near-stop, so the
      // click reads as a deliberate narrative beat rather than a page jump.
      const originElapsed = originSequenceStart !== null ? t - originSequenceStart : -1;
      const rotationMultiplier = originElapsed < 0 ? 1 : 1 - easeOutCubic(clamp01(originElapsed / 0.55));

      if (isDragging) {
        // rotation applied directly in onCanvasPointerMove
      } else if (Math.abs(spinVelocity) > 0.0005) {
        rotAngle += spinVelocity * dt * rotationMultiplier;
        spinVelocity *= Math.pow(0.02, dt);
        lastInteractionEnd = t;
      } else {
        spinVelocity = 0;
        if (t - lastInteractionEnd > RESUME_DELAY) rotAngle += dt * ROTATION_SPEED * rotationMultiplier;
      }

      planet.rotation.y = rotAngle;
      countryLines.rotation.y = rotAngle;
      pinsGroup.rotation.y = rotAngle;
      pinsGroup.updateMatrixWorld(true);

      if (!introDone) {
        const fadeIn = easeOutCubic(revealProgress(t, 0, GLOBAL_FADE_DUR));
        planetMat.uniforms.uOpacity.value = fadeIn;
        countryMat.opacity = COUNTRY_BASE_OPACITY * fadeIn;
        hubMat.opacity = easeOutCubic(revealProgress(t, HUB_APPEAR, HUB_DUR));
        if (t > INTRO_END) introDone = true;
      }

      // Mumbai hub: hover glow/scale, periodic ripple, and the origin-click pulse.
      const originPulse = originElapsed >= 0 ? Math.sin(clamp01(originElapsed / 1.3) * Math.PI) : 0;
      const originTraceBoost = originElapsed >= 0 ? Math.sin(clamp01(originElapsed / 1.1) * Math.PI) * 0.45 : 0;
      const hubHoverBoost = hubHovered ? 1 : 0;
      const hubScale = 1.7 * (1 + hubHoverBoost * 0.12 + originPulse * 0.3);
      hubSprite.scale.set(hubScale, hubScale, 1);
      if (introDone) hubMat.opacity = Math.min(1, 1 + hubHoverBoost * 0.15 + originPulse * 0.2);

      const rippleT = prefersReduced ? 1 : (t % RIPPLE_INTERVAL) / RIPPLE_INTERVAL;
      if (!prefersReduced && rippleT < 0.6) {
        const rp = rippleT / 0.6;
        rippleMat.opacity = (1 - rp) * 0.32;
        const rs = 1.7 + rp * 1.9;
        rippleSprite.scale.set(rs, rs, 1);
      } else {
        rippleMat.opacity = 0;
      }

      const rect = stage.getBoundingClientRect();
      const stageW = rect.width;
      const stageH = rect.height;

      // Live screen-space center + apparent radius of the globe — used by the
      // star fade boundary and the skill-label orbit ring so both always
      // track the globe's true on-screen size (responsive to zoom/resize).
      tmpVec2.set(0, 0, 0);
      tmpVec2.project(camera);
      const globeCenterPx = { x: (tmpVec2.x * 0.5 + 0.5) * stageW, y: (1 - (tmpVec2.y * 0.5 + 0.5)) * stageH };
      tmpVec2.set(GLOBE_RADIUS, 0, 0);
      tmpVec2.project(camera);
      const globeEdgePx = { x: (tmpVec2.x * 0.5 + 0.5) * stageW, y: (1 - (tmpVec2.y * 0.5 + 0.5)) * stageH };
      const globeScreenR = Math.hypot(globeEdgePx.x - globeCenterPx.x, globeEdgePx.y - globeCenterPx.y);
      if (onGlobeMetrics) onGlobeMetrics(globeCenterPx, globeScreenR, t, dt);

      // Mumbai chip position
      tmpVec.copy(hubSprite.position);
      hubSprite.getWorldPosition(tmpVec);
      if (tmpVec.z > 1) {
        tmpVec.project(camera);
        const mx = (tmpVec.x * 0.5 + 0.5) * stageW;
        const my = (1 - (tmpVec.y * 0.5 + 0.5)) * stageH;
        mumbaiChip.style.transform = `translate(${mx}px, ${my - 46}px) translate(-50%, -100%)`;
        mumbaiChip.classList.remove("is-hidden");
      } else {
        mumbaiChip.classList.add("is-hidden");
      }

      // Journey animation: every JOURNEY_INTERVAL seconds, a bright particle
      // travels Mumbai → one region (in sequence), that region glows on
      // arrival, then fades — purely derived from elapsed time, so it needs
      // no extra timers and can't drift out of sync.
      const journeyClockT = Math.max(t - INTRO_END, 0);
      const journeyCycle = journeyClockT % JOURNEY_INTERVAL;
      const journeyIdx = Math.floor(journeyClockT / JOURNEY_INTERVAL) % regionRuntime.length;
      const journeyTravelP = clamp01(journeyCycle / JOURNEY_TRAVEL);
      const journeyTraveling = !prefersReduced && introDone && journeyCycle < JOURNEY_TRAVEL;
      const journeyArrivedP = introDone ? clamp01((journeyCycle - JOURNEY_TRAVEL) / JOURNEY_GLOW) : 0;
      const journeyGlowing = !prefersReduced && introDone && journeyCycle >= JOURNEY_TRAVEL && journeyArrivedP < 1;
      if (journeyTraveling) {
        const jpt = regionRuntime[journeyIdx].regionCurve.getPointAt(journeyTravelP);
        journeySprite.position.copy(jpt);
        journeyMat.opacity = Math.sin(journeyTravelP * Math.PI) * 0.95;
      } else {
        journeyMat.opacity = 0;
      }

      regionRuntime.forEach((rt, rIdx) => {
        const reveal = introDone ? 1 : easeOutCubic(revealProgress(t, rt.appearAt, rt.dur));
        const arrivalBoost = journeyGlowing && rIdx === journeyIdx ? Math.sin(journeyArrivedP * Math.PI) : 0;
        const hoverBoost = rt.regionHovered ? 1 : 0;
        const boost = Math.min(1, arrivalBoost + hoverBoost * 0.7 + originTraceBoost);
        rt.anchorSprite.material.opacity = reveal * (0.95 + boost * 0.4);
        const pulse = 1 + 0.22 * Math.sin(t * 1.5 + rt.appearAt * 3) + boost * 0.5;
        rt.anchorSprite.scale.set(1.1 * pulse * reveal, 1.1 * pulse * reveal, 1);
        rt.uniSprites.forEach((s, i) => {
          const p = 1 + 0.2 * Math.sin(t * 1.7 + i) + boost * 0.35;
          const glow = rt.hoveredIdx === i ? 1.6 : 1;
          s.material.opacity = reveal * (0.85 + boost * 0.15);
          s.scale.set(0.55 * p * reveal * glow, 0.55 * p * reveal * glow, 1);
        });
        rt.regionArcMat.opacity = reveal * (0.38 + boost * 0.32);
        const tt = (t * 0.07 + rt.pulseOffset) % 1;
        const pt = rt.regionCurve.getPointAt(tt);
        rt.pulseSprite.position.copy(pt);
        rt.pulseSprite.material.opacity = Math.sin(tt * Math.PI) * 0.8 * reveal;

        rt.uniArcs.forEach((arc, i) => {
          arc.targetOpacity = rt.hoveredIdx === i ? 0.55 : 0;
          arc.curOpacity += (arc.targetOpacity - arc.curOpacity) * 0.1;
          arc.mat.opacity = arc.curOpacity * reveal;
        });

        // anchor screen position + front-facing test, drives chip transform + proximity expand
        tmpVec.copy(rt.anchorSprite.position);
        rt.anchorSprite.getWorldPosition(tmpVec);
        const frontFacing = tmpVec.z > 1.2;
        if (frontFacing && reveal > 0.5) {
          tmpVec.project(camera);
          const sx = (tmpVec.x * 0.5 + 0.5) * stageW;
          const sy = (1 - (tmpVec.y * 0.5 + 0.5)) * stageH;
          rt.regionChip.style.transform = `translate(${sx}px, ${sy - 30}px) translate(-50%, -100%)`;
          rt.regionChip.classList.remove("is-hidden");
          rt.uniChips.forEach((c) => c.classList.remove("is-hidden"));

          if (PROXIMITY_PX && !rt.expanded && rawPointer.active) {
            const canvasRect = canvas.getBoundingClientRect();
            const canvasSx = (sx / stageW) * canvasRect.width;
            const canvasSy = (sy / stageH) * canvasRect.height;
            const dist = Math.hypot(rawPointer.x - canvasSx, rawPointer.y - canvasSy);
            if (dist < PROXIMITY_PX) {
              clearTimeout(expandCollapseTimer);
              expandRegion(rt);
            }
          }
          if (rt.expanded) {
            // A fixed vertical list docked to whichever side margin is open
            // (left or right of the globe, based on where the anchor sits)
            // instead of fanning chips around the anchor itself — that kept
            // putting university names on top of country outlines and the
            // orbiting skill words. The list's position never depends on
            // the anchor's height, only its side, so it can't drift into the
            // top/bottom orbit-label band. A thin line ties the list back to
            // the region on the globe so it still reads as connected.
            const n = rt.uniChips.length;
            const onLeft = sx < stageW / 2;
            // Closer to center than the old 10%/90% split — that pinned the
            // list right on top of the stats column on the left and drew a
            // connector line clear across the screen. 24%/76% keeps it in
            // open canvas just outside the globe, clear of the stats strip,
            // and shortens the line noticeably.
            const listX = onLeft ? Math.max(230, stageW * 0.24) : Math.min(stageW - 230, stageW * 0.76);
            const rowGap = 36;
            const listStartY = Math.min(
              Math.max(140, stageH * 0.4 - ((n - 1) * rowGap) / 2),
              stageH - 140 - (n - 1) * rowGap
            );
            rt.uniChips.forEach((chip, i) => {
              const cy = listStartY + i * rowGap;
              chip.style.transform = `translate(${listX}px, ${cy}px) translate(-50%, -50%)`;
            });
            const dx = listX - sx;
            const dy = listStartY - sy;
            const dist = Math.hypot(dx, dy);
            const angle = Math.atan2(dy, dx);
            rt.connector.style.width = `${Math.max(0, dist - 56)}px`;
            rt.connector.style.transform = `translate(${sx}px, ${sy}px) rotate(${angle}rad)`;
            rt.connector.classList.add("is-visible");
          } else {
            rt.connector.classList.remove("is-visible");
          }
        } else {
          rt.regionChip.classList.add("is-hidden");
          rt.uniChips.forEach((c) => c.classList.add("is-hidden"));
          rt.connector.classList.remove("is-visible");
          if (rt.expanded) collapseRegion(rt);
        }

        // ambient proximity collapse when pointer wanders far from an expanded region
        if (rt.expanded && rawPointer.active && frontFacing && reveal > 0.5) {
          const canvasRect = canvas.getBoundingClientRect();
          const sx2 = (tmpVec.x * 0.5 + 0.5) * canvasRect.width;
          const sy2 = (1 - (tmpVec.y * 0.5 + 0.5)) * canvasRect.height;
          const dist2 = Math.hypot(rawPointer.x - sx2, rawPointer.y - sy2);
          if (dist2 > PROXIMITY_PX * 2.4) {
            clearTimeout(expandCollapseTimer);
            expandCollapseTimer = setTimeout(() => collapseRegion(rt), 450);
          }
        }
      });

      renderer.render(scene, camera);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    /* ---------- Text intro (now below the globe, waits for the globe to finish) ---------- */
    const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
    intro
      .fromTo(titleRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1.0, delay: prefersReduced ? 0.2 : INTRO_END + 0.1 })
      .fromTo(subRef.current, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.65")
      .fromTo(ctasRef.current, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.7 }, "-=0.5");
    if (quoteRef.current) {
      intro.fromTo(quoteRef.current, { opacity: 0 }, { opacity: 1, duration: 1.2 }, "-=0.2");
    }

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      clearTimeout(expandCollapseTimer);
      originTimers.forEach(clearTimeout);
      canvas.removeEventListener("wheel", onWheel);
      canvas.removeEventListener("pointerdown", onCanvasPointerDown);
      canvas.removeEventListener("pointermove", onCanvasPointerMove);
      canvas.removeEventListener("pointermove", onHoverMove);
      canvas.removeEventListener("pointerleave", onHoverLeave);
      if (showOrbitsAndStars) stage.removeEventListener("pointermove", onStageMove);
      window.removeEventListener("pointerup", endDrag);
      window.removeEventListener("pointercancel", endDrag);
      window.removeEventListener("resize", resize);
      intro.kill();
      disposables.forEach((d) => d.dispose && d.dispose());
      renderer.dispose();
    };
  }, []);

  return (
    <header className="hero" id="top">
      <div className="hero__stage" ref={stageRef}>
        <canvas ref={starCanvasRef} className="hero__stars" aria-hidden="true" />
        <canvas ref={canvasRef} className="hero__canvas" />
        <div className="hero__constellations" ref={constellationsRef} aria-hidden="true">
          {CONSTELLATIONS.map((c) => (
            <svg key={c.short} className={`constellation constellation--${c.corner}`} viewBox="-40 -30 80 60">
              {c.stars.slice(1).map((p, i) => (
                <line key={i} x1={c.stars[0][0]} y1={c.stars[0][1]} x2={p[0]} y2={p[1]} className="constellation__line" />
              ))}
              {c.stars.map((p, i) => (
                <circle key={i} cx={p[0]} cy={p[1]} r={i === 0 ? 2.2 : 1.4} className="constellation__star" />
              ))}
              <text x={c.stars[0][0]} y={c.stars[0][1] + 16} className="constellation__label">{c.short}</text>
            </svg>
          ))}
        </div>
        <div className="hero__orbitlayer" ref={orbitLayerRef} />
        <div className="hero__overlay" ref={overlayRef} />
        <div className="globe-card" ref={cardRef} />

        <div className="hero__stats">
          {TRUST_STATS.map((s, i) => (
            <HeroStat key={s.label} end={s.end} suffix={s.suffix} label={s.label} delay={1500 + i * 120} />
          ))}
        </div>

        <p className="hero__quote" ref={quoteRef}>
          &ldquo;The world&rsquo;s best universities don&rsquo;t create exceptional
          students. They admit them.&rdquo;
        </p>

        <div className="hero__zoombtns">
          <button type="button" aria-label="Zoom in" onClick={() => zoomActionRef.current(-2)}>+</button>
          <button type="button" aria-label="Zoom out" onClick={() => zoomActionRef.current(2)}>–</button>
        </div>
        <div className="hero__vignette" />
      </div>

      <div className="container hero__content">
        <h1 className="hero__title" ref={titleRef}>
          Build the student top universities <em>can&rsquo;t ignore.</em>
        </h1>
        <p className="lede text-muted hero__sub" ref={subRef}>
          Every great journey starts from Mumbai and reaches the world&rsquo;s top
          universities — a long-term mentorship ecosystem that transforms students
          from Grade 8 onwards into globally competitive applicants.
        </p>
        <div className="hero__ctas" ref={ctasRef}>
          <a href="/contact" className="btn btn--gold">
            Book Strategy Session
          </a>
          <a href="/stories" className="btn btn--ghost">
            Watch the Student Journey →
          </a>
        </div>
      </div>

      <div className="hero__scroll">
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </div>

      <UniversityPanel uni={selectedUni} onClose={() => setSelectedUni(null)} />
    </header>
  );
}
