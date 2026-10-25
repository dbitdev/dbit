"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Send, CheckCircle2, Building2, ExternalLink, ShieldCheck, Server, Tv, Globe2, ArrowRight } from "lucide-react";

const partnerCases = [
  {
    partner: "Mexica",
    sector: "Medios, Periodismo & Streaming OTT",
    scope: "Infraestructura de Radiodifusión Digital 4K",
    description: "Desarrollo y despliegue de la arquitectura de streaming en vivo y distribución de contenidos multimedia, alcanzando a más de 5 millones de espectadores con latencia ultra baja.",
    technologies: ["HLS / DASH Ultra-Low Latency", "Next.js & Edge CDNs", "Transmisión 4K Multicanal"],
    metrics: "5M+ Espectadores Activos",
    image: "/assets/media/hero-1.jpg",
  },
  {
    partner: "Hueyi Technologies",
    sector: "Cloud Computing & Enterprise Software",
    scope: "Arquitectura de Microservicios Multi-Cloud",
    description: "Diseño e implementación de clústeres elásticos distribuidos para procesamiento masivo de datos empresariales y orquestación con 99.99% de disponibilidad garantizada.",
    technologies: ["Kubernetes & Go Microservices", "PostgreSQL & ClickHouse", "Zero-Trust Security"],
    metrics: "99.99% Uptime Global",
    image: "/assets/media/1.jpg",
  },
  {
    partner: "Netflix",
    sector: "Entretenimiento & Streaming Global",
    scope: "Optimización de Ingesta de Video & Pipelines de Medios",
    description: "Colaboración técnica en la optimización de flujos de ingesta y codificación de activos multimedia para transmisiones de alta eficiencia y rendimiento.",
    technologies: ["Video Encoding Pipelines", "Dynamic Asset Delivery", "API Gateway Performance"],
    metrics: "Distribución de Alta Fidelidad",
    image: "/assets/media/hero-1.jpg",
  },
  {
    partner: "Ran Inc",
    sector: "Fintech & Movilidad Inteligente",
    scope: "Plataforma Transaccional de Alta Concurrencia",
    description: "Construcción de motores de conciliación de pagos en tiempo real, backend de movilidad urbana y autenticación biométrica de usuarios.",
    technologies: ["Event-Driven Architecture", "Sistemas de Pagos Distribuidos", "APIs Financieras"],
    metrics: "+1M Transacciones / Día",
    image: "/assets/media/1.jpg",
  },
  {
    partner: "Bayer",
    sector: "Salud, Farmacéutica & Enterprise Data",
    scope: "Sistemas Seguros de Gestión de Datos & Cumplimiento",
    description: "Desarrollo de plataformas de gestión y analítica de datos con estrictos estándares internacionales de privacidad, cifrado de grado militar y gobernanza de información.",
    technologies: ["Data Encryption End-to-End", "Cumplimiento HIPAA / GDPR", "Data Pipelines Seguros"],
    metrics: "Seguridad y Cumplimiento 100%",
    image: "/assets/media/1.jpg",
  },
];

