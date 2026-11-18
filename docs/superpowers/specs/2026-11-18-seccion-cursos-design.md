# Sección "Cursos" en la landing — diseño (aprobado 2026-11-18)

## Intención
Mostrar en dylqualityconsulting.com los 7 programas de formación por competencias de D&L, con una ficha breve por curso y el enlace a su brochure PDF, para que un visitante conozca la oferta sin entrar al campus.

## Decisiones
- **Página propia `/cursos`** (elegida por el usuario), enlazada desde el header como "Cursos". Los enlaces del menú pasan a `/#ancla` para funcionar desde ambas páginas.
- **Tarjeta = la del catálogo del LMS**: portada (h-36), meta (categoría con punto de color + horas), título, resumen de 3 líneas.
- **Ficha en ventana emergente** (`<dialog>` nativo): portada, título, horas y modalidad, descripción, contenidos, dirigido a; botones "Ver brochure (PDF)" (pestaña nueva) y "Solicitar información" (WhatsApp con el nombre del curso). Cierra con Esc, X o clic fuera.
- **Horas: las de los brochures** (decisión mía: el PDF enlazado y la tarjeta deben coincidir). Metrología no trae horas: 120 h del LMS.
- **Portadas**: las del LMS (respaldo local del storage), convertidas a WebP ≤1200 px. SIG: ilustración recortada de su brochure (elegido por el usuario).
- **PDFs** copiados a `public/cursos/pdf/` con nombres sin tildes.
- ES/EN, modo claro/oscuro, compatible con `STATIC_EXPORT=1`.

## Enfoques considerados
- Ventana emergente (elegido): cumple "clic → info previa → PDF" sin navegación extra.
- Página por curso `/cursos/[slug]`: más SEO, pero 7 fichas cortas no lo justifican.

## No-objetivos
Inscripción o pago desde la landing; sincronizar datos con el LMS en vivo.
