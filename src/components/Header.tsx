
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Fish, Menu, X } from 'lucide-react';
import MobileMenu from './MobileMenu';

const AIWEBTOOLS_URL = "https://aiwebtools.lovable.app/?via=aiwebtools";

interface HeaderProps {
  headerOpacity: any;
}

const Header = ({ headerOpacity }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => setMenuOpen(!menuOpen);
  
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (menuOpen && e.target instanceof HTMLElement) {
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu && !mobileMenu.contains(e.target) && !e.target.closest('button[aria-label="Toggle navigation menu"]')) {
          setMenuOpen(false);
        }
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [menuOpen]);
  
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
    <>
      <motion.header 
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b border-cyber-blue/20"
        style={{ opacity: headerOpacity }}
        initial={{ opacity: 0 }}
      >
        <div className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2 min-w-0">
            <Fish className="h-7 w-7 md:h-8 md:w-8 text-cyber-blue flex-shrink-0" />
            <div className="min-w-0">
              <h1 className="font-cyber text-lg md:text-2xl font-bold tracking-wider text-white truncate">
                Fisherman <span className="neon-text">GPT</span>
              </h1>
              <p className="text-[10px] md:text-xs text-gray-400 truncate">Free AI Tools by AiWebTools.AI</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
            <a 
              href="https://chatgpt.com/g/g-AmVAYOglF-fisherman-gpt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="neon-btn whitespace-nowrap text-sm lg:text-base"
              title="Use Free AI Fishing Tool"
            >
              USE Free AI Fishing Tool
            </a>
            <a href="#features" className="text-white hover:text-cyber-blue transition-colors text-sm lg:text-base whitespace-nowrap" title="AI Fishing Features">AI Features</a>
            <a href="#how-it-works" className="text-white hover:text-cyber-blue transition-colors text-sm lg:text-base whitespace-nowrap" title="How AI Fishing Works">How It Works</a>
            <a href="#faq" className="text-white hover:text-cyber-blue transition-colors text-sm lg:text-base whitespace-nowrap" title="AI Fishing FAQ">FAQ</a>
            <a href="#disclaimer" className="text-white hover:text-cyber-blue transition-colors text-sm lg:text-base whitespace-nowrap" title="AI Tool Disclaimer">Disclaimer</a>
            <a 
              href={AIWEBTOOLS_URL}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-cyber-blue transition-colors text-sm lg:text-base whitespace-nowrap"
              title="More Free AI Tools - AiWebTools.AI"
            >
              More Free AI Tools
            </a>
          </nav>
          
          <button 
            className="md:hidden text-white p-2 -mr-2 active:scale-95 transition-transform" 
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? (
              <X className="h-6 w-6 text-cyber-blue" />
            ) : (
              <Menu className="h-6 w-6 text-cyber-blue" />
            )}
          </button>
        </div>
      </motion.header>
      
      {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
    </>
  );
};

export default Header;
