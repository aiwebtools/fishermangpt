
import React from 'react';
import { Fish } from 'lucide-react';

const AIWEBTOOLS_URL = "https://aiwebtools.lovable.app/?via=aiwebtools";

const Footer = () => {
  return (
    <footer className="border-t border-cyber-blue/20 relative">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Fish className="h-8 w-8 text-cyber-blue flex-shrink-0" />
              <div>
                <h3 className="font-cyber text-xl font-bold tracking-wider text-white">
                  Fisherman <span className="neon-text">GPT</span>
                </h3>
                <p className="text-xs text-gray-400">Free AI Tools by AiWebTools.AI</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 text-sm md:text-base">
              Free AI-Powered Fishing Assistant - Navigate The Deep Waters With AI Precision
            </p>
            <div className="flex space-x-4">
              <a 
                href={AIWEBTOOLS_URL}
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cyber-blue hover:text-white transition-colors text-sm md:text-base"
                title="AiWebTools.AI - Free AI Web Tools"
              >
                Visit AiWebTools.AI for More Free AI Tools
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Free AI Tools Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://chatgpt.com/g/g-AmVAYOglF-fisherman-gpt" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyber-blue transition-colors"
                  title="Use Free AI Fishing Assistant"
                >
                  USE Free AI Fishing Tool Now
                </a>
              </li>
              <li>
                <a href="#features" className="text-gray-400 hover:text-cyber-blue transition-colors" title="AI Fishing Tool Features">
                  AI Fishing Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-400 hover:text-cyber-blue transition-colors" title="How AI Fishing Assistant Works">
                  How AI Fishing Works
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-cyber-blue transition-colors" title="AI Fishing Tool FAQ">
                  AI Fishing FAQ
                </a>
              </li>
              <li>
                <a href="#disclaimer" className="text-gray-400 hover:text-cyber-blue transition-colors" title="AI Fishing Tool Disclaimer">
                  AI Tool Disclaimer
                </a>
              </li>
              <li>
                <a 
                  href={AIWEBTOOLS_URL}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyber-blue transition-colors"
                  title="AiWebTools.AI - More Free AI Tools"
                >
                  More Free AI Web Tools
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">AI Tools Legal</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://openai.com/policies/privacy-policy/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyber-blue transition-colors"
                  title="AI Tools Privacy Policy"
                >
                  AI Tools Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href={AIWEBTOOLS_URL}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyber-blue transition-colors"
                  title="AiWebTools.AI Terms of Service"
                >
                  AiWebTools.AI Terms of Service
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Contact AI WEB TOOLS</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="tel:4758008096" 
                  className="text-gray-400 hover:text-cyber-blue transition-colors"
                  title="Call AI WEB TOOLS LLC"
                >
                  (475) 800-8096
                </a>
              </li>
              <li>
                <a 
                  href="mailto:Contact@ai-webtools.com" 
                  className="text-gray-400 hover:text-cyber-blue transition-colors"
                  title="Email AI WEB TOOLS LLC"
                >
                  Contact@ai-webtools.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-cyber-blue/20 mt-8 md:mt-12 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-xs md:text-sm text-center md:text-left">
            <a 
              href={AIWEBTOOLS_URL}
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-cyber-blue transition-colors"
              title="AI WEB TOOLS LLC - Free AI Tools Provider"
            >
              © 2025 AI WEB TOOLS LLC - AiWebTools.AI - Free AI Tools Provider. All rights reserved.
            </a>
          </p>
          
          <div className="relative">
            <a 
              href={AIWEBTOOLS_URL}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-4 md:px-6 py-2 rounded-full bg-cyber-blue/10 border border-cyber-blue/30 text-cyber-blue hover:bg-cyber-blue/20 transition-colors text-sm md:text-base whitespace-nowrap"
              title="Discover More Free AI Web Tools"
            >
              More Free AI Web Tools
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