export default function PartnersPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    interest: "Alianza Estratégica",
    message: "",
  });

  return (
    <div className="min-h-screen text-[#121316] selection:bg-navy-700/15">
      <Header />

      <main className="pt-24 pb-24">
        {/* Section Header */}
        <section className="container mx-auto px-6 mb-16 text-left">
          <div className="text-xs font-mono font-semibold text-navy-700/80 uppercase tracking-widest mb-3">Colaboración Corporativa</div>
          <h1 className="font-heading text-5xl md:text-8xl font-semibold text-[#121316] tracking-tight mb-4">
            Socios & <span className="text-gradient-brand">Alianzas</span>
          </h1>
          <p className="text-xl text-black/60 max-w-3xl font-medium leading-relaxed">
            Impulsamos la innovación junto a líderes globales como <strong className="text-[#121316]">Mexica</strong>, <strong className="text-[#121316]">Hueyi Technologies</strong>, <strong className="text-[#121316]">Netflix</strong>, <strong className="text-[#121316]">Ran Inc</strong> y <strong className="text-[#121316]">Bayer</strong> en streaming, cloud, fintech, salud y entretenimiento interactivo.
          </p>
          <div className="h-1 w-24 bg-navy-700 mt-8 rounded-full"></div>
        </section>

        {/* Work Samples / Partner Case Studies Grid */}
        <section className="container mx-auto px-6 mb-24">
          <div className="mb-12">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight text-[#121316] mb-2">
              Muestras de Trabajo & Casos de Éxito
            </h2>
            <p className="text-black/50 text-sm">
              Proyectos de alta escala técnica desarrollados en colaboración con nuestros socios.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {partnerCases.map((item, index) => (
              <div
                key={index}
                className="group relative rounded-3xl overflow-hidden bg-white border border-black/10 hover:border-navy-700/30 transition-all duration-500 hover:shadow-2xl hover:shadow-black/10 flex flex-col justify-between"
              >
                {/* Media Image */}
                <div className="relative aspect-[16/8] w-full overflow-hidden bg-zinc-200">
                  <Image
                    src={item.image}
                    alt={item.partner}
                    fill
                    className="object-cover transition-all duration-700 grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-90 scale-105 group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>

                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="px-3.5 py-1 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold text-navy-700 uppercase tracking-wider border border-black/10">
                      {item.partner}
                    </span>
                    <span className="px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-[11px] font-mono text-white">
                      {item.metrics}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 space-y-6 flex-grow flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="text-xs font-mono text-black/40 uppercase tracking-wider">
                      {item.sector}
                    </div>
                    <h3 className="font-heading text-2xl font-semibold text-[#121316] tracking-tight group-hover:text-navy-700 transition-colors">
                      {item.scope}
                    </h3>
                    <p className="text-sm text-black/60 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="space-y-2 pt-2 border-t border-black/10">
                    <div className="text-[11px] font-bold text-black/40 uppercase tracking-widest">
                      Tecnologías Clave:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech, tIndex) => (
                        <span
                          key={tIndex}
                          className="px-2.5 py-1 rounded bg-black/[0.03] border border-black/10 text-xs font-mono text-black/70"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Corporate Contact & Inquiry Section */}
        <section className="container mx-auto px-6 max-w-4xl">
          <div className="rounded-3xl bg-[#f5f5f7] border border-black/10 p-8 md:p-12">
            <div className="mb-8 space-y-2">
              <h2 className="font-heading text-3xl font-semibold tracking-tight text-[#121316]">
                Iniciar Alianza Corporativa
              </h2>
              <p className="text-black/60 text-sm">
                Conéctate con nuestra junta directiva e ingenieros para explorar oportunidades de colaboración técnica y comercial.
              </p>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-in zoom-in-95 duration-500">
                <div className="w-14 h-14 rounded-full bg-navy-700/10 text-navy-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 size={28} />
                </div>
                <h3 className="text-2xl font-semibold tracking-tight text-[#121316]">¡Solicitud Recibida!</h3>
                <p className="text-black/60 text-sm max-w-md mx-auto">
                  Gracias por tu interés en colaborar con Dbit Inc. Un representante corporativo se pondrá en contacto a la brevedad.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-black/5 hover:bg-black/10 text-[#121316] text-xs font-bold uppercase tracking-wider rounded-xl transition-colors"
                >
                  Enviar otra consulta
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-black/60 uppercase tracking-widest mb-2">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Tu nombre"
                      className="w-full px-4 py-3 bg-white border border-black/10 rounded-xl text-sm text-[#121316] placeholder-black/30 focus:outline-none focus:border-navy-700 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-black/60 uppercase tracking-widest mb-2">
                      Correo Corporativo *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="nombre@empresa.com"
                      className="w-full px-4 py-3 bg-white border border-black/10 rounded-xl text-sm text-[#121316] placeholder-black/30 focus:outline-none focus:border-navy-700 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-black/60 uppercase tracking-widest mb-2">
                      Empresa u Organización *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Nombre de la empresa"
                      className="w-full px-4 py-3 bg-white border border-black/10 rounded-xl text-sm text-[#121316] placeholder-black/30 focus:outline-none focus:border-navy-700 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-black/60 uppercase tracking-widest mb-2">
                      Tipo de Colaboración
                    </label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-black/10 rounded-xl text-sm text-[#121316] focus:outline-none focus:border-navy-700 transition-colors"
                    >
                      <option value="Alianza Estratégica">Alianza Estratégica</option>
                      <option value="Desarrollo Cloud & Software">Desarrollo Cloud & Software</option>
                      <option value="Streaming & Mexica TV">Streaming & Mexica TV</option>
                      <option value="Dbit Games Collaboration">Dbit Games Collaboration</option>
                      <option value="Inversión / Corporativo">Inversión / Corporativo</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-black/60 uppercase tracking-widest mb-2">
                    Detalles de la Propuesta *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe los objetivos de la alianza o especificaciones técnicas del proyecto..."
                    className="w-full px-4 py-3 bg-white border border-black/10 rounded-xl text-sm text-[#121316] placeholder-black/30 focus:outline-none focus:border-navy-700 transition-colors"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-navy-700 hover:bg-navy-600 text-white font-medium text-[15px] rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={16} />
                  <span>Enviar Solicitud Corporativa</span>
                </button>
              </form>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
