
import React from 'react';

interface MobileMenuProps {
  onClose: () => void;
}

const MobileMenu = ({ onClose }: MobileMenuProps) => {
  return (
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
          onClick={onClose}
        >
          USE Fisherman GPT Now
        </a>
        <a 
          href="#features" 
          className="text-white text-xl hover:text-cyber-blue transition-colors"
          onClick={onClose}
        >
          Features
        </a>
        <a 
          href="#how-it-works" 
          className="text-white text-xl hover:text-cyber-blue transition-colors"
          onClick={onClose}
        >
          How It Works
        </a>
        <a 
          href="#faq" 
          className="text-white text-xl hover:text-cyber-blue transition-colors"
          onClick={onClose}
        >
          FAQ
        </a>
        <a 
          href="#disclaimer" 
          className="text-white text-xl hover:text-cyber-blue transition-colors"
          onClick={onClose}
        >
          Disclaimer
        </a>
        <a 
          href="https://www.aiwebtools.ai" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white text-xl hover:text-cyber-blue transition-colors"
          onClick={onClose}
        >
          More AI Tools
        </a>
      </nav>
    </div>
  );
};

export default MobileMenu;
