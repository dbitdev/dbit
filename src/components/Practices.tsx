import Link from "next/link";
import Reveal from "@/components/Reveal";
import { practices, roles } from "@/lib/practices";

/** Qué es Dbit, Inc. y sus tres áreas de práctica. */
export default function Practices() {
  return (
    <section id="areas" className="scroll-mt-12 bg-white py-24 md:py-32">
      <div className="mx-auto max-w-[1080px] px-5">
        <Reveal>
          <h2 className="max-w-[820px] text-[40px] font-semibold leading-[1.08] tracking-[-0.03em] md:text-[64px]">
            Invertimos, asesoramos, construimos.
            <span className="text-black/40"> En cada proyecto.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.06}>
          <ul className="mt-8 flex flex-wrap gap-2">
            {roles.map((r) => (
              <li key={r.title} className="rounded-full bg-[#f5f5f7] px-4 py-1.5 text-[14px] text-black/70">
                {r.title}
              </li>
            ))}
          </ul>
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {practices.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06}>
              <Link
                href={`/${p.slug}`}
                className="group flex h-[320px] flex-col justify-between rounded-[28px] p-8 text-white transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] hover:scale-[1.015]"
                style={{ background: `linear-gradient(160deg, ${p.hue[0]}, ${p.hue[1]})` }}
              >
                <div>
                  <h3 className="text-[32px] font-semibold tracking-[-0.025em]">{p.name}</h3>
                  <p className="mt-2 text-[17px] text-white/85">{p.tagline}</p>
                </div>
                <span className="text-[17px] transition-transform group-hover:translate-x-1">Conocer más ›</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
