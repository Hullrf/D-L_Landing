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

// Programas de formación: portada en public/cursos/img/<slug>.webp y brochure en public/cursos/pdf/<slug>.pdf.
// Horas según la tabla oficial de D&L "Programas de Formación por Competencias" (2026-11-18).
export type CourseCategory = "procesos" | "datos" | "gestion" | "laboratorios";
export const CATEGORY_COLORS: Record<CourseCategory, string> = {
  procesos: "#ea580c",
  datos: "#0891b2",
  gestion: "#4f46e5",
  laboratorios: "#16a34a",
};
export const COURSES: { slug: string; hours: number; category: CourseCategory }[] = [
  { slug: "sistemas-integrados", hours: 120, category: "gestion" },
  { slug: "lean-six-sigma", hours: 60, category: "procesos" },
  { slug: "lean-manufacturing", hours: 60, category: "procesos" },
  { slug: "flexsim", hours: 120, category: "procesos" },
  { slug: "metrologia-avanzada", hours: 60, category: "laboratorios" },
  { slug: "analisis-de-datos", hours: 80, category: "datos" },
  { slug: "excel", hours: 80, category: "datos" },
];

type CourseText = { title: string; summary: string; description: string; modules: string[]; audience: string[] };

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
    { href: "/#nosotros", label: "Nosotros" },
    { href: "/#servicios", label: "Servicios" },
    { href: "/cursos/", label: "Cursos" },
    { href: "/#clientes", label: "Clientes" },
    { href: "/#faq", label: "Preguntas" },
    { href: "/#contacto", label: "Contacto" },
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
  stats: [
    { value: 10, suffix: "+", label: "años de experiencia" },
    { value: 22, suffix: "", label: "organizaciones que confían en nosotros" },
    { value: 6, suffix: "", label: "normas ISO en las que trabajamos" },
    { value: 365, suffix: "", label: "días de acompañamiento al año" },
  ],
  services: {
    title: "Nuestros servicios",
    intro: "Cada servicio responde a una norma. Cuéntenos cuál necesita su organización.",
    campusLink: "Ver los cursos",
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
      { norm: "Formación", title: "Programas de formación", text: "Diseño y ejecución de programas para adquirir competencias específicas. Conozca nuestros programas de formación por competencias." },
    ],
  },
  courses: {
    metaTitle: "Cursos | D&L Quality Consulting",
    metaDescription: "Programas de formación por competencias 100% virtuales: sistemas integrados de gestión, Lean Six Sigma, Lean Manufacturing, FlexSim, metrología, análisis de datos y Excel.",
    title: "Programas de formación por competencias",
    intro: "Cursos 100% virtuales para desarrollar habilidades que su equipo aplica desde el primer módulo. Elija un programa para ver su contenido y descargar el brochure.",
    hours: (h: number) => `${h} horas`,
    virtual: "100% virtual",
    open: (title: string) => `Ver detalles de ${title}`,
    details: "Ver contenido y brochure",
    modulesTitle: "Qué aprenderá",
    audienceTitle: "Dirigido a",
    brochure: "Ver brochure (PDF)",
    ask: "Solicitar información",
    askMessage: (title: string) => `Hola, quiero información sobre el programa "${title}".`,
    close: "Cerrar",
    ctaTitle: "¿Quiere formar a su equipo?",
    ctaText: "Diseñamos programas a la medida de su organización. Escríbanos y le contamos fechas, valores y modalidades para grupos.",
    ctaButton: "Escribir por WhatsApp",
    categories: {
      procesos: "Mejora de procesos",
      datos: "Datos y productividad",
      gestion: "Sistemas de gestión",
      laboratorios: "Laboratorios",
    } as Record<CourseCategory, string>,
    items: {
      "sistemas-integrados": {
        title: "Diplomado en Sistemas Integrados de Gestión ISO 9001, 14001 y 45001",
        summary: "Implemente y audite un sistema integrado de calidad, ambiente y seguridad y salud en el trabajo, con certificación como auditor interno trinorma.",
        description: "Desarrolle competencias especializadas en los sistemas de gestión, con orientaciones estratégicas para implementarlos en cualquier sector y dominar las técnicas de auditoría interna. Incluye certificado de 120 horas y certificación como auditor interno trinorma.",
        modules: [
          "Fundamentos de los sistemas integrados de gestión",
          "ISO 9001:2015, sistemas de gestión de la calidad",
          "ISO 14001:2015, sistemas de gestión ambiental",
          "ISO 45001:2018, seguridad y salud en el trabajo",
          "ISO 19011:2018, criterios y técnicas de auditoría",
        ],
        audience: ["Técnicos y tecnólogos en gestión", "Profesionales de cualquier área", "Consultores y auditores"],
      },
      "lean-six-sigma": {
        title: "Análisis y mejora de procesos con Lean Six Sigma",
        summary: "Prepárese para certificarse en White Belt y Yellow Belt con la metodología DMAIC y un proyecto de mejora real.",
        description: "Domine las metodologías más demandadas en la industria para optimizar procesos y reducir costos. El programa se organiza alrededor de su propio proyecto de implementación, para que aplique lo aprendido en su contexto profesional.",
        modules: [
          "White Belt: fundamentos esenciales (10 horas)",
          "Yellow Belt: metodología DMAIC completa (50 horas)",
          "Proyecto de implementación con caso práctico",
        ],
        audience: ["Profesionales de calidad, producción y operaciones", "Líderes de procesos y mejora continua"],
      },
      "lean-manufacturing": {
        title: "Lean Manufacturing: técnicas de implementación",
        summary: "Desde los orígenes del Lean hasta Value Stream Mapping, con ejercicios en simulador aplicables a cualquier sector.",
        description: "Un programa de 12 módulos que va de los fundamentos del Lean a las técnicas avanzadas de implementación: estabilidad de procesos, Just in Time, Heijunka y Jidoka. Cada unidad combina teoría, ejercicios prácticos con simulador y evaluación.",
        modules: [
          "Fundamentos: orígenes del Lean, lead time e inventario",
          "Estabilidad: 5S, TPM y estandarización",
          "Just in Time: células en U, EPEC, SMED, Pull y Kanban",
          "Optimización: Heijunka, Jidoka y VSM",
        ],
        audience: ["Profesionales de la industria manufacturera", "Estudiantes de ingeniería", "Docentes y empresarios"],
      },
      flexsim: {
        title: "Simulación de procesos con FlexSim",
        summary: "Modele y optimice procesos logísticos y de manufactura con FlexSim, del nivel básico al avanzado.",
        description: "Desarrolle competencias en modelado y simulación con FlexSim y aprenda técnicas avanzadas de análisis y optimización de procesos. Aplica a manufactura, servicios, logística y cadena de suministro. Incluye certificado de 120 horas.",
        modules: [
          "Fundamentos de modelado y análisis con FlexSim",
          "Herramientas estadísticas en FlexSim",
          "Process Flow aplicado",
          "Recepción y almacenamiento de materiales",
          "Picking, bandas transportadoras y clasificación",
          "Simulación en procesos de manufactura",
        ],
        audience: ["Estudiantes de ingeniería industrial y administración", "Profesionales que buscan especializarse"],
      },
      "metrologia-avanzada": {
        title: "Metrología avanzada: cálculo de incertidumbre",
        summary: "Identifique, evalúe, combine y comunique la incertidumbre de medición de sus ensayos, según ISO/IEC 17025.",
        description: "Medir no es suficiente: aprenda a saber qué tan confiable es un resultado y a sustentarlo técnicamente ante auditorías de acreditación ONAC. Teoría aplicada, análisis de datos, ejercicios y casos de laboratorio.",
        modules: [
          "Conceptos básicos y metrología: SI, patrones, calibración y trazabilidad",
          "Introducción a la incertidumbre: mensurando y fuentes",
          "Contribuciones aleatorias y sistemáticas",
          "Incertidumbre combinada y expandida",
          "Informes de incertidumbre y ejemplos prácticos",
        ],
        audience: ["Técnicos y profesionales de laboratorios de ensayo y calibración", "Equipos de calidad, metrología y control"],
      },
      "analisis-de-datos": {
        title: "Programa de formación en análisis de datos",
        summary: "Cuatro niveles que van de Excel a Power BI avanzado: tablas dinámicas, Power Query, modelado y DAX.",
        description: "Un itinerario completo para convertirse en profesional del análisis de datos. Cada nivel combina teoría, ejercicios prácticos y evaluaciones continuas, con un examen final integrador.",
        modules: [
          "Nivel 1: Excel Fundamentals",
          "Nivel 2: Power Query y PowerPivot",
          "Nivel 3: Power BI Essentials",
          "Nivel 4: Power BI Advanced, DAX y servicio en la nube",
        ],
        audience: ["Profesionales que trabajan con datos", "Analistas y equipos de reporte"],
      },
      excel: {
        title: "Excel para el desarrollo profesional",
        summary: "Domine Excel del nivel básico al avanzado: fórmulas, tablas dinámicas, macros y paneles de control.",
        description: "Una de las competencias más demandadas del mercado laboral, en tres niveles progresivos. Aprenda a su ritmo, desde cualquier lugar, con seguimiento personalizado.",
        modules: [
          "Nivel básico: datos, formatos, tablas, fórmulas y gráficos",
          "Nivel intermedio: validación, búsqueda y referencia, limpieza de datos y tablas dinámicas",
          "Nivel avanzado: ÍNDICE y COINCIDIR, fórmulas matriciales, macros y paneles de control",
        ],
        audience: ["Profesionales de cualquier área", "Estudiantes que quieren fortalecer su perfil"],
      },
    } as Record<string, CourseText>,
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
    { href: "/#nosotros", label: "About us" },
    { href: "/#servicios", label: "Services" },
    { href: "/cursos/", label: "Courses" },
    { href: "/#clientes", label: "Clients" },
    { href: "/#faq", label: "FAQ" },
    { href: "/#contacto", label: "Contact" },
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
  stats: [
    { value: 10, suffix: "+", label: "years of experience" },
    { value: 22, suffix: "", label: "organizations that trust us" },
    { value: 6, suffix: "", label: "ISO standards we work with" },
    { value: 365, suffix: "", label: "days a year of support" },
  ],
  services: {
    title: "Our services",
    intro: "Each service maps to a standard. Tell us which one your organization needs.",
    campusLink: "See the courses",
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
      { norm: "Training", title: "Training programs", text: "Design and delivery of programs to build specific skills. Explore our competency-based training programs." },
    ],
  },
  courses: {
    metaTitle: "Courses | D&L Quality Consulting",
    metaDescription: "Fully online competency-based training programs: integrated management systems, Lean Six Sigma, Lean Manufacturing, FlexSim, metrology, data analysis and Excel.",
    title: "Competency-based training programs",
    intro: "Fully online courses that build skills your team applies from the first module. Choose a program to see its content and download the brochure.",
    hours: (h: number) => `${h} hours`,
    virtual: "100% online",
    open: (title: string) => `See details for ${title}`,
    details: "See content and brochure",
    modulesTitle: "What you will learn",
    audienceTitle: "Who it is for",
    brochure: "View brochure (PDF, Spanish)",
    ask: "Request information",
    askMessage: (title: string) => `Hello, I would like information about the "${title}" program.`,
    close: "Close",
    ctaTitle: "Want to train your team?",
    ctaText: "We design programs tailored to your organization. Message us for dates, pricing and group options.",
    ctaButton: "Message us on WhatsApp",
    categories: {
      procesos: "Process improvement",
      datos: "Data and productivity",
      gestion: "Management systems",
      laboratorios: "Laboratories",
    } as Record<CourseCategory, string>,
    items: {
      "sistemas-integrados": {
        title: "Diploma in Integrated Management Systems ISO 9001, 14001 and 45001",
        summary: "Implement and audit an integrated quality, environmental and occupational health and safety system, and qualify as a tri-standard internal auditor.",
        description: "Build specialized skills in management systems, with strategic guidance to implement them in any sector and master internal audit techniques. Includes a 120-hour certificate and tri-standard internal auditor certification.",
        modules: [
          "Fundamentals of integrated management systems",
          "ISO 9001:2015, quality management systems",
          "ISO 14001:2015, environmental management systems",
          "ISO 45001:2018, occupational health and safety",
          "ISO 19011:2018, audit criteria and techniques",
        ],
        audience: ["Management technicians and technologists", "Professionals from any field", "Consultants and auditors"],
      },
      "lean-six-sigma": {
        title: "Process analysis and improvement with Lean Six Sigma",
        summary: "Prepare for White Belt and Yellow Belt certification with the DMAIC methodology and a real improvement project.",
        description: "Master the methodologies industry demands most to optimize processes and cut costs. The program is built around your own implementation project, so you apply what you learn in your professional context.",
        modules: [
          "White Belt: essential fundamentals (10 hours)",
          "Yellow Belt: full DMAIC methodology (50 hours)",
          "Implementation project with a case study",
        ],
        audience: ["Quality, production and operations professionals", "Process and continuous improvement leaders"],
      },
      "lean-manufacturing": {
        title: "Lean Manufacturing: implementation techniques",
        summary: "From the origins of Lean to Value Stream Mapping, with simulator exercises that apply to any sector.",
        description: "A 12-module program that goes from Lean fundamentals to advanced implementation techniques: process stability, Just in Time, Heijunka and Jidoka. Each unit combines theory, simulator exercises and assessment.",
        modules: [
          "Fundamentals: origins of Lean, lead time and inventory",
          "Stability: 5S, TPM and standardization",
          "Just in Time: U-cells, EPEI, SMED, Pull and Kanban",
          "Optimization: Heijunka, Jidoka and VSM",
        ],
        audience: ["Manufacturing professionals", "Engineering students", "Teachers and business owners"],
      },
      flexsim: {
        title: "Process simulation with FlexSim",
        summary: "Model and optimize logistics and manufacturing processes with FlexSim, from basic to advanced.",
        description: "Build skills in modeling and simulation with FlexSim and learn advanced techniques to analyze and optimize processes. Applies to manufacturing, services, logistics and supply chain. Includes a 120-hour certificate.",
        modules: [
          "Modeling and analysis fundamentals with FlexSim",
          "Statistical tools in FlexSim",
          "Applied Process Flow",
          "Material receiving and storage",
          "Picking, conveyors and sorting",
          "Manufacturing process simulation",
        ],
        audience: ["Industrial engineering and business students", "Professionals seeking specialization"],
      },
      "metrologia-avanzada": {
        title: "Advanced metrology: uncertainty calculation",
        summary: "Identify, evaluate, combine and report the measurement uncertainty of your tests, in line with ISO/IEC 17025.",
        description: "Measuring is not enough: learn how reliable a result is and how to support it technically in ONAC accreditation audits. Applied theory, data analysis, exercises and laboratory cases.",
        modules: [
          "Basic concepts and metrology: SI, standards, calibration and traceability",
          "Introduction to uncertainty: measurand and sources",
          "Random and systematic contributions",
          "Combined and expanded uncertainty",
          "Uncertainty reports and worked examples",
        ],
        audience: ["Testing and calibration laboratory staff", "Quality, metrology and control teams"],
      },
      "analisis-de-datos": {
        title: "Data analysis training program",
        summary: "Four levels from Excel to advanced Power BI: pivot tables, Power Query, data modeling and DAX.",
        description: "A complete path to becoming a data analysis professional. Each level combines theory, hands-on exercises and continuous assessment, with a final capstone exam.",
        modules: [
          "Level 1: Excel Fundamentals",
          "Level 2: Power Query and PowerPivot",
          "Level 3: Power BI Essentials",
          "Level 4: Power BI Advanced, DAX and cloud service",
        ],
        audience: ["Professionals who work with data", "Analysts and reporting teams"],
      },
      excel: {
        title: "Excel for professional development",
        summary: "Master Excel from basic to advanced: formulas, pivot tables, macros and dashboards.",
        description: "One of the most in-demand skills in today's job market, in three progressive levels. Learn at your own pace, from anywhere, with personal follow-up.",
        modules: [
          "Basic: data entry, formatting, tables, formulas and charts",
          "Intermediate: data validation, lookup functions, data cleaning and pivot tables",
          "Advanced: INDEX and MATCH, array formulas, macros and dashboards",
        ],
        audience: ["Professionals from any field", "Students who want to strengthen their profile"],
      },
    } as Record<string, CourseText>,
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
