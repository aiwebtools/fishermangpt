
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import FishermanScene from './FishermanScene';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
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
            <span className="text-cyber-blue font-medium text-sm">AI-Powered Multimodal Fishing Assistant</span>
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
  );
};

export default HeroSection;
