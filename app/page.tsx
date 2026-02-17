import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PendidikanSection from "@/components/PendidikanSection";
import SkillSection from "@/components/SkillSection";
import PengalamanSection from "@/components/PengalamanSection";
import QuoteSection from "@/components/QuoteSection";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  return (
    <main id="beranda" className="min-h-screen relative">
      <LoadingScreen />
      <Navbar />

      {/* Subtle parallax decorative dots — only on desktop for perf */}
      <div className="hidden md:block fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-[15%] left-[8%] w-3 h-3 rounded-full bg-[var(--color-accent)]/30 parallax-slow" />
        <div className="absolute top-[35%] right-[12%] w-2 h-2 rounded-full bg-[var(--color-primary)]/20 parallax-medium" />
        <div className="absolute top-[60%] left-[5%] w-4 h-4 rounded-full bg-[var(--color-accent)]/20 parallax-medium" />
        <div className="absolute top-[80%] right-[8%] w-2.5 h-2.5 rounded-full bg-[var(--color-primary)]/15 parallax-slow" />
      </div>

      <div className="relative z-10">
        <FadeIn>
          <HeroSection />
        </FadeIn>
        <FadeIn>
          <PendidikanSection />
        </FadeIn>
        <FadeIn>
          <SkillSection />
        </FadeIn>
        <FadeIn>
          <QuoteSection />
        </FadeIn>
        <FadeIn>
          <PengalamanSection />
        </FadeIn>
        <FadeIn>
          <Footer />
        </FadeIn>
      </div>
    </main>
  );
}
