import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Games from "@/components/Games";
import Team from "@/components/Team";
import FAQ from "@/components/FAQ";
import Contact, { Footer } from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-elev8-yellow selection:text-black">
      <Navbar />
      <Hero />
      <Features />
      <Games />
      <Team />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
