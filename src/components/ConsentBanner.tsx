"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { LEGAL_VERSION } from "@/lib/legal";

const STORAGE_KEY = "dbit-consent";
const OPEN_EVENT = "dbit:open-consent";

export interface Consent {
  version: string;
  analytics: boolean;
  acceptedAt: string;
}

export function readConsent(): Consent | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? (JSON.parse(raw) as Consent) : null;
    // Si los textos legales cambian de versión, se vuelve a pedir la aceptación.
    return parsed?.version === LEGAL_VERSION ? parsed : null;
  } catch {
    return null;
  }
}

export default function ConsentBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!readConsent()) setOpen(true);
    const reopen = () => setOpen(true);
    window.addEventListener(OPEN_EVENT, reopen);
    return () => window.removeEventListener(OPEN_EVENT, reopen);
  }, []);

  const save = (analytics: boolean) => {
    const consent: Consent = { version: LEGAL_VERSION, analytics, acceptedAt: new Date().toISOString() };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
    } catch {
      // Sin almacenamiento (modo privado): se respeta la elección durante la visita.
    }
    window.dispatchEvent(new CustomEvent("dbit:consent", { detail: consent }));
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-live="polite"
          aria-label="Términos y cookies"
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 24, opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-x-3 bottom-3 z-[70] mx-auto max-w-[680px] rounded-[22px] border border-black/[0.06] bg-[rgba(251,251,253,0.85)] p-5 shadow-[0_10px_40px_rgba(0,0,0,0.12)] backdrop-blur-xl backdrop-saturate-[1.8] md:bottom-5 md:p-6"
        >
          <p className="text-[15px] font-semibold tracking-[-0.01em]">Tu privacidad, primero.</p>
          <p className="mt-1.5 text-[13px] leading-[1.5] text-black/60">
            Al continuar aceptas los{" "}
            <Link href="/legal/terminos" className="text-[#0066cc] hover:underline">
              Términos y condiciones
            </Link>{" "}
            y el{" "}
            <Link href="/legal/privacidad" className="text-[#0066cc] hover:underline">
              Aviso de privacidad
            </Link>
            . Usamos cookies necesarias para que el sitio funcione y, si lo permites, de medición para mejorarlo.{" "}
            <Link href="/legal/cookies" className="text-[#0066cc] hover:underline">
              Más información
            </Link>
          </p>
          <div className="mt-4 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
            <button
              onClick={() => save(false)}
              className="rounded-full bg-black/[0.06] px-5 py-2 text-[14px] font-medium transition-colors hover:bg-black/10"
            >
              Solo necesarias
            </button>
            <button
              onClick={() => save(true)}
              className="rounded-full bg-[#0071e3] px-5 py-2 text-[14px] font-medium text-white transition-colors hover:bg-[#0077ed]"
            >
              Aceptar
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function ConsentPreferencesButton({ className }: { className?: string }) {
  return (
    <button onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))} className={className}>
      Preferencias de cookies
    </button>
  );
}
