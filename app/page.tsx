import Hero from '@/components/Hero';
import TrustStrip from '@/components/TrustStrip';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import ProcessSection from '@/components/ProcessSection';
import LeadCaptureSection from '@/components/LeadCaptureSection';
import FAQSection from '@/components/FAQSection';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar/>
      <Hero />
      <TrustStrip />
      <ProblemSection />
      <SolutionSection />
      <ServicesSection />
      <WhyChooseSection />
      <ProcessSection />
      <LeadCaptureSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
      
      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-meliora-border shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] md:hidden z-50 flex gap-3">
        <a 
          href="tel:+61200000000" 
          className="flex-1 flex items-center justify-center py-3 bg-white border border-meliora-black text-meliora-black font-semibold rounded-lg"
        >
          Call Now
        </a>
        <a 
          href="#contact" 
          className="flex-1 flex items-center justify-center py-3 bg-meliora-beige text-white font-semibold rounded-lg"
        >
          Get Quote
        </a>
      </div>
    </main>
  );
}
