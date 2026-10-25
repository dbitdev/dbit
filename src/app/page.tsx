import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Ecosystem from "@/components/Ecosystem";
import HueyiPlatform from "@/components/HueyiPlatform";
import Principles from "@/components/Principles";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Ecosystem />
        <HueyiPlatform />
        <Principles />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
