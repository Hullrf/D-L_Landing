import { SOCIAL } from "@/lib/content";

// lucide v1 ya no trae logos de marcas: trazos propios, mismo estilo (24x24, stroke 2, sin relleno).
const ICONS: Record<(typeof SOCIAL)[number]["name"], React.ReactNode> = {
  Facebook: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
  Instagram: (
    <>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.5 6.5h.01" />
    </>
  ),
  YouTube: (
    <>
      <path d="M2.5 17a24.1 24.1 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.6 49.6 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.1 24.1 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.6 49.6 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </>
  ),
  Messenger: (
    <>
      <path d="M12 2.5C6.5 2.5 2.5 6.4 2.5 11.3c0 2.6 1.2 4.9 3.2 6.5v3.7l3.4-1.9c.9.3 1.9.4 2.9.4 5.5 0 9.5-3.9 9.5-8.7S17.5 2.5 12 2.5z" />
      <path d="m7 13.5 3.3-3.5 2.4 2.2 4.3-2.2" />
    </>
  ),
};

export default function SocialLinks({ label, className = "" }: { label: string; className?: string }) {
  return (
    <ul aria-label={label} className={`flex items-center gap-2 ${className}`}>
      {SOCIAL.map((s) => (
        <li key={s.name}>
          <a
            href={s.href}
            target="_blank"
            rel="noopener"
            aria-label={s.name}
            title={s.name}
            className="btn-press flex size-11 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition-colors duration-150 hover:border-[var(--brand)] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)]"
          >
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              {ICONS[s.name]}
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
}
