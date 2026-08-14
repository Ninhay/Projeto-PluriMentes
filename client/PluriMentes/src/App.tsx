import Header from "./components/Header";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import AboutSection from "./components/AboutSection";
import NeurodivergenceCards from "./components/NeurodivergenceCards";
import ResourcesSection from "./components/ResourcesSection";
import CtaBanner from "./components/CtaBanner";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-pm-bg font-body text-pm-ink">
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
