import AboutSection from "@/components/AboutSection";
import BackgroundBlobs from "@/components/BackgroundBlobs";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import NeurodivergenceCards from "@/components/NeurodivergenceCards";
import ResourcesSection from "@/components/ResourcesSection";

export default function HomePage() {
  return (
    <div className="bg-pm-bg font-body text-pm-ink relative z-10 min-h-screen">
      <BackgroundBlobs />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <AboutSection />
        <NeurodivergenceCards />
        <ResourcesSection />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
