import AboutSection from "./components/AboutSection";
import BackgroundBlobs from "./components/BackgroundBlobs";
import CtaBanner from "./components/CtaBanner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import NeurodivergenceCards from "./components/NeurodivergenceCards";
import ResourcesSection from "./components/ResourcesSection";
import useWeightedScroll from "./hooks/useWeightedScroll";

function App() {
  useWeightedScroll();

  return (
    <div className="relative min-h-screen bg-pm-bg font-body text-pm-ink z-10">
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

export default App;
