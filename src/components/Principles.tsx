import Reveal from "@/components/Reveal";

const principles = [
  { n: "01", t: "Hecho en México, para México.", d: "Empezamos por problemas que vemos todos los días: el mercado, el transporte, la cocina, la fiesta." },
  { n: "02", t: "Pocas cosas, bien hechas.", d: "Cada proyecto tiene un propósito claro. Si no lo tiene, no sale." },
  { n: "03", t: "Todo se conecta.", d: "Lo que construimos para uno, lo aprovechan todos. Así crecemos sin empezar de cero." },
];

export default function Principles() {
  return (
    <section id="principios" className="scroll-mt-12 bg-white py-24 md:py-32">
      <div className="mx-auto max-w-[1080px] px-5">
        <Reveal>
          <h2 className="text-[40px] font-semibold tracking-[-0.03em] md:text-[64px]">Cómo trabajamos.</h2>
        </Reveal>
        <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-8">
          {principles.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.08}>
              <div className="border-t border-black/10 pt-6">
                <p className="text-[14px] font-semibold tabular-nums text-black/35">{p.n}</p>
                <h3 className="mt-3 text-[24px] font-semibold leading-tight tracking-[-0.02em]">{p.t}</h3>
                <p className="mt-3 text-[17px] leading-[1.5] text-black/55">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
