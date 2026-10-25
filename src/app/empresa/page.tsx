import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { practices, roles } from "@/lib/practices";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Empresa",
  description:
    "Dbit, Inc. participa en proyectos, emprendimientos y empresas como inversionista, asesor y consultor en tecnología, finanzas y legal.",
};

export default function EmpresaPage() {
  return (
    <>
      <Header overDark />
      <main>
        <section className="relative flex min-h-[80svh] items-center justify-center overflow-hidden bg-black px-5 pb-20 pt-32 text-center text-white md:pb-28 md:pt-40">
          <Image src="/assets/media/hero-1.jpg" alt="" fill priority sizes="100vw" className="object-cover object-bottom" />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/80" />
          <Reveal className="relative">
            <Image src="/brand/dbit-mark.png" alt="" width={1080} height={1080} priority className="mx-auto h-16 w-16 invert md:h-20 md:w-20" />
            <p className="mt-5 text-[17px] font-semibold text-white/60 md:text-[21px]">Dbit, Inc.</p>
            <h1 className="mx-auto mt-3 max-w-[900px] text-[44px] font-semibold leading-[1.05] tracking-[-0.035em] md:text-[80px]">
              Detrás de cada proyecto,
              <br />
              <span className="text-white/45">alguien que lo empuja.</span>
            </h1>
            <p className="mx-auto mt-7 max-w-[660px] text-[19px] leading-[1.45] text-white/75 md:text-[21px]">
              Dbit, Inc. es la empresa que participa en todos los proyectos, emprendimientos y marcas de este ecosistema. A veces como
              inversionista, a veces como asesor, a veces como consultor. Casi siempre, como las tres.
            </p>
          </Reveal>
        </section>

        <section className="bg-[#f5f5f7] py-24 md:py-32">
          <div className="mx-auto max-w-[1080px] px-5">
            <Reveal>
              <h2 className="text-[36px] font-semibold tracking-[-0.03em] md:text-[56px]">Cómo participamos.</h2>
            </Reveal>
            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {roles.map((r, i) => (
                <Reveal key={r.title} delay={i * 0.06}>
                  <div className="h-full rounded-[24px] bg-white p-8">
                    <p className="text-[14px] font-semibold tabular-nums text-black/35">{String(i + 1).padStart(2, "0")}</p>
                    <h3 className="mt-3 text-[28px] font-semibold tracking-[-0.02em]">{r.title}</h3>
                    <p className="mt-3 text-[17px] leading-[1.5] text-black/60">{r.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-24 md:py-32">
          <div className="mx-auto max-w-[1080px] px-5">
            <Reveal>
              <h2 className="text-[36px] font-semibold tracking-[-0.03em] md:text-[56px]">
                Tres áreas.
                <span className="text-black/40"> Un mismo equipo.</span>
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {practices.map((p, i) => (
                <Reveal key={p.slug} delay={i * 0.06}>
                  <Link
                    href={`/${p.slug}`}
                    className="group flex h-[300px] flex-col justify-between rounded-[28px] p-8 text-white transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] hover:scale-[1.015]"
                    style={{ background: `linear-gradient(160deg, ${p.hue[0]}, ${p.hue[1]})` }}
                  >
                    <div>
                      <h3 className="text-[32px] font-semibold tracking-[-0.025em]">{p.name}</h3>
                      <p className="mt-2 text-[17px] text-white/85">{p.tagline}</p>
                    </div>
                    <span className="text-[17px]">Conocer más ›</span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-black py-24 text-center text-white md:py-32">
          <div className="mx-auto max-w-[1080px] px-5">
            <Reveal>
              <dl className="mx-auto grid max-w-[760px] grid-cols-3 divide-x divide-white/15">
                {[
                  { v: projects.length, l: "proyectos" },
                  { v: practices.length, l: "áreas de práctica" },
                  { v: roles.length, l: "formas de participar" },
                ].map((s) => (
                  <div key={s.l} className="px-3">
                    <dt className="sr-only">{s.l}</dt>
                    <dd className="text-[44px] font-semibold tracking-[-0.03em] md:text-[64px]">{s.v}</dd>
                    <dd className="text-[14px] text-white/55 md:text-[17px]">{s.l}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </section>

        <section className="bg-[#f5f5f7] py-24 md:py-32">
          <div className="mx-auto grid max-w-[1080px] items-center gap-12 px-5 md:grid-cols-2">
            <Reveal>
              <p className="text-[17px] font-semibold text-black/45">Dentro de Dbit, Inc.</p>
              <h2 className="mt-2 text-[36px] font-semibold leading-[1.08] tracking-[-0.03em] md:text-[56px]">Dbit, la marca.</h2>
              <p className="mt-5 text-[19px] leading-[1.5] text-black/60">
                Además de la empresa, Dbit es nuestra marca de merchandising: ropa y objetos con la calavera que nos identifica.
              </p>
              <Link href="/shop" className="mt-7 inline-block rounded-full bg-black px-6 py-3 text-[17px] text-white transition-opacity hover:opacity-80">
                Ir a la tienda
              </Link>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="flex aspect-square items-center justify-center rounded-[32px] bg-white">
                <Image src="/brand/dbit-mark.png" alt="Logotipo de Dbit" width={1080} height={1080} className="w-1/2" />
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
