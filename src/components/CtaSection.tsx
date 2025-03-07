
import React from 'react';

const CtaSection = () => {
  return (
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
            Join thousands of anglers who are leveraging AI to find better spots, identify fish, discover the perfect bait, and catch more fish.
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
  );
};

export default CtaSection;
