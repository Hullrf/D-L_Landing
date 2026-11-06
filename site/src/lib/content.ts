export const LMS_URL = process.env.NEXT_PUBLIC_LMS_URL ?? "https://lms.dyl-quality.com";
export const PHONE = "+57 310 349 1201";
export const PHONE_HREF = "tel:+573103491201";
export const WHATSAPP = "https://wa.me/573103491201";
export const EMAIL = "contacto@dylqualityconsulting.com";
export const ADDRESS = "Calle 143 No. 46-55, Bogotá D.C.";
export const HOURS = "Lunes a viernes, 8:00 a. m. a 5:00 p. m.";

export const NAV = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#servicios", label: "Servicios" },
  { href: "#clientes", label: "Clientes" },
  { href: "#faq", label: "Preguntas" },
  { href: "#contacto", label: "Contacto" },
];

export const NORMS = [
  "ISO 9001 · Calidad",
  "ISO 45001 · Seguridad y salud",
  "ISO 14001 · Ambiente",
  "ISO 27001 · Seguridad de la información",
  "ISO 28000 · Cadena de suministro",
  "ISO 17025 · Laboratorios",
];

export const PILLARS = [
  {
    title: "Confiabilidad",
    text: "Le apoyamos en el diseño, la implementación y el seguimiento de sus sistemas de gestión, los 365 días del año.",
  },
  {
    title: "Procesos y resultados",
    text: "Más de 10 años diseñando sistemas sencillos, a la medida de cada organización y fáciles de mantener.",
  },
  {
    title: "Servicio",
    text: "Somos un equipo ágil y dinámico: respondemos rápido y nos adaptamos a su operación.",
  },
];

export const SERVICES = [
  { norm: "ISO 9001:2015", title: "Sistemas de gestión de calidad", text: "Diseño, implementación, auditoría interna y preparación para la certificación." },
  { norm: "ISO 45001", title: "Seguridad y salud en el trabajo", text: "Cumplimiento del Decreto 1072 de 2015 y la Resolución 0312 de 2019, y certificación en ISO 45001." },
  { norm: "ISO 14001", title: "Sistemas de gestión ambiental", text: "Identificación de aspectos e impactos, requisitos legales y mejora del desempeño ambiental." },
  { norm: "NTC 5555 · 5581 · 5580 · 5663 · 5666", title: "Calidad en instituciones de educación para el trabajo", text: "Sistemas de gestión para instituciones de formación, alineados con las normas técnicas colombianas." },
  { norm: "ISO 27001", title: "Seguridad de la información", text: "Protección de la información de su organización con un sistema de gestión documentado y auditable." },
  { norm: "ISO 28000", title: "Cadena de suministro", text: "Gestión de la seguridad en toda su cadena de suministro." },
  { norm: "ISO 17025", title: "Laboratorios de ensayo y calibración", text: "Acompañamiento para acreditar laboratorios de ensayo y calibración." },
  { norm: "Formación", title: "Programas de formación", text: "Diseño y ejecución de programas para adquirir competencias específicas. Los cursos están en nuestro campus virtual." },
];

export const VALUES = ["Humanismo", "Entrega", "Disposición", "Actitud", "Trabajo"];

export const QUALITY_POLICY =
  "Acompañar a nuestros clientes en la implementación de sus sistemas de gestión, dentro del marco legal y reglamentario, con un equipo humano comprometido con la mejora continua.";

export const FAQ = [
  {
    q: "¿Tienen cobertura en todo Colombia?",
    a: "Sí. Prestamos nuestros servicios en todo el país. Nuestra sede principal está en Bogotá D.C.",
  },
  {
    q: "¿Qué servicios ofrece D&L?",
    a: "Sistemas de gestión de calidad, ambiente, seguridad y salud en el trabajo, seguridad de la información, cadena de suministro y laboratorios (ISO 9001, 14001, 45001, 27001, 28000 y 17025), normas técnicas para instituciones de educación para el trabajo, auditorías internas y formación por competencias.",
  },
  {
    q: "¿Cómo puedo contactarlos?",
    a: `Escríbanos a ${EMAIL}, llámenos al ${PHONE} o envíenos un mensaje por WhatsApp.`,
  },
  {
    q: "¿Dónde tomo los cursos?",
    a: "Los cursos viven en nuestro campus virtual. Ingrese con su cuenta para ver los programas y su progreso.",
  },
];

// Archivos en public/img/clientes: del 1 al 22
export const CLIENT_LOGOS: string[] = [
  "1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png",
  "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg", "17.jpg",
  "18.jpg", "19.jpg", "20.jpg", "21.jpg", "22.jpg",
];
