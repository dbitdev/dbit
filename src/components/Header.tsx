"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/#ecosistema", label: "Ecosistema" },
  { href: "/tecnologia", label: "Tecnología" },
  { href: "/finanzas", label: "Finanzas" },
  { href: "/legal", label: "Legal" },
  { href: "/empresa", label: "Empresa" },
  { href: "/shop", label: "Tienda" },
];

/** `overDark`: la página arranca con un hero oscuro y el menú va en blanco hasta hacer scroll. */
export default function Header({ overDark = false }: { overDark?: boolean }) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const solid = !overDark || isScrolled || isMenuOpen;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? "bg-[rgba(251,251,253,0.8)] backdrop-blur-xl backdrop-saturate-[1.8] border-b border-black/[0.06]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-12 max-w-[1080px] items-center justify-between px-5">
        <Link href="/" aria-label="Dbit, Inc." className="flex items-center">
          <Image src="/brand/dbit-wordmark.png" alt="Dbit" width={300} height={100} priority className={`h-[22px] w-auto transition-[filter] duration-300 ${solid ? "" : "invert"}`} />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className={`text-[12px] transition-colors ${
                solid
                  ? pathname === item.href ? "text-black" : "text-black/60 hover:text-black"
                  : pathname === item.href ? "text-white" : "text-white/75 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href="/#contacto"
          className={`hidden rounded-full px-3.5 py-1 text-[12px] font-medium transition-opacity hover:opacity-80 md:block ${solid ? "bg-black text-white" : "bg-white text-black"}`}
        >
          Hablemos
        </a>

        <button
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMenuOpen}
          className="relative h-8 w-8 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={`absolute left-2 h-px w-4 transition-all ${solid ? "bg-black" : "bg-white"} duration-300 ${isMenuOpen ? "top-4 rotate-45" : "top-[13px]"}`} />
          <span className={`absolute left-2 h-px w-4 transition-all ${solid ? "bg-black" : "bg-white"} duration-300 ${isMenuOpen ? "top-4 -rotate-45" : "top-[19px]"}`} />
        </button>
      </div>

      <div
        className={`overflow-hidden transition-[max-height] duration-500 ease-[cubic-bezier(.4,0,.2,1)] md:hidden ${
          isMenuOpen ? "max-h-[32rem]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-8 pb-8 pt-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="py-2 text-[28px] font-semibold tracking-[-0.02em]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
