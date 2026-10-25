import Image from "next/image";
import Link from "next/link";
import { ConsentPreferencesButton } from "@/components/ConsentBanner";
import { legalDocs } from "@/lib/legal";
import { practices } from "@/lib/practices";
import { categories, projects } from "@/lib/projects";

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f7] text-[12px] text-black/55">
      <div className="mx-auto max-w-[1080px] border-t border-black/10 px-5 pb-10 pt-8">
        <Image src="/brand/dbit-inc.png" alt="Dbit, Inc." width={1024} height={356} className="mb-8 h-8 w-auto opacity-80" />
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:grid-cols-8">
          <div>
            <h3 className="mb-2.5 font-semibold text-black/80">Dbit, Inc.</h3>
            <ul className="space-y-2">
              <li><Link href="/empresa" className="hover:text-black hover:underline">Empresa</Link></li>
              {practices.map((p) => (
                <li key={p.slug}>
                  <Link href={`/${p.slug}`} className="hover:text-black hover:underline">{p.name}</Link>
                </li>
              ))}
              <li><Link href="/shop" className="hover:text-black hover:underline">Tienda Dbit</Link></li>
            </ul>
          </div>
          {categories.map((c) => (
            <div key={c}>
              <h3 className="mb-2.5 font-semibold text-black/80">{c}</h3>
              <ul className="space-y-2">
                {projects
                  .filter((p) => p.category === c)
                  .map((p) => (
                    <li key={p.slug}>
                      {p.url ? (
                        <a href={p.url} target="_blank" rel="noopener noreferrer" className="hover:text-black hover:underline">
                          {p.name}
                        </a>
                      ) : (
                        p.name
                      )}
                    </li>
                  ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="mb-2.5 font-semibold text-black/80">Legal</h3>
            <ul className="space-y-2">
              {legalDocs.map((d) => (
                <li key={d.slug}>
                  <Link href={`/legal/${d.slug}`} className="hover:text-black hover:underline">{d.title}</Link>
                </li>
              ))}
              <li><ConsentPreferencesButton className="text-left hover:text-black hover:underline" /></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-black/10 pt-5 md:flex-row md:justify-between">
          <p>Copyright © {new Date().getFullYear()} Dbit, Inc. Todos los derechos reservados.</p>
          <p>Hecho en México.</p>
        </div>
      </div>
    </footer>
  );
}
