"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const INTERVAL_MS = 6000;

// Relleno mientras no haya imágenes reales: tres escenas de marca con el brillo en posiciones distintas.
const PLACEHOLDERS = [
  "radial-gradient(ellipse at 80% 25%, #7c2d12 0%, transparent 55%), linear-gradient(135deg, #0f172a, #1e293b)",
  "radial-gradient(ellipse at 20% 80%, #9a3412 0%, transparent 55%), linear-gradient(225deg, #0f172a, #172554)",
  "radial-gradient(ellipse at 60% 10%, #c2410c 0%, transparent 50%), linear-gradient(180deg, #111b2e, #0f172a)",
];

/** Fondo de portada que rota solo: fundido + zoom lento. Decorativo (aria-hidden). */
export default function HeroCarousel({ images }: { images: string[] }) {
  const slides = images.length ? images : PLACEHOLDERS;
  const [i, setI] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return;
    let timer: ReturnType<typeof setInterval> | undefined;
    const start = () => {
      timer = setInterval(() => setI((n) => (n + 1) % slides.length), INTERVAL_MS);
    };
    const onVisibility = () => {
      clearInterval(timer);
      if (!document.hidden) start();
    };
    start();
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      clearInterval(timer);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [slides.length]);

  return (
    <div aria-hidden className="absolute inset-0">
      {slides.map((s, n) => (
        <div key={s} className={`hero-slide absolute inset-0 ${n === i ? "hero-slide-active" : ""}`}>
          {images.length ? (
            <Image src={s} alt="" fill sizes="100vw" priority={n === 0} className="object-cover" />
          ) : (
            <div className="size-full" style={{ background: s }} />
          )}
        </div>
      ))}
      {/* Capa oscura: garantiza contraste del texto sobre cualquier imagen */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/92 via-[#0f172a]/78 to-[#0f172a]/45" />
    </div>
  );
}
