
import React from 'react';
import { useScroll, useTransform } from 'framer-motion';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import CapabilitiesSection from '@/components/CapabilitiesSection';
import TestimonialSection from '@/components/TestimonialSection';
import FaqSection from '@/components/FaqSection';
import DisclaimerSection from '@/components/DisclaimerSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';
import DisclaimerPopup from '@/components/DisclaimerPopup';

const Index = () => {
  const { scrollYProgress } = useScroll();
  const headerOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header headerOpacity={headerOpacity} />
      <DisclaimerPopup />

      <HeroSection />

      <FeaturesSection />

      <section id="how-it-works" className="py-20 ocean-gradient relative">
        <div className="container mx-auto px-4">
          <HowItWorksSection />
        </div>
      </section>
      
      <CapabilitiesSection />
      
      <section className="py-20 cyber-grid relative">
        <div className="container mx-auto px-4">
          <TestimonialSection />
        </div>
      </section>
      
      <section id="faq" className="py-20 ocean-gradient relative">
        <div className="container mx-auto px-4">
          <FaqSection />
        </div>
      </section>
      
      <section id="disclaimer" className="py-20 cyber-grid relative">
        <div className="container mx-auto px-4">
          <DisclaimerSection />
        </div>
      </section>
      
      <CtaSection />
      
      <Footer />
    </div>
  );
};

export default Index;
