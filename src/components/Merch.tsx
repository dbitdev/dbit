import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

/** Dbit, la marca de merchandising dentro de Dbit, Inc. */
export default function Merch() {
  return (
    <section className="bg-black py-24 text-white md:py-32">
      <div className="mx-auto grid max-w-[1080px] items-center gap-12 px-5 md:grid-cols-2">
        <Reveal>
          <p className="text-[17px] font-semibold text-white/50">Dbit</p>
          <h2 className="mt-2 text-[40px] font-semibold leading-[1.06] tracking-[-0.03em] md:text-[64px]">
            Llévalo puesto.
          </h2>
          <p className="mt-5 max-w-[440px] text-[19px] leading-[1.5] text-white/60">
            Dbit es nuestra marca de merchandising: ropa y objetos con la calavera que nos identifica.
          </p>
          <Link href="/shop" className="mt-8 inline-block rounded-full bg-white px-6 py-3 text-[17px] text-black transition-opacity hover:opacity-85">
            Ir a la tienda
          </Link>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="flex aspect-square items-center justify-center rounded-[32px] bg-gradient-to-br from-[#1c1c1e] to-[#2c2c2e]">
            <Image src="/brand/dbit-mark.png" alt="Logotipo de Dbit" width={1080} height={1080} className="w-1/2 invert" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
