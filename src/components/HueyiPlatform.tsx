import ProjectMark from "@/components/ProjectMark";
import Reveal from "@/components/Reveal";
import { projects } from "@/lib/projects";

export default function HueyiPlatform() {
  const hueyi = projects.find((p) => p.slug === "hueyi")!;
  const family = projects.filter((p) => p.parent === "Hueyi");

  return (
    <section id="hueyi" className="scroll-mt-12 overflow-hidden bg-black py-24 text-white md:py-36">
      <div className="mx-auto max-w-[1080px] px-5 text-center">
        <Reveal>
          <div className="mx-auto w-fit">
            <ProjectMark project={hueyi} size={88} />
          </div>
          <p className="mt-8 text-[17px] font-semibold text-white/50 md:text-[21px]">Hueyi</p>
          <h2 className="mx-auto mt-2 max-w-[820px] text-[40px] font-semibold leading-[1.06] tracking-[-0.03em] md:text-[72px]">
            Una cuenta. Un cobro.
            <br />
            <span className="text-white/40">Todas las apps.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-[620px] text-[19px] leading-[1.45] text-white/60 md:text-[21px]">
            Hueyi es la base común del ecosistema: identidad, pagos, datos y logística compartidos. Así cada nueva marca nace conectada.
          </p>
        </Reveal>

        {/* Constelación: Hueyi al centro, la familia alrededor */}
        <Reveal delay={0.1}>
          <ul className="mx-auto mt-16 grid max-w-[760px] grid-cols-4 gap-x-4 gap-y-8 sm:grid-cols-4">
            {family.map((p) => (
              <li key={p.slug} className="flex flex-col items-center gap-2.5">
                <ProjectMark project={p} size={64} />
                <span className="text-[13px] text-white/70">{p.name}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mx-auto mt-20 grid max-w-[900px] gap-px overflow-hidden rounded-[24px] bg-white/10 text-left md:grid-cols-3">
            {[
              { t: "Identidad", d: "Un solo inicio de sesión para clientes, negocios y repartidores." },
              { t: "Pagos", d: "Hueyi Pay cobra por todas: tarjetas, Apple Pay, Google Pay y Mercado Pago." },
              { t: "Operación", d: "Pedidos, almacén y entregas sobre la misma base de datos." },
            ].map((f) => (
              <div key={f.t} className="bg-[#111] p-7">
                <h3 className="text-[21px] font-semibold tracking-[-0.015em]">{f.t}</h3>
                <p className="mt-2 text-[15px] leading-[1.5] text-white/55">{f.d}</p>
              </div>
            ))}
          </div>
          <a href={hueyi.url} target="_blank" rel="noopener noreferrer" className="mt-12 inline-block text-[17px] text-[#2997ff] hover:underline">
            Visitar hueyi.com ›
          </a>
        </Reveal>
      </div>
    </section>
  );
}
