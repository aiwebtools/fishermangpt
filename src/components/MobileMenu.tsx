
import React from 'react';
import { motion } from 'framer-motion';

const AIWEBTOOLS_URL = "https://aiwebtools.lovable.app/?via=aiwebtools";

interface MobileMenuProps {
  onClose: () => void;
}

const menuItems = [
  { href: "https://chatgpt.com/g/g-AmVAYOglF-fisherman-gpt", label: "USE Fisherman GPT Now", isExternal: true, isCta: true },
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#faq", label: "FAQ" },
  { href: "#disclaimer", label: "Disclaimer" },
  { href: AIWEBTOOLS_URL, label: "More AI Tools", isExternal: true },
];

const MobileMenu = ({ onClose }: MobileMenuProps) => {
  return (
    <motion.div 
      id="mobile-menu"
      className="fixed inset-0 z-40 bg-cyber-black/95 backdrop-blur-xl md:hidden pt-20 overflow-y-auto"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.15 }}
    >
      <nav className="flex flex-col items-center space-y-6 p-6">
        {menuItems.map((item, i) => (
          <motion.a
            key={item.href}
            href={item.href}
            target={item.isExternal ? "_blank" : undefined}
            rel={item.isExternal ? "noopener noreferrer" : undefined}
            className={item.isCta 
              ? "neon-btn w-full max-w-xs text-center text-base py-3" 
              : "text-white text-lg hover:text-cyber-blue transition-colors active:scale-95"
            }
            onClick={onClose}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            {item.label}
          </motion.a>
        ))}
      </nav>
    </motion.div>
  );
};

export default MobileMenu;
