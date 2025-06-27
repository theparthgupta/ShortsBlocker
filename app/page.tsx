import BackgroundEffects from "@/components/Landing/BackgroundEffects";
import Header from "@/components/Landing/Header";
import HeroSection from "@/components/Landing/HeroSection";
import PlatformMarquee from "@/components/Landing/PlatformMarquee";
import WhyItMatters from "@/components/Landing/WhyItMatters";
import HowItWorks from "@/components/Landing/HowItWorks";
import Benefits from "@/components/Landing/Benefits";
import FinalCTA from "@/components/Landing/FinalCTA";
import Footer from "@/components/Landing/Footer";

export default function ShortsBlockerLanding() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <BackgroundEffects />
      <Header />
      <HeroSection />
      <PlatformMarquee />
      <WhyItMatters />
      <HowItWorks />
      <Benefits />
      <FinalCTA />
      <Footer />
    </div>
  );
}
