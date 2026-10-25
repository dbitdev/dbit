import type { Metadata } from "next";
import LegalDocument from "@/components/LegalDocument";
import { legalDocs } from "@/lib/legal";

const doc = legalDocs.find((d) => d.slug === "terminos")!;

export const metadata: Metadata = {
  title: doc.title,
  description: doc.summary,
};

export default function Page() {
  return <LegalDocument doc={doc} />;
}
