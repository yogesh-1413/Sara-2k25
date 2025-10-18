import CursorGlow from '@/components/CursorGlow';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

const SaraLanding = () => {
  return (
    <div className="min-h-screen">
      <CursorGlow />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default SaraLanding;