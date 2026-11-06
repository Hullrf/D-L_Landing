export const LMS_URL = process.env.NEXT_PUBLIC_LMS_URL ?? "https://dyllms-production.up.railway.app";
export const PHONE = "+57 310 349 1201";
export const PHONE_HREF = "tel:+573103491201";
export const WHATSAPP = "https://wa.me/573103491201";
export const EMAIL = "contacto@dylqualityconsulting.com";

export type Lang = "es" | "en";

// Archivos en public/img/clientes: del 1 al 22
export const CLIENT_LOGOS: string[] = [
  "1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png",
  "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg", "17.jpg",
  "18.jpg", "19.jpg", "20.jpg", "21.jpg", "22.jpg",
];

const es = {
  ui: {
    homeLabel: "D&L Quality Consulting, inicio",
    menu: "Menú",
    menuOpen: "Abrir menú",
    campus: "Campus virtual",
    mainNav: "Principal",
    footerNav: "Pie de página",
    langLabel: "Idioma",
    themeToLight: "Cambiar a tema claro",
    themeToDark: "Cambiar a tema oscuro",
  },
  nav: [
    { href: "#nosotros", label: "Nosotros" },
    { href: "#servicios", label: "Servicios" },
    { href: "#clientes", label: "Clientes" },
    { href: "#faq", label: "Preguntas" },
    { href: "#contacto", label: "Contacto" },
  ],
  hero: {
    title: "Certificar su organización es un camino. Lo recorremos con usted.",
    text: "Somos consultores en sistemas de gestión y HSEQ. Diseñamos, implementamos y auditamos con usted los sistemas que su empresa necesita, en todo Colombia.",
    cta: "Solicitar una asesoría",
    ctaSecondary: "Ver servicios",
    normsTitle: "Normas en las que trabajamos",
    norms: [
      "ISO 9001 · Calidad",
      "ISO 45001 · Seguridad y salud",
      "ISO 14001 · Ambiente",
      "ISO 27001 · Seguridad de la información",
      "ISO 28000 · Cadena de suministro",
      "ISO 17025 · Laboratorios",
    ],
  },
  about: {
    title: "Por qué elegirnos",
    pillars: [
      { title: "Confiabilidad", text: "Le apoyamos en el diseño, la implementación y el seguimiento de sus sistemas de gestión, los 365 días del año." },
      { title: "Procesos y resultados", text: "Más de 10 años diseñando sistemas sencillos, a la medida de cada organización y fáciles de mantener." },
      { title: "Servicio", text: "Somos un equipo ágil y dinámico: respondemos rápido y nos adaptamos a su operación." },
    ],
  },
  services: {
    title: "Nuestros servicios",
    intro: "Cada servicio responde a una norma. Cuéntenos cuál necesita su organización.",
    campusLink: "Ir al campus virtual",
    consult: "Consultar",
    consultGeneric: "Consultar este servicio",
    items: [
      { norm: "ISO 9001:2015", title: "Sistemas de gestión de calidad", text: "Diseño, implementación, auditoría interna y preparación para la certificación." },
      { norm: "ISO 45001", title: "Seguridad y salud en el trabajo", text: "Cumplimiento del Decreto 1072 de 2015 y la Resolución 0312 de 2019, y certificación en ISO 45001." },
      { norm: "ISO 14001", title: "Sistemas de gestión ambiental", text: "Identificación de aspectos e impactos, requisitos legales y mejora del desempeño ambiental." },
      { norm: "NTC 5555 · 5581 · 5580 · 5663 · 5666", title: "Calidad en instituciones de educación para el trabajo", text: "Sistemas de gestión para instituciones de formación, alineados con las normas técnicas colombianas." },
      { norm: "ISO 27001", title: "Seguridad de la información", text: "Protección de la información de su organización con un sistema de gestión documentado y auditable." },
      { norm: "ISO 28000", title: "Cadena de suministro", text: "Gestión de la seguridad en toda su cadena de suministro." },
      { norm: "ISO 17025", title: "Laboratorios de ensayo y calibración", text: "Acompañamiento para acreditar laboratorios de ensayo y calibración." },
      { norm: "Formación", title: "Programas de formación", text: "Diseño y ejecución de programas para adquirir competencias específicas. Los cursos están en nuestro campus virtual." },
    ],
  },
  clients: {
    title: "Organizaciones que confían en nosotros",
    alt: (n: number) => `Logo de organización cliente ${n}`,
  },
  policy: {
    title: "Política de calidad",
    text: "Acompañar a nuestros clientes en la implementación de sus sistemas de gestión, dentro del marco legal y reglamentario, con un equipo humano comprometido con la mejora continua.",
    valuesTitle: "Nuestros valores",
    values: ["Humanismo", "Entrega", "Disposición", "Actitud", "Trabajo"],
  },
  faq: {
    title: "Preguntas frecuentes",
    items: [
      { q: "¿Tienen cobertura en todo Colombia?", a: "Sí. Prestamos nuestros servicios en todo el país. Nuestra sede principal está en Bogotá D.C." },
      { q: "¿Qué servicios ofrece D&L?", a: "Sistemas de gestión de calidad, ambiente, seguridad y salud en el trabajo, seguridad de la información, cadena de suministro y laboratorios (ISO 9001, 14001, 45001, 27001, 28000 y 17025), normas técnicas para instituciones de educación para el trabajo, auditorías internas y formación por competencias." },
      { q: "¿Cómo puedo contactarlos?", a: `Escríbanos a ${EMAIL}, llámenos al ${PHONE} o envíenos un mensaje por WhatsApp.` },
      { q: "¿Dónde tomo los cursos?", a: "Los cursos viven en nuestro campus virtual. Ingrese con su cuenta para ver los programas y su progreso." },
    ],
  },
  contact: {
    title: "Certifique su organización con nosotros",
    text: "Cuéntenos qué norma necesita y le respondemos en horario de oficina.",
    whatsapp: "Escribir por WhatsApp",
    email: "Enviar un correo",
    address: "Calle 143 No. 46-55, Bogotá D.C.",
    hours: "Lunes a viernes, 8:00 a. m. a 5:00 p. m.",
    coverage: "Cobertura en todo Colombia.",
  },
  footer: {
    credit: "© 2026 D&L Quality Consulting. Sitio desarrollado por David Santiago Rodríguez Cardona.",
  },
};

