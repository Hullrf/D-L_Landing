# Sección Cursos Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Página `/cursos` con cuadrícula de 7 programas y ficha emergente con enlace al PDF.
**Architecture:** Datos en `src/lib/content.ts` (ES/EN); `Header`/`Footer` exportados de `landing.tsx` y reutilizados; nueva `src/app/cursos/page.tsx` + `src/components/courses.tsx` (cliente, `<dialog>` nativo).
**Tech Stack:** Next 16 (export estático), React 19, Tailwind 4, lucide-react.
**Spec:** `docs/superpowers/specs/2026-11-18-seccion-cursos-design.md`

## Global Constraints
- Sin dependencias nuevas. Funciona con `STATIC_EXPORT=1 npm run build`.
- Textos ES/EN; tokens de color existentes (`--graphite`, `--brand`, `primary`); modo oscuro.
- Horas: Análisis de Datos 80, Lean Six Sigma 60, Metrología Avanzada 120, FlexSim 120, SIG 120, Excel 60, Lean Manufacturing 60.

## Review Focus
- Menú desde `/cursos`: "Servicios" debe llevar a `/#servicios`, no a un ancla inexistente.
- Ventana emergente en móvil (360 px): contenido con scroll interno, botones visibles.
- Esc / clic en el fondo cierra; el foco vuelve a la tarjeta.
- Cambio de idioma con la ficha abierta: textos se actualizan.
- PDF con nombre ASCII abre en pestaña nueva (200 en el build estático).

---

### Task 1: Assets
- [ ] Copiar 7 PDFs a `site/public/cursos/pdf/<slug>.pdf`; portadas a `site/public/cursos/img/<slug>.webp` (PIL, ancho máx 1200, q=80); recortar ilustración SIG de su PDF.
- [ ] Slugs: `analisis-de-datos`, `lean-six-sigma`, `metrologia-avanzada`, `flexsim`, `sistemas-integrados`, `excel`, `lean-manufacturing`.

### Task 2: Datos + navegación
- [ ] `content.ts`: `COURSES` (slug, category, hours, color) y por idioma `courses: { title, intro, ..., items: Record<slug,{title, summary, description, modules: string[], audience: string[]}> }`; `nav` con `/#…` e item `{ href: "/cursos", label: "Cursos"/"Courses" }`.
- [ ] Servicios: tarjeta "Formación" enlaza a `/cursos`.

### Task 3: Página
- [ ] Exportar `Header`, `Footer` de `landing.tsx`; `src/app/cursos/page.tsx` (metadata) → `<Courses/>`.
- [ ] `courses.tsx`: hero corto, grid `sm:grid-cols-2 lg:grid-cols-3`, tarjeta-botón, `<dialog>` con `showModal()`, CTA final.
- [ ] Verificar: `npm run lint`, `STATIC_EXPORT=1 npm run build`, Playwright (escritorio/móvil/oscuro/EN). Commit, push, PR (no se mergea: no es puramente visual).
