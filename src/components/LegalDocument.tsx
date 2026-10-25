import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { legalDocs, type LegalDoc } from "@/lib/legal";

export default function LegalDocument({ doc }: { doc: LegalDoc }) {
  return (
    <>
      <Header />
      <main className="bg-white px-5 pb-24 pt-28 md:pt-36">
        <div className="mx-auto grid max-w-[1080px] gap-12 md:grid-cols-[220px_1fr]">
          <nav aria-label="Documentos legales" className="md:sticky md:top-24 md:self-start">
            <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.08em] text-black/40">Legal</p>
            <ul className="flex gap-2 overflow-x-auto md:flex-col md:gap-1">
              {legalDocs.map((d) => (
                <li key={d.slug} className="shrink-0">
                  <Link
                    href={`/legal/${d.slug}`}
                    aria-current={d.slug === doc.slug ? "page" : undefined}
                    className={`block rounded-full px-3 py-1.5 text-[14px] transition-colors md:rounded-lg ${
                      d.slug === doc.slug ? "bg-black text-white md:bg-[#f5f5f7] md:text-black" : "text-black/60 hover:text-black"
                    }`}
                  >
                    {d.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <article className="max-w-[680px]">
            <h1 className="text-[40px] font-semibold leading-[1.08] tracking-[-0.03em] md:text-[56px]">{doc.title}</h1>
            <p className="mt-4 text-[19px] leading-[1.45] text-black/60">{doc.summary}</p>
            <p className="mt-3 text-[13px] text-black/40">Última actualización: {doc.updated}</p>
            <div className="mt-12 space-y-10">
              {doc.sections.map((s, i) => (
                <section key={s.heading}>
                  <h2 className="text-[21px] font-semibold tracking-[-0.015em]">
                    <span className="mr-2 tabular-nums text-black/30">{i + 1}.</span>
                    {s.heading}
                  </h2>
                  {s.body.map((p) => (
                    <p key={p.slice(0, 32)} className="mt-3 text-[16px] leading-[1.65] text-black/70">
                      {p}
                    </p>
                  ))}
                </section>
              ))}
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
