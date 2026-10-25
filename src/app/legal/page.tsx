import type { Metadata } from "next";
import PracticePage from "@/components/PracticePage";
import { practices } from "@/lib/practices";

const practice = practices.find((p) => p.slug === "legal")!;

export const metadata: Metadata = {
  title: practice.name,
  description: practice.intro,
};

export default function Page() {
  return <PracticePage practice={practice} />;
}
