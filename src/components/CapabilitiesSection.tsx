
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Fish, Compass, Target, Navigation2 } from 'lucide-react';

const capabilities = [
  {
    icon: <MapPin className="w-8 h-8 text-cyber-blue" />,
    title: "Scope Out the Best Fishing Spots",
    description: "Get personalized recommendations for fishing locations based on your target species, time of year, and local conditions.",
    color: "border-cyber-blue"
  },
  {
    icon: <Fish className="w-8 h-8 text-cyber-purple" />,
    title: "Identify Fish You Catch",
    description: "Upload a photo of your catch and get immediate identification, including species information, typical size ranges, and regulations.",
    color: "border-cyber-purple"
  },
  {
    icon: <Compass className="w-8 h-8 text-cyber-green" />,
    title: "Discover the Best Bait",
    description: "Learn which baits and lures work best for your fishing area, target species, and current weather conditions.",
    color: "border-cyber-green"
  },
  {
    icon: <Target className="w-8 h-8 text-cyber-blue" />,
    title: "Seasonal Fishing Calendars",
    description: "Access detailed calendars showing the best times to catch specific species in your region throughout the year.",
    color: "border-cyber-blue"
  },
  {
    icon: <Navigation2 className="w-8 h-8 text-cyber-purple" />,
    title: "Local Regulations Guide",
    description: "Instantly understand fishing licenses, catch limits, size restrictions, and seasonal regulations for your location.",
    color: "border-cyber-purple"
  }
];

const CapabilitiesSection = () => {
  return (
    <section id="capabilities" className="py-20 cyber-grid relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-cyber font-bold mb-4">
            What <span className="neon-text">Fisherman GPT</span> Can Do
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Leverage the power of AI to enhance every aspect of your fishing experience
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className={`cyber-card p-6 border-l-4 ${capability.color}`}
            >
              <div className="mb-4">
                {capability.icon}
              </div>
              <h3 className="text-xl font-cyber font-bold mb-3 text-white">
                {capability.title}
              </h3>
              <p className="text-gray-300">
                {capability.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a 
            href="https://chatgpt.com/g/g-AmVAYOglF-fisherman-gpt" 
            target="_blank" 
            rel="noopener noreferrer"
            className="neon-btn px-8 py-4"
          >
            USE Fisherman GPT Now
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
