import Image from "next/image";
import { Check, Mail, MapPin, Phone, Clock, MessageCircle, GraduationCap } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ADDRESS, CLIENT_LOGOS, EMAIL, FAQ, HOURS, LMS_URL, NAV, NORMS, PHONE, PHONE_HREF,
  PILLARS, QUALITY_POLICY, SERVICES, VALUES, WHATSAPP,
} from "@/lib/content";

const btn =
  "btn-press inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-base font-semibold transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)]";
const btnPrimary = `${btn} bg-primary text-primary-foreground hover:bg-[#9a3412]`;
const btnOutline = `${btn} border border-border bg-card text-foreground hover:bg-secondary`;

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <a href="#inicio" className="flex shrink-0 items-center gap-2.5" aria-label="D&L Quality Consulting, inicio">
          <Image src="/img/icon-light.png" alt="" width={256} height={256} className="logo-on-light size-11" priority />
          <Image src="/img/icon-dark.png" alt="" width={256} height={256} className="logo-on-dark size-11" priority />
          <span className="font-display text-lg font-bold leading-tight">
            D&amp;L <span className="block text-sm font-semibold text-muted-foreground">Quality Consulting</span>
          </span>
        </a>
        <nav aria-label="Principal" className="hidden items-center gap-6 md:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href={LMS_URL} className={`${btnPrimary} max-sm:hidden !py-2 text-sm`}>
            <GraduationCap className="size-4" aria-hidden /> Campus virtual
          </a>
          <details className="relative md:hidden">
            <summary className="flex size-11 cursor-pointer list-none items-center justify-center rounded-lg border border-border bg-card text-sm font-semibold [&::-webkit-details-marker]:hidden" aria-label="Abrir menú">
              Menú
            </summary>
            <div className="absolute right-0 mt-2 w-56 rounded-xl border border-border bg-card p-2 shadow-lg">
              {NAV.map((n) => (
                <a key={n.href} href={n.href} className="block rounded-lg px-3 py-3 text-base font-medium hover:bg-secondary">
                  {n.label}
                </a>
              ))}
              <a href={LMS_URL} className="mt-1 block rounded-lg bg-primary px-3 py-3 text-base font-semibold text-primary-foreground">
                Campus virtual
              </a>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="mx-auto grid max-w-6xl gap-12 px-5 pb-20 pt-14 md:grid-cols-[1.15fr_0.85fr] md:items-center md:pt-24">
      <div>
        <h1 className="font-display text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
          Certificar su organización es un camino. Lo recorremos con usted.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Somos consultores en sistemas de gestión y HSEQ. Diseñamos, implementamos y auditamos con usted los sistemas que su empresa necesita, en todo Colombia.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#contacto" className={btnPrimary}>Solicitar una asesoría</a>
          <a href="#servicios" className={btnOutline}>Ver servicios</a>
        </div>
      </div>
      <aside aria-label="Normas en las que trabajamos" className="rounded-2xl border border-border bg-card p-6 shadow-sm">
        <p className="font-display text-lg font-semibold">Normas en las que trabajamos</p>
        <ul className="mt-4 divide-y divide-border">
          {NORMS.map((n, i) => (
            <li key={n} className="norm-item flex items-center gap-3 py-3" style={{ ["--i" as string]: i }}>
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <svg className="norm-check size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden style={{ ["--i" as string]: i }}>
                  <path d="M4 12.5l5 5L20 6.5" />
                </svg>
              </span>
              <span className="text-base font-medium">{n}</span>
            </li>
          ))}
        </ul>
      </aside>
    </section>
  );
}

