"use client";

import Image from "next/image";
import { BadgeCheck, Check, Clock, FlaskConical, GraduationCap, HardHat, Leaf, LockKeyhole, Mail, MapPin, MessageCircle, Moon, Phone, School, Sun, Truck } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { WaveArt } from "@/components/art";
import { Counter, Reveal } from "@/components/motion";
import { usePrefs } from "@/components/prefs";
import { CLIENT_LOGOS, EMAIL, LMS_URL, PHONE, PHONE_HREF, WHATSAPP, type Lang } from "@/lib/content";

const focus = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)]";
const btn = `btn-press inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-base font-semibold transition-colors duration-150 ${focus}`;
const btnPrimary = `${btn} bg-primary text-primary-foreground hover:bg-[#9a3412]`;
const btnOutline = `${btn} border border-border bg-card text-foreground hover:bg-secondary`;

function LangSwitch() {
  const { lang, setLang, t } = usePrefs();
  const opt = (l: Lang, label: string) => (
    <button
      type="button"
      onClick={() => setLang(l)}
      aria-pressed={lang === l}
      lang={l}
      className={`min-h-9 rounded-md px-2.5 text-sm font-semibold transition-colors duration-150 ${focus} ${
        lang === l ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
      }`}
    >
      {label}
    </button>
  );
  return (
    <div role="group" aria-label={t.ui.langLabel} className="flex items-center gap-0.5 rounded-lg border border-border bg-card p-0.5">
      {opt("es", "ES")}
      {opt("en", "EN")}
    </div>
  );
}

function ThemeToggle() {
  const { theme, toggleTheme, t } = usePrefs();
  const dark = theme === "dark";
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={dark ? t.ui.themeToLight : t.ui.themeToDark}
      className={`btn-press flex size-11 items-center justify-center rounded-lg border border-border bg-card text-foreground transition-colors duration-150 hover:bg-secondary ${focus}`}
    >
      {dark ? <Sun className="size-5" aria-hidden /> : <Moon className="size-5" aria-hidden />}
    </button>
  );
}

