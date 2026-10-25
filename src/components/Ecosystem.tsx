"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import ProjectMark from "@/components/ProjectMark";
import Reveal from "@/components/Reveal";
import { categories, projects, type Category, type Project } from "@/lib/projects";

type Filter = "Todos" | Category;

export default function Ecosystem() {
  const [filter, setFilter] = useState<Filter>("Todos");
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState<Project | null>(null);

  const featured = projects.filter((p) => p.featured);
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter(
      (p) =>
        (filter === "Todos" || p.category === filter) &&
        (!q || `${p.name} ${p.tagline} ${p.description} ${p.parent ?? ""}`.toLowerCase().includes(q)),
    );
  }, [filter, query]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <section id="ecosistema" className="scroll-mt-12 bg-[#f5f5f7] py-24 md:py-32">
      <div className="mx-auto max-w-[1080px] px-5">
        <Reveal>
          <h2 className="max-w-[720px] text-[40px] font-semibold leading-[1.08] tracking-[-0.03em] md:text-[64px]">
            El ecosistema.
            <span className="text-black/40"> Cada proyecto resuelve algo real.</span>
          </h2>
        </Reveal>

        {/* Destacados: carril horizontal */}
        <div className="-mx-5 mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06} className="snap-start">
              <button
                onClick={() => setOpen(p)}
                className="group relative flex h-[420px] w-[300px] flex-col justify-between overflow-hidden rounded-[28px] p-7 text-left text-white transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] hover:scale-[1.015] md:w-[340px]"
                style={{ background: `linear-gradient(160deg, ${p.hue[0]}, ${p.hue[1]})` }}
              >
                <div>
                  <div className="mb-6">
                    <ProjectMark project={p} size={52} />
                  </div>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-white/70">{p.category}</p>
                  <h3 className="mt-2 text-[32px] font-semibold tracking-[-0.025em]">{p.name}</h3>
                  <p className="mt-2 text-[19px] leading-snug text-white/85">{p.tagline}</p>
                </div>
                <span
                  aria-hidden
                  className="pointer-events-none absolute -bottom-16 -right-6 select-none text-[280px] font-bold leading-none tracking-[-0.06em] text-white/15 transition-transform duration-700 group-hover:-translate-y-2"
                >
                  {p.name.charAt(0)}
                </span>
                <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-[20px] backdrop-blur transition-colors group-hover:bg-white/30">
                  +
                </span>
              </button>
            </Reveal>
          ))}
        </div>

        {/* Controles */}
        <div className="mt-20 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div role="tablist" aria-label="Filtrar por industria" className="-mx-5 flex gap-2 overflow-x-auto px-5 [scrollbar-width:none] md:mx-0 md:px-0">
            {(["Todos", ...categories] as Filter[]).map((c) => (
              <button
                key={c}
                role="tab"
                aria-selected={filter === c}
                onClick={() => setFilter(c)}
                className={`shrink-0 rounded-full px-4 py-1.5 text-[14px] transition-colors ${
                  filter === c ? "bg-black text-white" : "bg-white text-black/70 hover:text-black"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <label className="relative block md:w-64">
            <span className="sr-only">Buscar proyecto</span>
            <svg aria-hidden viewBox="0 0 16 16" className="absolute left-3.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-black/40">
              <circle cx="7" cy="7" r="5" fill="none" stroke="currentColor" strokeWidth="1.6" />
              <path d="M11 11l3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar"
              className="w-full rounded-full bg-white py-2 pl-9 pr-4 text-[14px] outline-none ring-[#0071e3]/40 placeholder:text-black/40 focus:ring-4"
            />
          </label>
        </div>

        {/* Rejilla */}
        <motion.ul layout className="mt-8 grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <motion.li
                key={p.slug}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <button
                  onClick={() => setOpen(p)}
                  className="flex h-full w-full flex-col items-start gap-3 rounded-[20px] bg-white p-4 text-left sm:flex-row sm:gap-4 sm:p-5 transition-shadow duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
                >
                  <ProjectMark project={p} size={48} />
                  <div className="min-w-0">
                    <p className="truncate text-[11px] text-black/45 sm:text-[12px]">
                      {p.category}
                      <span className="hidden sm:inline">{p.parent && ` · por ${p.parent}`}</span>
                    </p>
                    <h3 className="text-[17px] font-semibold tracking-[-0.015em] sm:text-[19px]">{p.name}</h3>
                    <p className="mt-0.5 text-[13px] leading-snug text-black/60 sm:text-[14px]">{p.tagline}</p>
                  </div>
                </button>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
        {visible.length === 0 && (
          <p className="py-16 text-center text-[17px] text-black/50">Nada coincide con “{query}”.</p>
        )}
      </div>

      {/* Ficha */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-end justify-center bg-black/30 backdrop-blur-sm md:items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="ficha-titulo"
              onClick={(e) => e.stopPropagation()}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-h-[90vh] w-full overflow-y-auto rounded-t-[28px] bg-white md:max-w-[560px] md:rounded-[28px]"
            >
              <div className="h-40" style={{ background: `linear-gradient(135deg, ${open.hue[0]}, ${open.hue[1]})` }} />
              <button
                onClick={() => setOpen(null)}
                aria-label="Cerrar"
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-black/25 text-white backdrop-blur transition-colors hover:bg-black/40"
              >
                ✕
              </button>
              <div className="px-7 pb-8 md:px-9">
                <div className="-mt-9">
                  <ProjectMark project={open} size={72} />
                </div>
                <p className="mt-5 text-[14px] text-black/45">
                  {open.category}
                  {open.parent && ` · por ${open.parent}`}
                </p>
                <h3 id="ficha-titulo" className="text-[34px] font-semibold tracking-[-0.025em]">
                  {open.name}
                </h3>
                <p className="mt-1 text-[21px] leading-snug text-black/80">{open.tagline}</p>
                <p className="mt-5 text-[17px] leading-[1.5] text-black/60">{open.description}</p>
                <ul className="mt-6 divide-y divide-black/[0.08] border-y border-black/[0.08]">
                  {open.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-3 py-3 text-[15px]">
                      <span className="h-1.5 w-1.5 rounded-full" style={{ background: open.hue[0] }} />
                      {h}
                    </li>
                  ))}
                </ul>
                {open.url ? (
                  <a
                    href={open.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-block rounded-full bg-[#0071e3] px-6 py-3 text-[17px] text-white transition-colors hover:bg-[#0077ed]"
                  >
                    Visitar {open.name} ↗
                  </a>
                ) : (
                  <a href="#contacto" onClick={() => setOpen(null)} className="mt-7 inline-block text-[17px] text-[#0066cc] hover:underline">
                    Pregúntanos por {open.name} ›
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
