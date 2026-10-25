import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Ecosystem from "@/components/Ecosystem";
import HueyiPlatform from "@/components/HueyiPlatform";
import Principles from "@/components/Principles";
import Practices from "@/components/Practices";
import Merch from "@/components/Merch";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header overDark />
      <main>
        <Hero />
        <Practices />
        <Ecosystem />
        <HueyiPlatform />
        <Principles />
        <Merch />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
