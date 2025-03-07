
import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Share Your Fishing Goals',
    description: 'Tell Fisherman GPT about your preferences, location, target species, and budget constraints.',
    delay: 0
  },
  {
    number: '02',
    title: 'Upload Images (Optional)',
    description: 'Share photos of fishing areas or fish species for more accurate and personalized recommendations.',
    delay: 0.1
  },
  {
    number: '03',
    title: 'Receive Detailed Analysis',
    description: 'Get comprehensive insights on fishing spots, gear recommendations, and cost estimates.',
    delay: 0.2
  },
  {
    number: '04',
    title: 'Follow Step-by-Step Guidance',
    description: 'Implement the tailored advice and techniques to maximize your fishing success.',
    delay: 0.3
  }
];

const HowItWorksSection = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-cyber font-bold mb-4">
          How <span className="neon-text">It</span> Works
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto">
          Fisherman GPT streamlines your fishing journey with a simple, effective process
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: step.delay }}
            viewport={{ once: true, margin: "-50px" }}
            className="relative"
          >
            <div className="cyber-card p-6 h-full">
              <div className="relative mb-6">
                <span className="font-cyber text-5xl font-bold text-cyber-blue/20">{step.number}</span>
                <div className="absolute bottom-0 left-0 w-12 h-1 bg-cyber-blue"></div>
              </div>
              
              <h3 className="text-xl font-cyber font-bold mb-3 text-white">{step.title}</h3>
              
              <p className="text-gray-300">{step.description}</p>
            </div>
            
            {step.number !== '04' && (
              <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 rotate-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#00f2ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            )}
          </motion.div>
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <a 
          href="https://chatgpt.com/g/g-AmVAYOglF-fisherman-gpt" 
          target="_blank" 
          rel="noopener noreferrer"
          className="neon-btn"
        >
          Try It Now
        </a>
      </motion.div>
    </div>
  );
};

export default HowItWorksSection;
