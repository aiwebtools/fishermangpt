
import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';
import { Anchor, Fish, HelpCircle, Info, Menu, X } from 'lucide-react';
import FishermanScene from '@/components/FishermanScene';
import FaqSection from '@/components/FaqSection';
import TestimonialSection from '@/components/TestimonialSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import DisclaimerSection from '@/components/DisclaimerSection';
import FeatureCard from '@/components/FeatureCard';

const Index = () => {
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const headerOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);
  const heroRef = useRef<HTMLDivElement>(null);
  
  const toggleMenu = () => setMenuOpen(!menuOpen);
  
  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (menuOpen && e.target instanceof HTMLElement) {
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu && !mobileMenu.contains(e.target) && !e.target.closest('button[aria-label="Toggle menu"]')) {
          setMenuOpen(false);
        }
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [menuOpen]);
  
  // Disable body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Fixed Header */}
      <motion.header 
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b border-cyber-blue/20"
        style={{ opacity: headerOpacity }}
        initial={{ opacity: 0 }}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Fish className="h-8 w-8 text-cyber-blue" />
            <div>
              <h1 className="font-cyber text-xl md:text-2xl font-bold tracking-wider text-white">
                Fisherman <span className="neon-text">GPT</span>
              </h1>
              <p className="text-xs text-gray-400">Presented by AiWebTools.Ai</p>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a 
              href="https://chatgpt.com/g/g-AmVAYOglF-fisherman-gpt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="neon-btn"
            >
              USE Fisherman GPT Now
            </a>
            <a href="#faq" className="text-white hover:text-cyber-blue transition-colors">FAQ</a>
            <a href="#disclaimer" className="text-white hover:text-cyber-blue transition-colors">Disclaimer</a>
            <a 
              href="https://www.aiwebtools.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-cyber-blue transition-colors"
            >
              More AI Tools
            </a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="h-6 w-6 text-cyber-blue" />
            ) : (
              <Menu className="h-6 w-6 text-cyber-blue" />
            )}
          </button>
        </div>
      </motion.header>
      
      {/* Mobile Menu */}
      {menuOpen && (
        <div 
          id="mobile-menu"
          className="fixed inset-0 z-40 bg-cyber-black/95 backdrop-blur-xl md:hidden pt-24"
        >
          <nav className="flex flex-col items-center space-y-8 p-8">
            <a 
              href="https://chatgpt.com/g/g-AmVAYOglF-fisherman-gpt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="neon-btn w-full text-center"
              onClick={() => setMenuOpen(false)}
            >
              USE Fisherman GPT Now
            </a>
            <a 
              href="#faq" 
              className="text-white text-xl hover:text-cyber-blue transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              FAQ
            </a>
            <a 
              href="#disclaimer" 
              className="text-white text-xl hover:text-cyber-blue transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Disclaimer
            </a>
            <a 
              href="https://www.aiwebtools.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white text-xl hover:text-cyber-blue transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              More AI Tools
            </a>
          </nav>
        </div>
      )}

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-16"
      >
        <div className="absolute inset-0 -z-10">
          <FishermanScene />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block mb-2 py-1 px-3 rounded-full bg-cyber-blue/10 border border-cyber-blue/30"
            >
              <span className="text-cyber-blue font-medium text-sm">AI-Powered Fishing Assistant</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-cyber font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="text-white">Navigate The </span>
              <span className="text-gradient">Deep Waters</span>
              <span className="text-white"> With AI Precision</span>
            </motion.h1>
            
            <motion.p 
              className="text-gray-300 text-lg md:text-xl mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Fisherman GPT combines cutting-edge AI with expert fishing knowledge to find you the best spots, 
              cheapest gear, and most successful techniques for your next fishing adventure.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <a 
                href="https://chatgpt.com/g/g-AmVAYOglF-fisherman-gpt" 
                target="_blank" 
                rel="noopener noreferrer"
                className="neon-btn text-lg px-8 py-4"
              >
                USE Fisherman GPT Now
              </a>
              <a 
                href="#how-it-works" 
                className="text-white hover:text-cyber-blue transition-colors text-lg"
              >
                Learn How It Works
              </a>
            </motion.div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <a href="#features" aria-label="Scroll down">
            <svg 
              className="w-10 h-10 text-cyber-blue" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 cyber-grid relative">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-cyber font-bold mb-4">
              <span className="neon-text">Advanced</span> Features
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Fisherman GPT offers a comprehensive suite of tools to make your fishing trip successful, 
              from planning to execution and everything in between.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              title="Spot Location"
              description="Find the best fishing spots in your area with precise GPS coordinates and detailed water conditions."
              icon={<Anchor className="h-10 w-10 text-cyber-blue" />}
            />
            <FeatureCard 
              title="Equipment Finder"
              description="Get recommendations for the most affordable and effective fishing gear specific to your target species."
              icon={<Fish className="h-10 w-10 text-cyber-purple" />}
            />
            <FeatureCard 
              title="Cost Analysis"
              description="Receive detailed breakdowns of all expenses, from gear to guides, helping you budget effectively."
              icon={<Info className="h-10 w-10 text-cyber-green" />}
            />
            <FeatureCard 
              title="Technique Guide"
              description="Learn the most effective fishing techniques with step-by-step instructions tailored to your experience level."
              icon={<HelpCircle className="h-10 w-10 text-cyber-blue" />}
            />
            <FeatureCard 
              title="Weather Intelligence"
              description="Get real-time weather forecasts and understand how they affect fishing conditions in your area."
              icon={<Anchor className="h-10 w-10 text-cyber-purple" />}
            />
            <FeatureCard 
              title="Document Creation"
              description="Receive comprehensive reports with all the information you need, ready to download as a document."
              icon={<Info className="h-10 w-10 text-cyber-green" />}
            />
          </div>
        </div>
        
        {/* Fish image section */}
        <div className="mt-24 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="relative rounded-2xl overflow-hidden border border-cyber-blue/30 shadow-[0_0_50px_rgba(0,242,255,0.15)]">
              <img
                src="https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-cinematic-shot-of-a-bearded-fisherman-wearin.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:1200,h:600,cg:true"
                alt="Fisherman in action"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyber-black via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                <div className="max-w-2xl">
                  <h2 className="text-2xl md:text-3xl font-cyber font-bold mb-4 text-white">
                    Expert Fishing Knowledge at Your Fingertips
                  </h2>
                  <p className="text-gray-200 mb-6">
                    Fisherman GPT combines decades of fishing expertise with cutting-edge AI to deliver personalized advice for your specific situation.
                  </p>
                  <a 
                    href="https://chatgpt.com/g/g-AmVAYOglF-fisherman-gpt" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="neon-btn"
                  >
                    Start Fishing Smarter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 ocean-gradient relative">
        <div className="container mx-auto px-4">
          <HowItWorksSection />
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 cyber-grid relative">
        <div className="container mx-auto px-4">
          <TestimonialSection />
        </div>
      </section>
      
      {/* FAQ Section */}
      <section id="faq" className="py-20 ocean-gradient relative">
        <div className="container mx-auto px-4">
          <FaqSection />
        </div>
      </section>
      
      {/* Disclaimer Section */}
      <section id="disclaimer" className="py-20 cyber-grid relative">
        <div className="container mx-auto px-4">
          <DisclaimerSection />
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-cyber-blue/5"></div>
        <div 
          className="absolute inset-0 -z-10 bg-cyber-black" 
          style={{
            backgroundImage: "radial-gradient(circle at center, rgba(0, 242, 255, 0.1) 0%, rgba(3, 7, 17, 1) 70%)"
          }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-cyber font-bold mb-6">
              Ready to <span className="text-gradient">Transform</span> Your Fishing Experience?
            </h2>
            <p className="text-gray-300 text-lg mb-10 max-w-3xl mx-auto">
              Join thousands of anglers who are leveraging AI to find better spots, save money on gear, and catch more fish.
            </p>
            <a 
              href="https://chatgpt.com/g/g-AmVAYOglF-fisherman-gpt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="neon-btn text-lg px-10 py-4"
            >
              Start Using Fisherman GPT Today
            </a>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="border-t border-cyber-blue/20 relative">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <Fish className="h-8 w-8 text-cyber-blue" />
                <div>
                  <h3 className="font-cyber text-xl font-bold tracking-wider text-white">
                    Fisherman <span className="neon-text">GPT</span>
                  </h3>
                  <p className="text-xs text-gray-400">Presented by AiWebTools.Ai</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Navigate The Deep Waters With AI Precision
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://www.aiwebtools.ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-cyber-blue hover:text-white transition-colors"
                >
                  Visit AiWebTools.Ai
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-4">Navigation</h4>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://chatgpt.com/g/g-AmVAYOglF-fisherman-gpt" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyber-blue transition-colors"
                  >
                    USE Fisherman GPT Now
                  </a>
                </li>
                <li>
                  <a 
                    href="#faq" 
                    className="text-gray-400 hover:text-cyber-blue transition-colors"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a 
                    href="#disclaimer" 
                    className="text-gray-400 hover:text-cyber-blue transition-colors"
                  >
                    Disclaimer
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.aiwebtools.ai" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyber-blue transition-colors"
                  >
                    More AI Tools
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://openai.com/policies/privacy-policy/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyber-blue transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a 
                    href="https://aiwebtools.ai/terms-of-services" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyber-blue transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-4">Contact</h4>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="tel:4758008096" 
                    className="text-gray-400 hover:text-cyber-blue transition-colors"
                  >
                    (475) 800-8096
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:Contact@ai-webtools.com" 
                    className="text-gray-400 hover:text-cyber-blue transition-colors"
                  >
                    Contact@ai-webtools.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-cyber-blue/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              <a 
                href="https://www.aiwebtools.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-cyber-blue transition-colors"
              >
                © 2025 AI WEB TOOLS LLC All rights reserved.
              </a>
            </p>
            
            <div className="relative">
              <a 
                href="https://www.aiwebtools.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 rounded-full bg-cyber-blue/10 border border-cyber-blue/30 text-cyber-blue hover:bg-cyber-blue/20 transition-colors"
              >
                More AI Tools
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
