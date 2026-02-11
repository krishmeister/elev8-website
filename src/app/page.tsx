import dynamic from 'next/dynamic';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

// Lazy load below-fold components for performance
const Features = dynamic(() => import("@/components/Features"), { ssr: true });
const Games = dynamic(() => import("@/components/Games"), { ssr: true });
const Team = dynamic(() => import("@/components/Team"), { ssr: true });
const FAQ = dynamic(() => import("@/components/FAQ"), { ssr: true });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: true });
const Footer = dynamic(() => import("@/components/Contact").then(mod => ({ default: mod.Footer })), { ssr: true });

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
