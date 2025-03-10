
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, CheckCircle } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const DisclaimerPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();
  
  useEffect(() => {
    // Check if the user has already agreed to the disclaimer
    const hasAgreed = localStorage.getItem('disclaimerAgreed');
    
    if (!hasAgreed) {
      // Show popup after a small delay for better UX
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);
  
  const handleAgree = () => {
    localStorage.setItem('disclaimerAgreed', 'true');
    setIsOpen(false);
    toast({
      title: "Welcome aboard!",
      description: "You're all set to explore Fisherman GPT.",
      variant: "default",
    });
  };
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="relative max-w-md w-full rounded-xl overflow-hidden"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ type: "spring", bounce: 0.4 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/30 via-cyber-purple/20 to-cyber-green/30 animate-pulse-glow"></div>
            
            <div className="relative glass border border-white/20 p-6 rounded-xl">
              <div className="flex items-center justify-center mb-4">
                <Shield className="text-cyber-blue w-8 h-8 mr-3" />
                <h2 className="text-2xl font-cyber text-white">
                  <span className="text-gradient">LEGAL</span> DISCLAIMER
                </h2>
              </div>
              
              <div className="mb-6 text-gray-300 space-y-4 max-h-[40vh] overflow-y-auto custom-scrollbar text-sm">
                <p>
                  By using Fisherman GPT, you acknowledge that all fishing recommendations, spots, and techniques are provided for informational purposes only. Success in fishing depends on numerous factors including weather, season, skill level, and luck.
                </p>
                <p>
                  You are solely responsible for complying with all local fishing regulations, obtaining appropriate licenses, and adhering to legal requirements. Fisherman GPT's advice does not supersede official regulations.
                </p>
                <p>
                  AI WEB TOOLS LLC assumes no liability for any direct or indirect damages arising from the use of Fisherman GPT, including but not limited to personal injury, property damage, or financial losses.
                </p>
                <p>
                  For the complete terms of use, please visit our full disclaimer section.
                </p>
              </div>
              
              <motion.button
                onClick={handleAgree}
                className="w-full flex items-center justify-center py-3 px-6 rounded-md relative group overflow-hidden"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-green opacity-80 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                <span className="relative flex items-center font-cyber text-white text-lg">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  I AGREE
                </span>
                <div className="absolute bottom-0 left-0 h-1 w-full bg-white/20 overflow-hidden">
                  <motion.div 
                    className="h-full bg-white" 
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  />
                </div>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DisclaimerPopup;
