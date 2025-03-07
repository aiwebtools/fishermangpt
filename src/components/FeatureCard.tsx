
import React from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
      className="cyber-card p-6 h-full animate-pulse-glow"
    >
      <div className="flex flex-col h-full">
        <div className="rounded-full w-16 h-16 flex items-center justify-center bg-white/5 mb-4">
          {icon}
        </div>
        
        <h3 className="text-xl font-cyber font-bold mb-3 text-white">{title}</h3>
        
        <p className="text-gray-300 flex-grow">{description}</p>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