function About() {
  return (
    <section id="nosotros" className="border-y border-border bg-card">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="font-display max-w-2xl text-3xl font-bold sm:text-4xl">Por qué elegirnos</h2>
        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {PILLARS.map((p) => (
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

function Services() {
  return (
    <section id="servicios" className="mx-auto max-w-6xl px-5 py-20">
      <h2 className="font-display text-3xl font-bold sm:text-4xl">Nuestros servicios</h2>
      <p className="mt-3 max-w-2xl text-lg text-muted-foreground">Cada servicio responde a una norma. Cuéntenos cuál necesita su organización.</p>
      <ul className="mt-10 divide-y divide-border border-y border-border">
        {SERVICES.map((s) => (
          <li key={s.title} className="grid gap-2 py-6 md:grid-cols-[14rem_1fr_auto] md:items-center md:gap-8">
            <p className="font-display text-base font-semibold text-primary">{s.norm}</p>
            <div>
              <h3 className="font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-1 leading-relaxed text-muted-foreground">{s.text}</p>
            </div>
            <a
              href={s.norm === "Formación" ? LMS_URL : "#contacto"}
              className="text-sm font-semibold text-primary underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)]"
            >
              {s.norm === "Formación" ? "Ir al campus virtual" : `Consultar ${s.norm.split(" ")[0] === "ISO" ? s.norm.split(":")[0] : "este servicio"}`}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Clients() {
  return (
    <section id="clientes" className="border-y border-border bg-card">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="font-display text-3xl font-bold sm:text-4xl">Organizaciones que confían en nosotros</h2>
        <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6">
          {CLIENT_LOGOS.map((f, i) => (
            <li key={f} className="flex h-24 items-center justify-center rounded-xl border border-border bg-white p-3">
              <Image src={`/img/clientes/${f}`} alt={`Logo de organización cliente ${i + 1}`} width={160} height={80} className="client-logo max-h-full w-auto object-contain" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Policy() {
  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-2">
      <div>
        <h2 className="font-display text-3xl font-bold sm:text-4xl">Política de calidad</h2>
        <p className="mt-5 max-w-prose text-lg leading-relaxed text-muted-foreground">{QUALITY_POLICY}</p>
      </div>
      <div>
        <h2 className="font-display text-3xl font-bold sm:text-4xl">Nuestros valores</h2>
        <ul className="mt-5 flex flex-wrap gap-3">
          {VALUES.map((v) => (
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
  return (
    <section id="faq" className="mx-auto max-w-3xl px-5 pb-20">
      <h2 className="font-display text-3xl font-bold sm:text-4xl">Preguntas frecuentes</h2>
      <Accordion type="single" collapsible className="mt-8">
        {FAQ.map((f, i) => (
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
  const item = "flex items-start gap-3";
  const link = "underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)]";
  return (
    <section id="contacto" className="bg-[var(--graphite)] text-slate-100">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">Certifique su organización con nosotros</h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-slate-300">Cuéntenos qué norma necesita y le respondemos en horario de oficina.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={WHATSAPP} className={`${btn} bg-[var(--brand)] text-[#0f172a] hover:bg-orange-400`}>
              <MessageCircle className="size-5" aria-hidden /> Escribir por WhatsApp
            </a>
            <a href={`mailto:${EMAIL}`} className={`${btn} border border-slate-600 text-white hover:bg-slate-800`}>
              Enviar un correo
            </a>
          </div>
        </div>
        <ul className="space-y-5 text-base">
          <li className={item}><Phone className="mt-1 size-5 shrink-0 text-orange-400" aria-hidden /><a className={link} href={PHONE_HREF}>{PHONE}</a></li>
          <li className={item}><Mail className="mt-1 size-5 shrink-0 text-orange-400" aria-hidden /><a className={link} href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
          <li className={item}><MapPin className="mt-1 size-5 shrink-0 text-orange-400" aria-hidden /><span>{ADDRESS}</span></li>
          <li className={item}><Clock className="mt-1 size-5 shrink-0 text-orange-400" aria-hidden /><span>{HOURS}</span></li>
          <li className={item}><Check className="mt-1 size-5 shrink-0 text-orange-400" aria-hidden /><span>Cobertura en todo Colombia.</span></li>
        </ul>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[var(--graphite)] text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 border-t border-slate-800 px-5 py-10 md:flex-row md:items-center md:justify-between">
        <Image src="/img/logo-dark.png" alt="D&L Quality Consulting" width={720} height={639} className="h-32 w-auto" />
        <nav aria-label="Pie de página" className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-white">{n.label}</a>
          ))}
          <a href={LMS_URL} className="hover:text-white">Campus virtual</a>
        </nav>
        <p className="text-sm">
          © 2026 D&amp;L Quality Consulting. Sitio desarrollado por David Santiago Rodríguez Cardona.
        </p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
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
