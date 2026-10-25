import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectMark from "@/components/ProjectMark";
import Reveal from "@/components/Reveal";
import { practices, type Practice } from "@/lib/practices";
import { projects } from "@/lib/projects";

export default function PracticePage({ practice }: { practice: Practice }) {
  const [a, b] = practice.hue;
  const related = practice.related
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter((p) => p !== undefined);
  const others = practices.filter((p) => p.slug !== practice.slug);

  return (
    <>
      <Header overDark />
      <main>
        <section className="relative overflow-hidden bg-black px-5 pb-20 pt-32 text-center text-white md:pb-28 md:pt-40">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-10 h-[480px] w-[900px] -translate-x-1/2 rounded-full opacity-50 blur-3xl"
            style={{ background: `radial-gradient(closest-side, ${a}, ${b}55 50%, transparent)` }}
          />
          <div className="relative mx-auto max-w-[900px]">
            <Reveal>
              <p className="text-[17px] font-semibold text-white/60 md:text-[21px]">{practice.name}</p>
              <h1 className="mt-3 text-[44px] font-semibold leading-[1.05] tracking-[-0.035em] md:text-[80px]">
                {practice.headline[0]}
                <br />
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(90deg, ${a}, ${b})` }}>
                  {practice.headline[1]}
                </span>
              </h1>
              <p className="mx-auto mt-7 max-w-[640px] text-[19px] leading-[1.45] text-white/75 md:text-[21px]">{practice.intro}</p>
            </Reveal>
          </div>
        </section>

        <section className="bg-[#f5f5f7] py-24 md:py-32">
          <div className="mx-auto max-w-[1080px] px-5">
            <Reveal>
              <h2 className="text-[36px] font-semibold tracking-[-0.03em] md:text-[56px]">Qué hacemos.</h2>
            </Reveal>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {practice.services.map((s, i) => (
                <Reveal key={s.title} delay={(i % 3) * 0.06}>
                  <div className="h-full rounded-[24px] bg-white p-7">
                    <span className="block h-1.5 w-8 rounded-full" style={{ background: `linear-gradient(90deg, ${a}, ${b})` }} />
                    <h3 className="mt-5 text-[21px] font-semibold tracking-[-0.015em]">{s.title}</h3>
                    <p className="mt-2 text-[16px] leading-[1.5] text-black/60">{s.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-24 md:py-32">
          <div className="mx-auto max-w-[1080px] px-5">
            <Reveal>
              <h2 className="text-[36px] font-semibold tracking-[-0.03em] md:text-[56px]">Cómo lo hacemos.</h2>
            </Reveal>
            <ol className="mt-14 grid gap-12 md:grid-cols-3 md:gap-8">
              {practice.process.map((step, i) => (
                <Reveal key={step.title} delay={i * 0.08}>
                  <li className="border-t border-black/10 pt-6">
                    <p className="text-[14px] font-semibold tabular-nums text-black/35">{String(i + 1).padStart(2, "0")}</p>
                    <h3 className="mt-3 text-[24px] font-semibold tracking-[-0.02em]">{step.title}</h3>
                    <p className="mt-3 text-[17px] leading-[1.5] text-black/55">{step.description}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {related.length > 0 && (
          <section className="bg-[#f5f5f7] py-24 md:py-32">
            <div className="mx-auto max-w-[1080px] px-5">
              <Reveal>
                <h2 className="text-[36px] font-semibold tracking-[-0.03em] md:text-[56px]">
                  En el ecosistema.
                  <span className="text-black/40"> Donde se ve este trabajo.</span>
                </h2>
              </Reveal>
              <ul className="mt-12 grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4">
                {related.map((p) => (
                  <li key={p.slug} className="flex flex-col gap-3 rounded-[20px] bg-white p-5">
                    <ProjectMark project={p} size={48} />
                    <div>
                      <h3 className="text-[17px] font-semibold tracking-[-0.015em]">{p.name}</h3>
                      <p className="mt-0.5 text-[13px] leading-snug text-black/60">{p.tagline}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        <section className="bg-white px-5 py-24 md:py-32">
          <div className="mx-auto max-w-[1080px]">
            <Reveal>
              <div className="rounded-[28px] bg-black px-7 py-14 text-center text-white md:py-20">
                <h2 className="text-[32px] font-semibold tracking-[-0.03em] md:text-[48px]">¿Tu proyecto necesita esto?</h2>
                <p className="mx-auto mt-4 max-w-[520px] text-[17px] text-white/65">
                  Cuéntanos en qué etapa estás. Respondemos a cada mensaje.
                </p>
                <a
                  href={`mailto:hola@dbit.inc?subject=${encodeURIComponent(practice.name)}`}
                  className="mt-8 inline-block rounded-full bg-white px-7 py-3 text-[17px] text-black transition-opacity hover:opacity-85"
                >
                  Escríbenos
                </a>
              </div>
            </Reveal>
            <div className="mt-16 grid gap-4 md:grid-cols-2">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  href={`/${o.slug}`}
                  className="group flex items-center justify-between rounded-[20px] bg-[#f5f5f7] p-6 transition-colors hover:bg-[#ececf0]"
                >
                  <div>
                    <p className="text-[13px] text-black/45">También</p>
                    <p className="text-[21px] font-semibold tracking-[-0.015em]">{o.name}</p>
                    <p className="text-[14px] text-black/55">{o.tagline}</p>
                  </div>
                  <span className="text-[24px] text-black/30 transition-transform group-hover:translate-x-1">›</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
