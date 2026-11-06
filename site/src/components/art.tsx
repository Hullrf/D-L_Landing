/** Fondo vectorial de marca: rejilla de puntos, ondas y brillo naranja. Decorativo. */
export function WaveArt({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1200 600"
      preserveAspectRatio="xMidYMid slice"
      className={`pointer-events-none absolute inset-0 size-full ${className}`}
    >
      <defs>
        <radialGradient id="glow" cx="78%" cy="30%" r="55%">
          <stop offset="0%" stopColor="#ea580c" stopOpacity="0.38" />
          <stop offset="100%" stopColor="#ea580c" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="line" x1="0" x2="1">
          <stop offset="0%" stopColor="#fb923c" stopOpacity="0" />
          <stop offset="55%" stopColor="#fb923c" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#fdba74" stopOpacity="0.15" />
        </linearGradient>
        <pattern id="dots" width="28" height="28" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.2" fill="#94a3b8" fillOpacity="0.22" />
        </pattern>
      </defs>
      <rect width="1200" height="600" fill="url(#dots)" />
      <rect width="1200" height="600" fill="url(#glow)" />
      <g fill="none" stroke="url(#line)" strokeWidth="1.4">
        {Array.from({ length: 9 }).map((_, i) => (
          <path
            key={i}
            className="wave-line"
            style={{ animationDelay: `${i * -1.4}s` }}
            d={`M-40 ${330 + i * 22} C 200 ${230 + i * 14}, 420 ${470 - i * 10}, 640 ${360 + i * 12} S 1000 ${250 + i * 16}, 1260 ${340 + i * 8}`}
          />
        ))}
      </g>
    </svg>
  );
}
