"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Check, Clock, FileText, Laptop, MessageCircle, X } from "lucide-react";
import { WaveArt } from "@/components/art";
import { btn, focus, Footer, Header } from "@/components/landing";
import { Reveal } from "@/components/motion";
import { usePrefs } from "@/components/prefs";
import { CATEGORY_COLORS, COURSES, WHATSAPP } from "@/lib/content";

const cover = (slug: string) => `/cursos/img/${slug}.webp`;
const whatsappFor = (text: string) => `${WHATSAPP}?text=${encodeURIComponent(text)}`;

function CourseDialog({ slug, dialogRef }: { slug: string | null; dialogRef: React.RefObject<HTMLDialogElement | null> }) {
  const { t } = usePrefs();
  const c = t.courses;
  const meta = COURSES.find((x) => x.slug === slug);
  const item = slug ? c.items[slug] : null;
  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="course-dialog-title"
      // Clic en el fondo (fuera del panel) cierra
      onClick={(e) => e.target === e.currentTarget && e.currentTarget.close()}
      className="course-dialog m-auto w-[calc(100%-2rem)] max-w-4xl overflow-hidden rounded-2xl border border-border bg-card p-0 text-foreground shadow-2xl backdrop:bg-[#0f172a]/70 backdrop:backdrop-blur-sm"
    >
      {meta && item && (
        <div className="grid max-h-[88dvh] overflow-y-auto md:grid-cols-[2fr_3fr] md:overflow-hidden">
          <div className="relative h-48 bg-[var(--graphite)] md:h-auto">
            <Image src={cover(meta.slug)} alt="" fill sizes="(min-width: 768px) 360px, 100vw" className="object-cover" />
          </div>
          <div className="flex flex-col md:max-h-[88dvh] md:overflow-y-auto">
            <div className="p-6 sm:p-8">
              <p className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <span className="size-2.5 rounded-full" style={{ backgroundColor: CATEGORY_COLORS[meta.category] }} aria-hidden />
                {c.categories[meta.category]}
              </p>
              <h2 id="course-dialog-title" className="font-display mt-2 pr-8 text-2xl font-bold leading-tight sm:text-3xl">
                {item.title}
              </h2>
              <ul className="mt-4 flex flex-wrap gap-2 text-sm font-semibold">
                <li className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-accent-foreground">
                  <Clock className="size-4" aria-hidden /> {c.hours(meta.hours)}
                </li>
                <li className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-secondary-foreground">
                  <Laptop className="size-4" aria-hidden /> {c.virtual}
                </li>
              </ul>
              <p className="mt-5 leading-relaxed text-muted-foreground">{item.description}</p>

              <h3 className="font-display mt-6 text-lg font-semibold">{c.modulesTitle}</h3>
              <ul className="mt-3 space-y-2">
                {item.modules.map((m) => (
                  <li key={m} className="flex gap-2.5 text-[0.95rem] leading-snug">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={3} aria-hidden />
                    {m}
                  </li>
                ))}
              </ul>

              <h3 className="font-display mt-6 text-lg font-semibold">{c.audienceTitle}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {item.audience.map((a) => (
                  <li key={a} className="rounded-lg border border-border px-3 py-1.5 text-sm text-muted-foreground">{a}</li>
                ))}
              </ul>
            </div>
            <div className="sticky bottom-0 mt-auto flex flex-wrap gap-2 border-t border-border bg-card p-3 sm:gap-3 sm:p-4 sm:px-8">
              <a href={`/cursos/pdf/${meta.slug}.pdf`} target="_blank" rel="noopener" className={`${btn} flex-1 whitespace-nowrap max-sm:py-2.5 bg-primary text-primary-foreground hover:bg-[#9a3412]`}>
                <FileText className="size-5" aria-hidden /> {c.brochure}
              </a>
              <a href={whatsappFor(c.askMessage(item.title))} target="_blank" rel="noopener" className={`${btn} flex-1 whitespace-nowrap max-sm:py-2.5 border border-border bg-card text-foreground hover:bg-secondary`}>
                <MessageCircle className="size-5" aria-hidden /> {c.ask}
              </a>
            </div>
          </div>
        </div>
      )}
      <button
        type="button"
        onClick={() => dialogRef.current?.close()}
        aria-label={c.close}
        className={`btn-press absolute right-3 top-3 flex size-10 items-center justify-center rounded-full bg-card/90 text-foreground shadow-md backdrop-blur hover:bg-secondary ${focus}`}
      >
        <X className="size-5" aria-hidden />
      </button>
    </dialog>
  );
}

function CourseGrid() {
  const { t } = usePrefs();
  const c = t.courses;
  const [slug, setSlug] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const open = (s: string) => {
    setSlug(s);
    dialogRef.current?.showModal();
  };
  return (
    <>
      <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {COURSES.map((m, i) => {
          const item = c.items[m.slug];
          return (
            <li key={m.slug}>
              <Reveal delay={(i % 3) * 70} className="h-full">
                <button
                  type="button"
                  onClick={() => open(m.slug)}
                  aria-haspopup="dialog"
                  aria-label={c.open(item.title)}
                  className={`service-card group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-border bg-card text-left ${focus}`}
                >
                  <span className="relative block h-40 w-full overflow-hidden bg-[var(--graphite)]">
                    <Image src={cover(m.slug)} alt="" fill sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 100vw" className="object-cover" />
                  </span>
                  <span className="flex flex-1 flex-col p-5">
                    <span className="mb-2 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5">
                        <span className="size-2 rounded-full" style={{ backgroundColor: CATEGORY_COLORS[m.category] }} aria-hidden />
                        {c.categories[m.category]}
                      </span>
                      <span className="tabular-nums">{c.hours(m.hours)}</span>
                    </span>
                    <span className="font-display mb-2 line-clamp-2 text-xl font-semibold leading-snug">{item.title}</span>
                    <span className="line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">{item.summary}</span>
                    <span className="mt-4 text-sm font-semibold text-primary group-hover:underline group-hover:underline-offset-4">{c.details}</span>
                  </span>
                </button>
              </Reveal>
            </li>
          );
        })}
      </ul>
      <CourseDialog slug={slug} dialogRef={dialogRef} />
    </>
  );
}

export default function Courses() {
  const { t } = usePrefs();
  const c = t.courses;
  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden bg-[var(--graphite)] text-white">
          <WaveArt className="[mask-image:linear-gradient(to_right,transparent_25%,#000_75%)]" />
          <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-14 md:pb-20 md:pt-20">
            <h1 className="font-display max-w-3xl text-4xl font-bold leading-[1.05] sm:text-5xl">{c.title}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-200">{c.intro}</p>
          </div>
        </section>
        <section className="mx-auto max-w-6xl px-5 py-14 md:py-16" aria-label={c.title}>
          <CourseGrid />
        </section>
        <section className="mx-auto max-w-6xl px-5 pb-20">
          <div className="flex flex-col items-start gap-5 rounded-2xl border border-border bg-accent p-8 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="font-display text-2xl font-bold text-accent-foreground sm:text-3xl">{c.ctaTitle}</h2>
              <p className="mt-2 max-w-xl leading-relaxed text-foreground/80">{c.ctaText}</p>
            </div>
            <a href={WHATSAPP} target="_blank" rel="noopener" className={`${btn} shrink-0 bg-primary text-primary-foreground hover:bg-[#9a3412]`}>
              <MessageCircle className="size-5" aria-hidden /> {c.ctaButton}
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
