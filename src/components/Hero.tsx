import Image from "next/image";
import Reveal from "@/components/Reveal";
import { projects, categories } from "@/lib/projects";

export default function Hero() {
  return (
    <section className="relative flex min-h-[88svh] items-center overflow-hidden bg-black px-5 pb-16 pt-24 text-center text-white md:pb-20 md:pt-28">
      <Image src="/assets/media/hero-1.jpg" alt="" fill priority sizes="100vw" className="object-cover" />
      {/* Velo para legibilidad: más oscuro arriba (menú) y abajo (cifras) */}
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/70" />

      <div className="relative mx-auto max-w-[980px]">
        <Reveal>
          <Image src="/brand/dbit-mark.png" alt="" width={1080} height={1080} priority className="mx-auto mb-3 h-16 w-16 invert md:h-20 md:w-20" />
          <p className="mb-4 text-[17px] font-semibold text-white/70 md:text-[21px]">Dbit, Inc.</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="text-[48px] font-semibold leading-[1.05] tracking-[-0.035em] [text-shadow:0_2px_30px_rgba(0,0,0,0.25)] md:text-[96px]">
            Una idea.
            <br />
            <span className="bg-gradient-to-r from-[#64d2ff] via-[#da8fff] to-[#ff6482] bg-clip-text text-transparent">
              Muchas formas.
            </span>
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mx-auto mt-6 max-w-[640px] text-[19px] leading-[1.45] text-white/85 md:text-[24px]">
            Dbit, Inc. invierte, asesora y construye proyectos de tecnología, comercio, medios y juegos. Aquí viven todos.
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-x-7 gap-y-4">
            <a
              href="#ecosistema"
              className="rounded-full bg-[#0071e3] px-6 py-3 text-[17px] text-white transition-colors hover:bg-[#0077ed]"
            >
              Explorar proyectos
            </a>
            <a href="#hueyi" className="text-[17px] text-[#64d2ff] hover:underline">
              Conoce Hueyi ›
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.32}>
          <dl className="mx-auto mt-14 grid max-w-[720px] grid-cols-3 divide-x divide-white/20 md:mt-16">
            {[
              { value: projects.length, label: "proyectos" },
              { value: categories.length, label: "industrias" },
              { value: 1, label: "visión" },
            ].map((stat) => (
              <div key={stat.label} className="px-4">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-[40px] font-semibold tracking-[-0.03em] md:text-[56px]">{stat.value}</dd>
                <dd className="text-[14px] text-white/65 md:text-[17px]">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
