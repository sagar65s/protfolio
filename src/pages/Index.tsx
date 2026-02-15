import { useState } from "react";
import ThemeProvider from "@/components/ThemeProvider";
import SplashLoader from "@/components/SplashLoader";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import AnimatedBackground from "@/components/AnimatedBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TimelineSection from "@/components/TimelineSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import GitHubStats from "@/components/GitHubStats";
import CertificationsSection from "@/components/CertificationsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <ThemeProvider>
      {!loaded && <SplashLoader onComplete={() => setLoaded(true)} />}
      {loaded && (
        <>
          <AnimatedBackground />
          <CustomCursor />
          <ScrollProgress />
          <Navbar />
          <main>
            <HeroSection />
            <AboutSection />
            <TimelineSection />
            <SkillsSection />
            <ProjectsSection />
            <GitHubStats />
            <CertificationsSection />
            <TestimonialsSection />
            <ContactSection />
          </main>
          <Footer />
        </>
      )}
    </ThemeProvider>
  );
};

export default Index;
