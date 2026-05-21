import { About } from "@/components/site/About";
import { Approach } from "@/components/site/Approach";
import { Contact } from "@/components/site/Contact";
import { Credentials } from "@/components/site/Credentials";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/Hero";
import { Insights } from "@/components/site/Insights";
import { Marquee } from "@/components/site/Marquee";
import { Nav } from "@/components/site/Nav";
import { Philosophy } from "@/components/site/Philosophy";
import { Roadmap } from "@/components/site/Roadmap";
import { Services } from "@/components/site/Services";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Approach />
        <Philosophy />
        <Roadmap />
        <Credentials />
        <Insights />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
