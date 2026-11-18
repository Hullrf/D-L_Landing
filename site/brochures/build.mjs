// Genera los brochures de /cursos (public/cursos/pdf/<slug>.pdf) desde src/lib/content.ts.
// Uso: node brochures/build.mjs [slug]   (requiere Node 22.6+ y Brave o Chrome instalado)
// Imágenes: brochures/img/<slug>-portada.webp|jpg|png y <slug>-detalle.*; sin portada usa la del sitio.
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { CATEGORY_COLORS, CONTENT, COURSES, EMAIL, PHONE, whatsappFor } from "../src/lib/content.ts";

const here = dirname(fileURLToPath(import.meta.url));
const site = resolve(here, "..");
const tmp = join(here, ".build");
mkdirSync(tmp, { recursive: true });

const BROWSERS = [
  process.env.CHROME_PATH,
  "C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe",
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "/usr/bin/google-chrome",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
].filter(Boolean);
const browser = BROWSERS.find((p) => existsSync(p));
if (!browser) throw new Error("No encontré Brave ni Chrome; define CHROME_PATH.");

const t = CONTENT.es.courses;
const WEB = "https://dylqualityconsulting.com/cursos";
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const url = (p) => pathToFileURL(p).href;
const findImg = (name) =>
  ["webp", "jpg", "jpeg", "png"].map((e) => join(here, "img", `${name}.${e}`)).find((p) => existsSync(p));

// Ondas de la portada del sitio (WaveArt en src/components/art.tsx), estáticas.
const waves = Array.from({ length: 9 }, (_, i) =>
  `<path d="M-40 ${330 + i * 22} C 200 ${230 + i * 14}, 420 ${470 - i * 10}, 640 ${360 + i * 12} S 1000 ${250 + i * 16}, 1260 ${340 + i * 8}"/>`).join("");
const waveArt = `<svg class="waves" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
<defs><radialGradient id="g" cx="78%" cy="30%" r="55%"><stop offset="0" stop-color="#ea580c" stop-opacity=".38"/><stop offset="1" stop-color="#ea580c" stop-opacity="0"/></radialGradient>
<linearGradient id="l" x1="0" x2="1"><stop offset="0" stop-color="#fb923c" stop-opacity="0"/><stop offset=".55" stop-color="#fb923c" stop-opacity=".55"/><stop offset="1" stop-color="#fdba74" stop-opacity=".15"/></linearGradient>
<pattern id="d" width="28" height="28" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.2" fill="#94a3b8" fill-opacity=".22"/></pattern></defs>
<rect width="1200" height="600" fill="url(#d)"/><rect width="1200" height="600" fill="url(#g)"/>
<g fill="none" stroke="url(#l)" stroke-width="1.4">${waves}</g></svg>`;

// Arcos del logo D&L alrededor de la foto de portada.
const arcs = `<svg class="arcs" viewBox="0 0 100 100" aria-hidden="true" fill="none" stroke="#ea580c" stroke-linecap="round">
<path d="M58 3 A47 47 0 0 1 97 42" stroke-width="2.2"/><path d="M3 58 A47 47 0 0 0 42 97" stroke-width="2.2"/><circle cx="94" cy="50" r="1.6" fill="#ea580c" stroke="none"/></svg>`;

