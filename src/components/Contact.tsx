import Reveal from "@/components/Reveal";

export default function Contact() {
  return (
    <section id="contacto" className="scroll-mt-12 bg-[#f5f5f7] px-5 py-28 text-center md:py-40">
      <Reveal>
        <h2 className="mx-auto max-w-[760px] text-[40px] font-semibold leading-[1.06] tracking-[-0.03em] md:text-[72px]">
          ¿Tienes una idea?
          <br />
          <span className="text-black/40">Construyámosla.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-[520px] text-[19px] leading-[1.45] text-black/60">
          Alianzas, inversión, prensa o simplemente saludar. Leemos todo.
        </p>
        <a
          href="mailto:hola@dbit.inc"
          className="mt-10 inline-block rounded-full bg-black px-7 py-3.5 text-[17px] text-white transition-opacity hover:opacity-80"
        >
          hola@dbit.inc
        </a>
      </Reveal>
    </section>
  );
}
