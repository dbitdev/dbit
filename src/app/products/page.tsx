import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Gamepad2, Tv, Cloud, ShoppingBag, ExternalLink, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Productos & Dbit Games | Dbit, Inc.",
  description: "Descubre los productos de Dbit Inc., incluyendo la división de videojuegos Dbit Games, plataformas de streaming y soluciones cloud.",
};

const productsList = [
  {
    category: "Dbit Games",
    badge: "Videojuegos & VR",
    title: "CyberMex: 2099",
    description: "Videojuego de acción RPG en mundo abierto cyberpunk con narrativa inmersiva inspirada en mitología prehispánica. Desarrollado en Unreal Engine 5 para PC y consolas de última generación.",
    image: "/assets/media/1.jpg",
    details: ["Unreal Engine 5", "PC / PS5 / Xbox Series", "Beta Cerrada"],
    link: "/shop",
    linkText: "Ver en Tienda",
  },
  {
    category: "Dbit Games",
    badge: "Videojuegos & Arcade",
    title: "Quantum Drift",
    description: "Juego de carreras de alta velocidad interestelar con física cuántica, multijugador masivo en tiempo real y netcode de baja latencia con cross-play.",
    image: "/assets/media/hero-1.jpg",
    details: ["Cross-play PC & Cloud", "Torneos competitivos", "Alpha Disponible"],
    link: "/shop",
    linkText: "Ver en Tienda",
  },
  {
    category: "Dbit Games",
    badge: "Realidad Virtual",
    title: "Realm of Guardians VR",
    description: "Experiencia inmersiva en realidad virtual para Meta Quest 3, SteamVR y PSVR 2 con interacción gestual háptica de última generación.",
    image: "/assets/media/1.jpg",
    details: ["Meta Quest 3 / SteamVR", "Audio 3D Espacial", "En Desarrollo"],
    link: "/shop",
    linkText: "Ver en Tienda",
  },
  {
    category: "Medios & Streaming",
    badge: "Plataforma OTT",
    title: "Mexica TV Platform",
    description: "Plataforma de radiodifusión digital y entrega de video en vivo 4K de ultra baja latencia para millones de usuarios simultáneos en todo el mundo.",
    image: "/assets/media/hero-1.jpg",
    details: ["Streaming Ultra-low latency", "Distribución Global", "Multiplataforma"],
    link: "https://mexicatv.com",
    linkText: "Visitar Mexica TV",
  },
  {
    category: "Cloud & Software",
    badge: "Enterprise",
    title: "Hueyi Cloud Suite",
    description: "Infraestructura elástica de microservicios distribuidos, procesamiento de datos masivo y seguridad bancaria para grandes empresas.",
    image: "/assets/media/1.jpg",
    details: ["99.99% Uptime", "Cifrado Militar", "Multi-cloud"],
    link: "https://www.hueyi.com",
    linkText: "Visitar Hueyi",
  },
  {
    category: "Comercio",
    badge: "Storefront",
    title: "Dbit Store Official Gear",
    description: "Ropa técnica, periféricos gaming oficiales de Dbit Games y pases de desarrollador con envíos internacionales prioritarios.",
    image: "/assets/media/1.jpg",
    details: ["Envío Global", "Garantía Dbit", "Edición Limitada"],
    link: "/shop",
    linkText: "Ir a Dbit Store",
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen text-[#121316] selection:bg-navy-700/15">
      <Header />

      <main className="pt-24 pb-24">
        {/* Header Title */}
        <section className="container mx-auto px-6 mb-16 text-left">
          <div className="text-xs font-mono font-semibold text-navy-700/80 uppercase tracking-widest mb-3">Catálogo</div>
          <h1 className="font-heading text-5xl md:text-8xl font-semibold text-[#121316] tracking-tight mb-4">
            Nuestros <span className="text-gradient-brand">Productos</span>
          </h1>
          <p className="text-xl text-black/60 max-w-3xl font-medium leading-relaxed">
            Explora las creaciones de Dbit Inc., desde los títulos interactivos de <strong className="text-[#121316]">Dbit Games</strong> hasta plataformas de streaming y soluciones cloud de alto rendimiento.
          </p>
          <div className="h-1 w-24 bg-navy-700 mt-8 rounded-full"></div>
        </section>

        {/* Dbit Games Spotlight Banner */}
        <section className="container mx-auto px-6 mb-20">
          <div className="rounded-3xl bg-[#f5f5f7] border border-black/10 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-navy-700/10 border border-navy-700/30 text-navy-700 text-xs font-bold uppercase tracking-wider">
                <Gamepad2 size={16} />
                <span>División de Videojuegos &bull; Dbit Games</span>
              </div>
              <h2 className="font-heading text-3xl md:text-5xl font-semibold tracking-tight text-[#121316]">
                Dbit Games Studio
              </h2>
              <p className="text-black/70 text-base leading-relaxed">
                Desarrollamos mundos inmersivos, motores de físicas y títulos cross-platform para PC, consolas y entornos de realidad virtual.
              </p>
            </div>

            <Link
              href="/shop"
              className="px-7 py-3 bg-navy-700 hover:bg-navy-600 text-white font-medium rounded-full transition-colors text-[15px] whitespace-nowrap"
            >
              Ver Títulos & Gear
            </Link>
          </div>
        </section>

        {/* Products Grid */}
        <section className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productsList.map((product, i) => (
              <div
                key={i}
                className="group relative h-[520px] rounded-3xl overflow-hidden bg-zinc-200 border border-black/10 transition-all duration-700 hover:scale-[1.02] hover:border-navy-700/30 hover:shadow-2xl hover:shadow-black/10 flex flex-col justify-between"
              >
                {/* Background Image */}
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition-all duration-700 grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-80 scale-110 group-hover:scale-100"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

                {/* Top Badge */}
                <div className="relative z-10 p-6 flex justify-between items-center">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-navy-200 bg-black/60 px-3 py-1 rounded-full border border-white/10">
                    {product.badge}
                  </span>
                  <span className="text-xs text-white/60">{product.category}</span>
                </div>

                {/* Content */}
                <div className="relative z-10 p-6 sm:p-8 space-y-4">
                  <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-white tracking-tight group-hover:text-navy-200 transition-colors">
                    {product.title}
                  </h3>

                  <p className="text-white/75 text-sm leading-relaxed line-clamp-3">
                    {product.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {product.details.map((detail, dIndex) => (
                      <span
                        key={dIndex}
                        className="px-2.5 py-1 bg-white/15 rounded text-[11px] font-medium text-white/85"
                      >
                        {detail}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-white/15 flex items-center justify-between">
                    <a
                      href={product.link}
                      target={product.link.startsWith("http") ? "_blank" : undefined}
                      rel={product.link.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-xs font-bold text-navy-200 uppercase tracking-widest hover:text-white transition-colors flex items-center gap-1.5"
                    >
                      <span>{product.linkText}</span>
                      <ExternalLink size={13} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