const css = `
@page { size: 720px 1280px; margin: 0; }
* { box-sizing: border-box; margin: 0; padding: 0; }
html { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
body { font-family: Figtree, sans-serif; color: #0f172a; font-size: 25px; line-height: 1.5; }
h1, h2, .display { font-family: "Bricolage Grotesque", sans-serif; letter-spacing: -0.02em; line-height: 1.05; }
.page { width: 720px; height: 1280px; position: relative; overflow: hidden; page-break-after: always; padding: 64px 60px; display: flex; flex-direction: column; }
.page:last-child { page-break-after: auto; }
.dark { background: #0f172a; color: #e2e8f0; }
.light { background: #f8fafc; }
.waves { position: absolute; inset: 0; width: 100%; height: 100%; }
.page > :not(.waves), .cta > :not(.waves) { position: relative; }
a { color: inherit; text-decoration: none; }

.top { display: flex; align-items: center; gap: 18px; font-size: 21px; color: #94a3b8; }
.top img { width: 74px; }
.top b { display: block; color: #f1f5f9; font-family: "Bricolage Grotesque"; font-size: 24px; letter-spacing: -0.01em; }

.cover { margin: 40px 0 0 -6px; width: 612px; flex: 1; min-height: 300px; position: relative; }
.cover .photo { position: absolute; inset: 26px; border-radius: 28px; background: #1e293b center/cover no-repeat; }
.arcs { position: absolute; inset: 0; width: 100%; height: 100%; }
.cat { margin-top: 40px; display: flex; align-items: center; gap: 12px; font-size: 22px; color: #94a3b8; }
.dot { width: 14px; height: 14px; border-radius: 50%; }
h1 { margin-top: 14px; font-size: 62px; font-weight: 800; color: #fff; }
.summary { margin-top: 24px; font-size: 26px; color: #cbd5e1; max-width: 34ch; }
.chips { margin-top: 36px; display: flex; flex-wrap: wrap; gap: 14px; }
.chip { border-radius: 999px; padding: 10px 24px; font-weight: 600; font-size: 23px; background: #1e293b; color: #e2e8f0; }
.chip.hot { background: #ea580c; color: #fff; }

h2 { font-size: 44px; font-weight: 700; }
.lead { margin-top: 20px; color: #475569; }
.detail { margin-top: 36px; flex: 1; min-height: 240px; border-radius: 24px; background: #0f172a center/cover no-repeat; position: relative; overflow: hidden; }
.modules { margin-top: 30px; list-style: none; counter-reset: m; display: grid; gap: 18px; }
.modules li { counter-increment: m; display: grid; grid-template-columns: 56px 1fr; gap: 18px; align-items: start; padding-bottom: 18px; border-bottom: 1px solid #e2e8f0; }
.modules li:last-child { border-bottom: 0; }
.modules li::before { content: counter(m); font-family: "Bricolage Grotesque"; font-weight: 700; font-size: 26px; color: #c2410c; background: #ffedd5; width: 52px; height: 52px; border-radius: 50%; display: grid; place-items: center; }
.modules.tight { gap: 12px; } .modules.tight li { padding-bottom: 12px; font-size: 23px; }

.audience { margin-top: 24px; list-style: none; display: grid; gap: 14px; }
.audience li { border: 1.5px solid #e2e8f0; background: #fff; border-radius: 16px; padding: 16px 22px; }
.how { margin-top: 26px; list-style: none; display: grid; gap: 16px; color: #334155; }
.how li { display: flex; gap: 16px; } .how svg { flex: none; margin-top: 6px; }
.cta { margin: auto -60px -64px; padding: 52px 60px 60px; overflow: hidden; }
.cta h2 { color: #fff; font-size: 48px; }
.cta p { margin-top: 14px; color: #cbd5e1; }
.wa { margin-top: 30px; display: flex; align-items: center; justify-content: center; gap: 14px; background: #ea580c; color: #fff; border-radius: 16px; padding: 22px; font-weight: 700; font-size: 27px; }
.contact { margin-top: 26px; display: grid; gap: 8px; font-size: 23px; color: #e2e8f0; }
.contact span { color: #94a3b8; display: inline-block; width: 110px; }
`;

const check = `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#ea580c" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`;
const waIcon = `<svg width="30" height="30" viewBox="0 0 24 24" fill="#fff"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .3-3.4-.7-2.9-1.2-4.7-4.1-4.8-4.3-.1-.2-1.2-1.6-1.2-3s.8-2.2 1-2.5c.3-.3.6-.4.8-.4h.6c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.4 0 .5l-.3.5-.4.5c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.7-.1l.9-1.1c.2-.3.4-.2.7-.1l2 1c.3.1.5.2.6.3.1.2.1.8-.1 1.4Z"/></svg>`;