type Content = typeof es;

const en: Content = {
  ui: {
    homeLabel: "D&L Quality Consulting, home",
    menu: "Menu",
    menuOpen: "Open menu",
    campus: "Virtual campus",
    mainNav: "Main",
    footerNav: "Footer",
    langLabel: "Language",
    themeToLight: "Switch to light theme",
    themeToDark: "Switch to dark theme",
  },
  nav: [
    { href: "#nosotros", label: "About us" },
    { href: "#servicios", label: "Services" },
    { href: "#clientes", label: "Clients" },
    { href: "#faq", label: "FAQ" },
    { href: "#contacto", label: "Contact" },
  ],
  hero: {
    title: "Certifying your organization is a journey. We walk it with you.",
    text: "We are management systems and HSEQ consultants. We design, implement and audit the systems your company needs, with you, anywhere in Colombia.",
    cta: "Request a consultation",
    ctaSecondary: "See services",
    normsTitle: "Standards we work with",
    norms: [
      "ISO 9001 · Quality",
      "ISO 45001 · Occupational health and safety",
      "ISO 14001 · Environment",
      "ISO 27001 · Information security",
      "ISO 28000 · Supply chain",
      "ISO 17025 · Laboratories",
    ],
  },
  about: {
    title: "Why choose us",
    pillars: [
      { title: "Reliability", text: "We support the design, implementation and follow-up of your management systems, 365 days a year." },
      { title: "Processes and results", text: "Over 10 years designing simple systems, tailored to each organization and easy to maintain." },
      { title: "Service", text: "We are an agile, dynamic team: we respond quickly and adapt to your operation." },
    ],
  },
  services: {
    title: "Our services",
    intro: "Each service maps to a standard. Tell us which one your organization needs.",
    campusLink: "Go to the virtual campus",
    consult: "Ask about",
    consultGeneric: "Ask about this service",
    items: [
      { norm: "ISO 9001:2015", title: "Quality management systems", text: "Design, implementation, internal audits and certification readiness." },
      { norm: "ISO 45001", title: "Occupational health and safety", text: "Compliance with Colombian Decree 1072 of 2015 and Resolution 0312 of 2019, and ISO 45001 certification." },
      { norm: "ISO 14001", title: "Environmental management systems", text: "Identification of aspects and impacts, legal requirements and better environmental performance." },
      { norm: "NTC 5555 · 5581 · 5580 · 5663 · 5666", title: "Quality for vocational training institutions", text: "Management systems for training institutions, aligned with Colombian technical standards." },
      { norm: "ISO 27001", title: "Information security", text: "Protect your organization's information with a documented, auditable management system." },
      { norm: "ISO 28000", title: "Supply chain", text: "Security management across your entire supply chain." },
      { norm: "ISO 17025", title: "Testing and calibration laboratories", text: "Guidance to accredit testing and calibration laboratories." },
      { norm: "Training", title: "Training programs", text: "Design and delivery of programs to build specific skills. Courses are available on our virtual campus." },
    ],
  },
  clients: {
    title: "Organizations that trust us",
    alt: (n: number) => `Client organization logo ${n}`,
  },
  policy: {
    title: "Quality policy",
    text: "To support our clients in implementing their management systems, within the legal and regulatory framework, with a human team committed to continual improvement.",
    valuesTitle: "Our values",
    values: ["Humanism", "Dedication", "Availability", "Attitude", "Teamwork"],
  },
  faq: {
    title: "Frequently asked questions",
    items: [
      { q: "Do you cover all of Colombia?", a: "Yes. We provide our services nationwide. Our main office is in Bogotá D.C." },
      { q: "What services does D&L offer?", a: "Management systems for quality, environment, occupational health and safety, information security, supply chain and laboratories (ISO 9001, 14001, 45001, 27001, 28000 and 17025), technical standards for vocational training institutions, internal audits and competency-based training." },
      { q: "How can I contact you?", a: `Write to ${EMAIL}, call ${PHONE} or send us a WhatsApp message.` },
      { q: "Where do I take the courses?", a: "Courses are on our virtual campus. Sign in with your account to see the programs and your progress." },
    ],
  },
  contact: {
    title: "Certify your organization with us",
    text: "Tell us which standard you need and we will reply during office hours.",
    whatsapp: "Message us on WhatsApp",
    email: "Send an email",
    address: "Calle 143 No. 46-55, Bogotá D.C., Colombia",
    hours: "Monday to Friday, 8:00 a.m. to 5:00 p.m. (Colombia time)",
    coverage: "Nationwide coverage across Colombia.",
  },
  footer: {
    credit: "© 2026 D&L Quality Consulting. Website developed by David Santiago Rodríguez Cardona.",
  },
};

export const CONTENT: Record<Lang, Content> = { es, en };
