
import React from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

const FeatureCard = ({ title, description, icon, delay = 0 }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="cyber-card p-6 h-full bg-cyber-black/50"
    >
      <div className="flex flex-col h-full">
        <div className="rounded-full w-16 h-16 flex items-center justify-center bg-white/5 mb-4 border border-cyber-blue/30">
          {icon}
        </div>
        
        <h3 className="text-xl font-cyber font-bold mb-3 text-white">{title}</h3>
        
        <p className="text-gray-300 flex-grow">{description}</p>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