function Header() {
  const { t } = usePrefs();
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-5">
        <a href="#inicio" className={`flex shrink-0 items-center gap-2.5 ${focus}`} aria-label={t.ui.homeLabel}>
          <Image src="/img/icon-light.png" alt="" width={256} height={256} className="logo-on-light size-11" priority />
          <Image src="/img/icon-dark.png" alt="" width={256} height={256} className="logo-on-dark size-11" priority />
          <span className="font-display text-lg font-bold leading-tight max-[430px]:hidden">
            D&amp;L <span className="block text-sm font-semibold text-muted-foreground">Quality Consulting</span>
          </span>
        </a>
        <nav aria-label={t.ui.mainNav} className="hidden items-center gap-6 lg:flex">
          {t.nav.map((n) => (
            <a key={n.href} href={n.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <LangSwitch />
          <ThemeToggle />
          <a href={LMS_URL} className={`${btnPrimary} max-sm:hidden !py-2 text-sm`}>
            <GraduationCap className="size-4" aria-hidden /> {t.ui.campus}
          </a>
          <details className="relative lg:hidden">
            <summary
              className="flex size-11 cursor-pointer list-none items-center justify-center rounded-lg border border-border bg-card text-sm font-semibold [&::-webkit-details-marker]:hidden"
              aria-label={t.ui.menuOpen}
            >
              {t.ui.menu}
            </summary>
            <div className="absolute right-0 mt-2 w-56 rounded-xl border border-border bg-card p-2 shadow-lg">
              {t.nav.map((n) => (
                <a key={n.href} href={n.href} className="block rounded-lg px-3 py-3 text-base font-medium hover:bg-secondary">
                  {n.label}
                </a>
              ))}
              <a href={LMS_URL} className="mt-1 block rounded-lg bg-primary px-3 py-3 text-base font-semibold text-primary-foreground">
                {t.ui.campus}
              </a>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  const { t } = usePrefs();
  const btnBrand = `${btn} bg-[var(--brand)] text-[#0f172a] hover:bg-orange-400`;
  const btnGhost = `${btn} border border-slate-500 text-white hover:bg-white/10`;
  return (
    <section id="inicio" className="relative overflow-hidden bg-[var(--graphite)] text-white">
      <WaveArt className="[mask-image:linear-gradient(to_right,transparent_30%,#000_70%)]" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 pb-24 pt-16 md:grid-cols-[1.15fr_0.85fr] md:items-center md:pt-28">
        <div>
          <h1 className="font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">{t.hero.title}</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">{t.hero.text}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contacto" className={btnBrand}>{t.hero.cta}</a>
            <a href="#servicios" className={btnGhost}>{t.hero.ctaSecondary}</a>
          </div>
        </div>
        <aside aria-label={t.hero.normsTitle} className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl backdrop-blur-md">
          <p className="font-display text-lg font-semibold">{t.hero.normsTitle}</p>
          <ul className="mt-4 divide-y divide-white/10">
            {t.hero.norms.map((n, i) => (
              <li key={n} className="norm-item flex items-center gap-3 py-3" style={{ ["--i" as string]: i }}>
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[var(--brand)] text-[#0f172a]">
                  <svg className="norm-check size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden style={{ ["--i" as string]: i }}>
                    <path d="M4 12.5l5 5L20 6.5" />
                  </svg>
                </span>
                <span className="text-base font-medium">{n}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}

function Stats() {
  const { t } = usePrefs();
  return (
    <section className="border-b border-border bg-card">
      <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-y-8 px-5 py-12 md:grid-cols-4">
        {t.stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 80} className="px-2 text-center md:border-l md:border-border md:first:border-l-0">
            <dd className="font-display text-5xl font-bold text-primary sm:text-6xl">
              <Counter value={s.value} suffix={s.suffix} />
            </dd>
            <dt className="mx-auto mt-2 max-w-[14rem] text-sm leading-snug text-muted-foreground">{s.label}</dt>
          </Reveal>
        ))}
      </dl>
    </section>
  );
}

function About() {
  const { t } = usePrefs();
  return (
    <section id="nosotros" className="border-y border-border bg-card">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="font-display max-w-2xl text-3xl font-bold sm:text-4xl">{t.about.title}</h2>
        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {t.about.pillars.map((p) => (
            <div key={p.title} className="border-t-2 border-[var(--brand)] pt-5">
              <h3 className="font-display text-xl font-semibold">{p.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const SERVICE_ICONS = [BadgeCheck, HardHat, Leaf, School, LockKeyhole, Truck, FlaskConical, GraduationCap];

function Services() {
  const { t } = usePrefs();
  const last = t.services.items.length - 1;
  return (
    <section id="servicios" className="mx-auto max-w-6xl px-5 py-20">
      <Reveal>
        <h2 className="font-display text-3xl font-bold sm:text-4xl">{t.services.title}</h2>
        <p className="mt-3 max-w-2xl text-lg text-muted-foreground">{t.services.intro}</p>
      </Reveal>
      <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {t.services.items.map((s, i) => {
          const Icon = SERVICE_ICONS[i];
          return (
            <li key={s.title}>
              <Reveal delay={(i % 4) * 70} className="h-full">
                <article className="service-card flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card">
                  <div className="relative flex h-32 items-end justify-between overflow-hidden bg-[var(--graphite)] p-4">
                    <WaveArt className="opacity-60" />
                    <Icon className="service-icon relative size-12 text-[var(--brand)]" strokeWidth={1.5} aria-hidden />
                    <span className="relative max-w-[9rem] rounded-full bg-white/10 px-3 py-1 text-right text-xs font-semibold leading-tight text-white">{s.norm}</span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-display text-lg font-semibold leading-snug">{s.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                    <a
                      href={i === last ? LMS_URL : "#contacto"}
                      className={`mt-4 text-sm font-semibold text-primary underline-offset-4 hover:underline ${focus}`}
                    >
                      {i === last
                        ? t.services.campusLink
                        : s.norm.startsWith("ISO")
                          ? `${t.services.consult} ${s.norm.split(":")[0]}`
                          : t.services.consultGeneric}
                    </a>
                  </div>
                </article>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function Clients() {
  const { t } = usePrefs();
  const logos = (dup: boolean) =>
    CLIENT_LOGOS.map((f, i) => (
      <li key={`${dup ? "d" : "o"}${f}`} className={`mx-2 flex h-24 w-40 shrink-0 items-center justify-center rounded-xl border border-border bg-white p-3 ${dup ? "marquee-dup" : ""}`} aria-hidden={dup || undefined}>
        <Image src={`/img/clientes/${f}`} alt={dup ? "" : t.clients.alt(i + 1)} width={160} height={80} className="client-logo max-h-full w-auto object-contain" />
      </li>
    ));
  return (
    <section id="clientes" className="border-y border-border bg-card">
      <div className="mx-auto max-w-6xl px-5 pt-20">
        <Reveal>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">{t.clients.title}</h2>
        </Reveal>
      </div>
      <div className="marquee overflow-hidden py-12 [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
        <ul className="marquee-track">
          {logos(false)}
          {logos(true)}
        </ul>
      </div>
    </section>
  );
}

function Policy() {
  const { t } = usePrefs();
  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-2">
      <div>
        <h2 className="font-display text-3xl font-bold sm:text-4xl">{t.policy.title}</h2>
        <p className="mt-5 max-w-prose text-lg leading-relaxed text-muted-foreground">{t.policy.text}</p>
      </div>
      <div>
        <h2 className="font-display text-3xl font-bold sm:text-4xl">{t.policy.valuesTitle}</h2>
        <ul className="mt-5 flex flex-wrap gap-3">
          {t.policy.values.map((v) => (
            <li key={v} className="rounded-full border border-border bg-accent px-5 py-2 font-display text-lg font-semibold text-accent-foreground">
              {v}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Faq() {
  const { t } = usePrefs();
  return (
    <section id="faq" className="mx-auto max-w-3xl px-5 pb-20">
      <h2 className="font-display text-3xl font-bold sm:text-4xl">{t.faq.title}</h2>
      <Accordion type="single" collapsible className="mt-8">
        {t.faq.items.map((f, i) => (
          <AccordionItem key={f.q} value={`q${i}`}>
            <AccordionTrigger className="text-left text-lg font-semibold">{f.q}</AccordionTrigger>
            <AccordionContent className="text-base leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

function Contact() {
  const { t } = usePrefs();
  const item = "flex items-start gap-3";
  const link = `underline-offset-4 hover:underline ${focus}`;
  return (
    <section id="contacto" className="relative overflow-hidden bg-[var(--graphite)] text-slate-100">
      <WaveArt />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-24 md:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">{t.contact.title}</h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-slate-300">{t.contact.text}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={WHATSAPP} className={`${btn} bg-[var(--brand)] text-[#0f172a] hover:bg-orange-400`}>
              <MessageCircle className="size-5" aria-hidden /> {t.contact.whatsapp}
            </a>
            <a href={`mailto:${EMAIL}`} className={`${btn} border border-slate-600 text-white hover:bg-slate-800`}>
              {t.contact.email}
            </a>
          </div>
        </div>
        <ul className="space-y-5 text-base">
          <li className={item}><Phone className="mt-1 size-5 shrink-0 text-orange-400" aria-hidden /><a className={link} href={PHONE_HREF}>{PHONE}</a></li>
          <li className={item}><Mail className="mt-1 size-5 shrink-0 text-orange-400" aria-hidden /><a className={link} href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
          <li className={item}><MapPin className="mt-1 size-5 shrink-0 text-orange-400" aria-hidden /><span>{t.contact.address}</span></li>
          <li className={item}><Clock className="mt-1 size-5 shrink-0 text-orange-400" aria-hidden /><span>{t.contact.hours}</span></li>
          <li className={item}><Check className="mt-1 size-5 shrink-0 text-orange-400" aria-hidden /><span>{t.contact.coverage}</span></li>
        </ul>
      </div>
    </section>
  );
}

function Footer() {
  const { t } = usePrefs();
  return (
    <footer className="bg-[var(--graphite)] text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 border-t border-slate-800 px-5 py-10 md:flex-row md:items-center md:justify-between">
        <Image src="/img/logo-dark.png" alt="D&L Quality Consulting" width={720} height={639} className="h-32 w-auto self-center object-contain md:self-auto" />
        <nav aria-label={t.ui.footerNav} className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {t.nav.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-white">{n.label}</a>
          ))}
          <a href={LMS_URL} className="hover:text-white">{t.ui.campus}</a>
        </nav>
        <p className="text-sm">{t.footer.credit}</p>
      </div>
    </footer>
  );
}

export default function Landing() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Clients />
        <Policy />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