function html(meta) {
  const item = t.items[meta.slug];
  const coverImg = findImg(`${meta.slug}-portada`) ?? join(site, "public/cursos/img", `${meta.slug}.webp`);
  const detailImg = findImg(`${meta.slug}-detalle`);
  const many = item.modules.length > 4;
  const how = [
    "100% virtual en el campus de D&L: avance a su ritmo, desde cualquier lugar.",
    "Cada módulo combina teoría, ejercicios prácticos y evaluación.",
    `Al aprobar recibe un certificado de ${meta.hours} horas.`,
  ];
  return `<!doctype html><html lang="es"><head><meta charset="utf-8"><title>${esc(item.title)} | D&amp;L Quality Consulting</title>
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,700;12..96,800&family=Figtree:wght@400;600;700&display=block" rel="stylesheet">
<style>${css}</style></head><body>

<section class="page dark">${waveArt}
  <div class="top"><img src="${url(join(site, "public/img/logo-dark.png"))}" alt="D&amp;L Quality Consulting"><div><b>D&amp;L Quality Consulting</b>${esc(t.title)}</div></div>
  <div class="cover"><div class="photo" style="background-image:url('${url(coverImg)}')"></div>${arcs}</div>
  <p class="cat"><span class="dot" style="background:${CATEGORY_COLORS[meta.category]}"></span>${esc(t.categories[meta.category])}</p>
  <h1>${esc(item.title)}</h1>
  <p class="summary">${esc(item.summary)}</p>
  <div class="chips"><span class="chip hot">${esc(t.hours(meta.hours))}</span><span class="chip">${esc(t.virtual)}</span><span class="chip">Certificado</span></div>
</section>

<section class="page light">
  <h2>Sobre el programa</h2>
  <p class="lead">${esc(item.description)}</p>
  <h2 style="margin-top:44px">${esc(t.modulesTitle)}</h2>
  <ol class="modules${many ? " tight" : ""}">${item.modules.map((m) => `<li>${esc(m)}</li>`).join("")}</ol>
  ${detailImg ? `<div class="detail" style="background-image:url('${url(detailImg)}')"></div>` : `<div class="detail">${waveArt}</div>`}
</section>

<section class="page light">
  <h2>${esc(t.audienceTitle)}</h2>
  <ul class="audience">${item.audience.map((a) => `<li>${esc(a)}</li>`).join("")}</ul>
  <h2 style="margin-top:48px">Cómo se aprende</h2>
  <ul class="how">${how.map((h) => `<li>${check}<span>${esc(h)}</span></li>`).join("")}</ul>
  <div class="cta dark">${waveArt}
    <div>
      <h2>¿Quiere inscribirse o formar a su equipo?</h2>
      <p>Escríbanos y le contamos fechas, valores y modalidades para grupos.</p>
      <a class="wa" href="${esc(whatsappFor(t.askMessage(item.title)))}">${waIcon}Escribir por WhatsApp</a>
      <div class="contact">
        <a href="mailto:${EMAIL}"><span>Correo</span>${EMAIL}</a>
        <a href="tel:${PHONE.replace(/\s/g, "")}"><span>Teléfono</span>${PHONE}</a>
        <a href="${WEB}"><span>Web</span>dylqualityconsulting.com/cursos</a>
      </div>
    </div>
  </div>
</section>
</body></html>`;
}

const only = process.argv[2];
for (const meta of COURSES.filter((c) => !only || c.slug === only)) {
  const page = join(tmp, `${meta.slug}.html`);
  const out = join(site, "public/cursos/pdf", `${meta.slug}.pdf`);
  writeFileSync(page, html(meta));
  execFileSync(browser, [
    "--headless=new", "--disable-gpu", "--no-pdf-header-footer", "--run-all-compositor-stages-before-draw",
    "--virtual-time-budget=20000", `--print-to-pdf=${out}`, url(page),
  ], { stdio: "ignore" });
  console.log("ok", meta.slug);
}
