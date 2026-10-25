export type Category =
  | "Tecnología"
  | "Comercio"
  | "Alimentos"
  | "Medios"
  | "Juegos"
  | "Campo";

export interface Project {
  slug: string;
  name: string;
  category: Category;
  /** Una línea. Lo que hace, sin adjetivos. */
  tagline: string;
  description: string;
  highlights: string[];
  /** Dos colores para el gradiente de la tarjeta. */
  hue: [string, string];
  url?: string;
  /** Logo en /public/brand/projects. `fill` para íconos que ya traen su fondo. */
  logo?: { src: string; fill?: boolean };
  parent?: string;
  featured?: boolean;
}

export const categories: Category[] = [
  "Tecnología",
  "Comercio",
  "Alimentos",
  "Medios",
  "Juegos",
  "Campo",
];

export const projects: Project[] = [
  {
    slug: "hueyi",
    logo: { src: "/brand/projects/hueyi.png" },
    name: "Hueyi",
    category: "Tecnología",
    tagline: "La plataforma que conecta todo lo demás.",
    description:
      "Comercio, pagos, movilidad y logística sobre una sola base. Cada marca del ecosistema comparte identidad, datos y cobro a través de Hueyi.",
    highlights: ["Plataforma web y app móvil", "Base compartida del ecosistema", "Comercio, movilidad y logística"],
    hue: ["#0a84ff", "#5e5ce6"],
    url: "https://www.hueyi.com",
    featured: true,
  },
  {
    slug: "pay",
    name: "Hueyi Pay",
    category: "Tecnología",
    parent: "Hueyi",
    tagline: "Cobrar, sin fricción.",
    description:
      "Checkout alojado y formulario embebido para las marcas del ecosistema, con tarjetas, Apple Pay, Google Pay y Mercado Pago.",
    highlights: ["Stripe y Mercado Pago", "Apple Pay y Google Pay", "SDK para marcas aprobadas"],
    hue: ["#1c1c1e", "#3a3a3c"],
    url: "https://pay.hueyi.com",
  },
  {
    slug: "wey",
    logo: { src: "/brand/projects/wey.png", fill: true },
    name: "Wey",
    category: "Comercio",
    parent: "Hueyi",
    tagline: "Pide. Llega.",
    description:
      "Pedidos a domicilio de negocios locales, con iWey para la operación logística: almacén, asignación y ruta hasta tu puerta.",
    highlights: ["App para clientes", "iWey para repartidores", "Pagos con Hueyi Pay"],
    hue: ["#ff9f0a", "#ff375f"],
    featured: true,
  },
  {
    slug: "nectar",
    logo: { src: "/brand/projects/nectar.png" },
    name: "Nectar",
    category: "Alimentos",
    parent: "Hueyi",
    tagline: "Del campo a tu cocina en 24 horas.",
    description:
      "Frutas y verduras directo del productor para restaurantes y negocios en CDMX, con precios de mayoreo y entrega al día siguiente.",
    highlights: ["Directo del productor", "Entrega en 24 h en CDMX", "Precios de mayoreo"],
    hue: ["#30d158", "#00c7be"],
    featured: true,
  },
  {
    slug: "vende",
    logo: { src: "/brand/projects/vende.png" },
    name: "Vende",
    category: "Comercio",
    parent: "Hueyi",
    tagline: "Tu negocio, en orden.",
    description: "Herramientas para administrar tu negocio: catálogo, ventas y clientes en un solo lugar.",
    highlights: ["Catálogo y ventas", "Clientes", "Integrado con Hueyi Pay"],
    hue: ["#64d2ff", "#0a84ff"],
  },
  {
    slug: "mise",
    name: "Mise",
    category: "Alimentos",
    parent: "Hueyi",
    tagline: "Recetas, costos y compras. Un solo flujo.",
    description:
      "Para cocinar en casa o para chefs, restaurantes y hoteles: recetas estandarizadas, costeo con tus precios y la lista de compras exacta.",
    highlights: ["Biblioteca de recetas lista", "Costeo y merma", "Compras exactas"],
    hue: ["#ff6961", "#ff9f0a"],
  },
  {
    slug: "tlaloc",
    logo: { src: "/brand/projects/tlaloc.png" },
    name: "Agro Tláloc",
    category: "Campo",
    parent: "Hueyi",
    tagline: "El mercado del campo mexicano.",
    description: "Marketplace donde marcas, distribuidores y negocios agrícolas venden sus productos.",
    highlights: ["Marcas y distribuidores", "Insumos agrícolas", "App y web"],
    hue: ["#34c759", "#248a3d"],
  },
  {
    slug: "tekit",
    name: "Tekit",
    category: "Tecnología",
    parent: "Hueyi",
    tagline: "Experiencia que se puede comprobar.",
    description:
      "Perfiles con historial laboral comprobado. Encuentra a quien necesitas sin adivinar si su experiencia es real.",
    highlights: ["Historial verificado", "Búsqueda de talento", "Perfiles confiables"],
    hue: ["#bf5af2", "#5e5ce6"],
  },
  {
    slug: "vawey",
    logo: { src: "/brand/projects/vawey.png" },
    name: "Vawey",
    category: "Tecnología",
    parent: "Hueyi",
    tagline: "La ciudad, en una ruta.",
    description: "Planea viajes en transporte público por la Ciudad de México.",
    highlights: ["Metro, Metrobús y más", "Rutas en CDMX", "App independiente"],
    hue: ["#ff375f", "#bf5af2"],
  },
  {
    slug: "mexica",
    logo: { src: "/brand/projects/mexica.png", fill: true },
    name: "Mexica TV",
    category: "Medios",
    tagline: "Nuestra cultura, nuestra voz.",
    description:
      "Medio digital dedicado a las tradiciones, fiestas y raíces de México. Producción audiovisual para todas las plataformas.",
    highlights: ["Producción audiovisual", "Cultura y tradición", "YouTube, TikTok e Instagram"],
    hue: ["#ff2d55", "#ff9f0a"],
    url: "https://mexicatv.com",
    featured: true,
  },
  {
    slug: "come",
    logo: { src: "/brand/projects/come-wordmark.png", fill: true },
    name: "Come",
    category: "Medios",
    parent: "Mexica",
    tagline: "Dónde comer en México.",
    description: "Restaurantes, chefs, rutas y menús en CDMX, Puebla, Oaxaca y todo México, en web y en ComeApp.",
    highlights: ["Guía de restaurantes", "Rutas gastronómicas", "ComeApp"],
    hue: ["#ffd60a", "#ff9f0a"],
  },
  {
    slug: "festus",
    logo: { src: "/brand/projects/festus.png" },
    name: "Festus",
    category: "Medios",
    tagline: "Todos los festivales. Un lugar.",
    description: "Tu guía de festivales, ferias, conciertos y eventos en México, con fechas, sedes y boletos oficiales.",
    highlights: ["Calendario de eventos", "Mapa de sedes", "Boletos oficiales"],
    hue: ["#5e5ce6", "#ff2d55"],
  },
  {
    slug: "games",
    logo: { src: "/brand/projects/games.png" },
    name: "Dbit Games",
    category: "Juegos",
    tagline: "Juegos hechos para jugarse.",
    description:
      "Nuestro estudio de videojuegos. El primer título es Bee, un juego de fusión de frutas con el universo de Nectar.",
    highlights: ["Bee — fusión de frutas", "Web y móvil", "Universo Nectar"],
    hue: ["#ffd60a", "#ff375f"],
    featured: true,
  },
  {
    slug: "ixpaktli",
    logo: { src: "/brand/projects/ixpaktli.png" },
    name: "Ixpaktli",
    category: "Alimentos",
    tagline: "Los sabores de la Sierra Nororiental.",
    description:
      "Restaurante, tienda gourmet y experiencias de cocina tradicional mexicana por la Chef Lily Martínez Lara.",
    highlights: ["Restaurante", "Tienda gourmet", "Experiencias gastronómicas"],
    hue: ["#ac8e68", "#6e4b2a"],
  },
  {
    slug: "kanautlan",
    logo: { src: "/brand/projects/kanautlan.png" },
    name: "Kanautlan",
    category: "Campo",
    tagline: "Papa mexicana de alta calidad.",
    description: "Productor y distribuidor de papa en México, especialistas en la variedad Fianna.",
    highlights: ["Producción propia", "Distribución", "Variedad Fianna"],
    hue: ["#d4a65a", "#8a6a2f"],
  },
  {
    slug: "dot",
    logo: { src: "/brand/projects/dot.png" },
    name: "Dot",
    category: "Tecnología",
    tagline: "Servicios, a un punto de distancia.",
    description: "Ecosistema de servicios Dot Co.: búsqueda, punto de venta y facturación para negocios.",
    highlights: ["Punto de venta", "Facturación", "Panel de administración"],
    hue: ["#8e8e93", "#1c1c1e"],
  },
];
