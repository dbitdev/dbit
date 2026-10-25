import Image from "next/image";
import { categories, projects } from "@/lib/projects";

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f7] text-[12px] text-black/55">
      <div className="mx-auto max-w-[1080px] border-t border-black/10 px-5 pb-10 pt-8">
        <Image src="/brand/dbit-inc.png" alt="Dbit, Inc." width={1024} height={356} className="mb-8 h-8 w-auto opacity-80" />
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6">
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
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-black/10 pt-5 md:flex-row md:justify-between">
          <p>Copyright © {new Date().getFullYear()} Dbit, Inc. Todos los derechos reservados.</p>
          <p>Hecho en México.</p>
        </div>
      </div>
    </footer>
  );
}
