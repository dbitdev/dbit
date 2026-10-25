import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Empresa | Dbit, Inc.",
  description: "Conoce más sobre Dbit, Inc., nuestra visión, misión y liderazgo tecnológico.",
};

export default function CompanyPage() {
  return (
    <div className="min-h-screen text-[#121316] selection:bg-navy-700/15">
      <Header />

      <main className="pt-24 pb-24 container mx-auto px-6 max-w-4xl">
        <section className="mb-16 text-left">
          <div className="text-xs font-mono font-semibold text-navy-700/80 uppercase tracking-widest mb-3">Dbit, Inc.</div>
          <h1 className="font-heading text-5xl md:text-8xl font-semibold text-[#121316] tracking-tight mb-4">
            Sobre <span className="text-gradient-brand">Dbit Inc</span>
          </h1>
          <p className="text-xl text-black/60 font-medium leading-relaxed">
            Impulsamos la innovación tecnológica en e-commerce, radiodifusión digital, finanzas, movilidad y entretenimiento interactivo con Dbit Games.
          </p>
          <div className="h-1 w-24 bg-navy-700 mt-8 rounded-full"></div>
        </section>

        <div className="space-y-8 text-black/70 leading-relaxed text-lg font-light">
          <div className="bg-[#f5f5f7] p-8 md:p-12 rounded-3xl border border-black/10 space-y-4 hover:border-navy-700/20 transition-colors">
            <h2 className="font-heading text-2xl font-semibold text-[#121316] tracking-tight">Nuestra Visión</h2>
            <p>
              En Dbit Inc. construimos soluciones tecnológicas que conectan comunidades, optimizan negocios e inspiran a través de experiencias interactivas. Nuestro enfoque multidisciplinario abarca desde el desarrollo de software empresarial hasta la producción cinematográfica y el diseño de videojuegos de última generación.
            </p>
          </div>

          <div className="bg-[#f5f5f7] p-8 md:p-12 rounded-3xl border border-black/10 space-y-4 hover:border-navy-700/20 transition-colors">
            <h2 className="font-heading text-2xl font-semibold text-[#121316] tracking-tight">Ecosistema Integrado</h2>
            <p>
              A través de marcas como Mexica TV, Hueyi Tech y la división Dbit Games, articulamos proyectos que combinan infraestructura robusta en la nube, audiencias globales masivas y contenido digital de primer nivel.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
