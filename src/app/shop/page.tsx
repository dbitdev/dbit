import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductArt, { type Garment } from "@/components/ProductArt";
import ProjectMark from "@/components/ProjectMark";
import Reveal from "@/components/Reveal";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Tienda Dbit",
  description: "La tienda de Dbit, nuestra marca de merchandising, llega pronto a Hueyi.",
};

const hueyi = projects.find((p) => p.slug === "hueyi")!;
const pay = projects.find((p) => p.slug === "pay")!;

const items: { name: string; note: string; garment: Garment }[] = [
  { name: "Playeras", note: "Algodón pesado, corte relajado.", garment: "tee" },
  { name: "Sudaderas", note: "Para la oficina y para el frío.", garment: "hoodie" },
  { name: "Gorras y accesorios", note: "Los detalles que completan.", garment: "cap" },
];

export default function ShopPage() {
  return (
    <>
      <Header overDark />
      <main>
        <section className="relative overflow-hidden bg-black px-5 pb-20 pt-32 text-center text-white md:pb-28 md:pt-40">
          <div aria-hidden className="pointer-events-none absolute left-1/2 top-16 h-[480px] w-[820px] -translate-x-1/2 rounded-full opacity-40 blur-3xl [background:radial-gradient(closest-side,#3a3a3c,transparent)]" />
          <Reveal className="relative">
            <Image src="/brand/dbit-mark.png" alt="" width={1080} height={1080} priority className="mx-auto h-24 w-24 invert md:h-32 md:w-32" />
            <p className="mt-6 text-[17px] font-semibold text-white/55 md:text-[21px]">Tienda Dbit</p>
            <h1 className="mt-2 text-[48px] font-semibold leading-[1.05] tracking-[-0.035em] md:text-[88px]">
              Muy pronto.
              <br />
              <span className="text-white/45">En Hueyi.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-[560px] text-[19px] leading-[1.45] text-white/70 md:text-[21px]">
              La tienda de Dbit vivirá dentro de Hueyi: misma cuenta, mismo carrito y pago seguro con Hueyi Pay.
            </p>
            <a
              href="mailto:hola@dbit.inc?subject=Av%C3%ADsame%20cuando%20abra%20la%20tienda%20Dbit"
              className="mt-9 inline-block rounded-full bg-white px-7 py-3 text-[17px] text-black transition-opacity hover:opacity-85"
            >
              Avísame cuando abra
            </a>
          </Reveal>
        </section>

        <section className="bg-[#f5f5f7] py-24 md:py-32">
          <div className="mx-auto max-w-[1080px] px-5">
            <Reveal>
              <h2 className="text-[36px] font-semibold tracking-[-0.03em] md:text-[56px]">
                La primera colección.
                <span className="text-black/40"> Lo que viene.</span>
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {items.map((it, i) => (
                <Reveal key={it.name} delay={i * 0.06}>
                  <div className="flex h-full flex-col rounded-[28px] bg-white p-8">
                    <div className="flex aspect-[4/3] items-center justify-center rounded-[20px] bg-gradient-to-b from-[#fafafa] to-[#ececef] p-6">
                      <ProductArt garment={it.garment} />
                    </div>
                    <h3 className="mt-6 text-[24px] font-semibold tracking-[-0.02em]">{it.name}</h3>
                    <p className="mt-1 text-[16px] text-black/55">{it.note}</p>
                    <p className="mt-4 text-[13px] font-medium text-black/40">Próximamente</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-24 md:py-32">
          <div className="mx-auto max-w-[1080px] px-5">
            <Reveal>
              <h2 className="text-[36px] font-semibold tracking-[-0.03em] md:text-[56px]">Por qué en Hueyi.</h2>
            </Reveal>
            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {[
                { p: hueyi, t: "Una sola cuenta", d: "Compra Dbit con la misma cuenta que usas en Wey, Nectar y el resto del ecosistema." },
                { p: pay, t: "Pago con Hueyi Pay", d: "Tarjetas, Apple Pay, Google Pay y Mercado Pago, en un checkout seguro." },
              ].map(({ p, t, d }) => (
                <Reveal key={t}>
                  <div className="flex h-full items-start gap-5 rounded-[24px] bg-[#f5f5f7] p-7">
                    <ProjectMark project={p} size={56} />
                    <div>
                      <h3 className="text-[21px] font-semibold tracking-[-0.015em]">{t}</h3>
                      <p className="mt-1.5 text-[16px] leading-[1.5] text-black/60">{d}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
