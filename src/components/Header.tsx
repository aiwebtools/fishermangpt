
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Fish, Menu, X } from 'lucide-react';
import MobileMenu from './MobileMenu';

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
        if (mobileMenu && !mobileMenu.contains(e.target) && !e.target.closest('button[aria-label="Toggle menu"]')) {
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
          
          <nav className="hidden md:flex items-center space-x-6">
            <a 
              href="https://chatgpt.com/g/g-AmVAYOglF-fisherman-gpt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="neon-btn"
            >
              USE Fisherman GPT Now
            </a>
            <a href="#features" className="text-white hover:text-cyber-blue transition-colors">Features</a>
            <a href="#how-it-works" className="text-white hover:text-cyber-blue transition-colors">How It Works</a>
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
      
      {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
    </>
  );
};

export default Header;
