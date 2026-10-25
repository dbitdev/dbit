export interface Practice {
  slug: "tecnologia" | "finanzas" | "legal";
  name: string;
  /** Una línea para tarjetas y menú. */
  tagline: string;
  headline: [string, string];
  intro: string;
  services: { title: string; description: string }[];
  process: { title: string; description: string }[];
  /** Proyectos del ecosistema donde se ve el trabajo de esta área. */
  related: string[];
  hue: [string, string];
}

export const practices: Practice[] = [
  {
    slug: "tecnologia",
    name: "Tecnología",
    tagline: "Producto, software e infraestructura.",
    headline: ["Ideas que se convierten", "en producto."],
    intro:
      "Diseñamos, construimos y operamos la tecnología de los proyectos en los que participamos: desde el primer prototipo hasta la app publicada en las tiendas y la infraestructura que la sostiene.",
    services: [
      { title: "Estrategia de producto", description: "Definimos qué construir primero, qué medir y cuándo crecer." },
      { title: "Apps y sitios web", description: "Aplicaciones iOS, Android y web con diseño propio y experiencia cuidada." },
      { title: "Plataformas compartidas", description: "Identidad, pagos, datos y logística reutilizables entre marcas, como Hueyi." },
      { title: "Infraestructura en la nube", description: "Despliegue, seguridad, respaldos y monitoreo para operar sin sobresaltos." },
      { title: "Comercio electrónico", description: "Tiendas, catálogos, checkout y conexión con medios de pago." },
      { title: "Auditoría técnica", description: "Revisamos código, arquitectura y procesos antes de invertir o escalar." },
    ],
    process: [
      { title: "Entender", description: "El problema, el usuario y el negocio, antes que la herramienta." },
      { title: "Construir", description: "Versiones cortas, en manos de usuarios reales lo antes posible." },
      { title: "Operar", description: "Medimos, corregimos y mantenemos lo que ya está en producción." },
    ],
    related: ["hueyi", "pay", "wey", "dot", "vawey"],
    hue: ["#0a84ff", "#5e5ce6"],
  },
  {
    slug: "finanzas",
    name: "Finanzas",
    tagline: "Inversión, estructura y crecimiento.",
    headline: ["Capital con", "acompañamiento."],
    intro:
      "Invertimos en proyectos y emprendimientos, y los acompañamos con orden financiero: modelos, cobro, costos y la preparación para levantar capital o crecer con lo que ya generan.",
    services: [
      { title: "Inversión", description: "Participamos con capital, trabajo o ambos en proyectos con los que compartimos visión." },
      { title: "Modelo de negocio", description: "Precios, márgenes y unidad económica para saber si un negocio se sostiene." },
      { title: "Planeación financiera", description: "Presupuestos, flujo de efectivo y proyecciones que se revisan de verdad." },
      { title: "Cobro y pagos", description: "Integración de medios de pago y conciliación, apoyados en Hueyi Pay." },
      { title: "Costeo operativo", description: "Costos, merma y compras para negocios de alimentos y comercio." },
      { title: "Preparación para inversión", description: "Información, métricas y presentación para socios e inversionistas." },
    ],
    process: [
      { title: "Diagnóstico", description: "Dónde está el negocio hoy, con números y sin adornos." },
      { title: "Estructura", description: "Orden en cuentas, costos y cobro para decidir con datos." },
      { title: "Crecimiento", description: "Capital, alianzas o reinversión, según lo que convenga a cada proyecto." },
    ],
    related: ["pay", "mise", "nectar", "vende"],
    hue: ["#30d158", "#00c7be"],
  },
  {
    slug: "legal",
    name: "Legal",
    tagline: "Constitución, marcas y cumplimiento.",
    headline: ["Bases sólidas", "desde el día uno."],
    intro:
      "Ayudamos a que cada proyecto nazca y crezca en orden: su estructura legal, la protección de su marca, los contratos con socios y clientes, y el cumplimiento que exige cada industria.",
    services: [
      { title: "Constitución de empresas", description: "Elección de figura, estatutos y acuerdos entre socios." },
      { title: "Registro de marcas", description: "Búsqueda, registro y defensa de nombres y logotipos." },
      { title: "Contratos", description: "Socios, proveedores, clientes, colaboradores y licencias." },
      { title: "Privacidad de datos", description: "Avisos de privacidad y tratamiento de datos personales en apps y sitios." },
      { title: "Términos para plataformas", description: "Términos de uso y políticas para tiendas de apps y marketplaces." },
      { title: "Cumplimiento", description: "Requisitos fiscales y regulatorios según la industria de cada proyecto." },
    ],
    process: [
      { title: "Revisar", description: "Qué existe, qué falta y qué riesgos hay hoy." },
      { title: "Formalizar", description: "Documentos claros, firmados y en su lugar." },
      { title: "Mantener", description: "Renovaciones, cambios y nuevas reglas, a tiempo." },
    ],
    related: ["tekit", "tlaloc", "festus", "ixpaktli"],
    hue: ["#bf5af2", "#ff375f"],
  },
];

/** Cómo participa Dbit, Inc. en cada proyecto. */
export const roles = [
  { title: "Inversionista", description: "Aportamos capital y recursos para que una idea llegue a existir." },
  { title: "Asesor", description: "Acompañamos a fundadores en las decisiones que definen un proyecto." },
  { title: "Consultor", description: "Resolvemos retos concretos de tecnología, finanzas y legal." },
];
