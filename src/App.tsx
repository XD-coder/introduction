import { useEffect, useState } from "react";
import { Navbar } from "./components/layout/Navbar";
import { ScrollProgress } from "./components/layout/ScrollProgress";
import { Footer } from "./components/layout/Footer";
import { AboutSection } from "./components/sections/AboutSection";
import { HeroSection } from "./components/sections/HeroSection";
import { SkillsSection } from "./components/sections/SkillsSection";

function App() {
  const [scrollEnabled, setScrollEnabled] = useState(false);

  // Enable scroll after navbar loads (at 4.1 seconds)
  useEffect(() => {
    // Lock scroll initially
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      document.body.style.overflow = "auto";
      setScrollEnabled(true);
    }, 4100); // Slightly after navbar animation completes

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="relative h-screen overflow-y-scroll snap-y snap-mandatory">
      {/* Navbar */}
      <Navbar />

      {/* Scroll Progress */}
      {scrollEnabled && <ScrollProgress />}

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
