
import React from 'react';
import { Fish } from 'lucide-react';

const Footer = () => {
  return (
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
                  href="#features" 
                  className="text-gray-400 hover:text-cyber-blue transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a 
                  href="#how-it-works" 
                  className="text-gray-400 hover:text-cyber-blue transition-colors"
                >
                  How It Works
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
  );
};

export default Footer;
